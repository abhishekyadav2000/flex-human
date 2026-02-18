import { Worker } from 'bullmq';
import { documentIngestionProcessor } from './jobs/documentIngestion.js';
import { materialExtractionProcessor } from './jobs/materialExtraction.js';
import { signalGenerationProcessor } from './jobs/signalGeneration.js';
import { experimentIndexingProcessor } from './jobs/experimentIndexing.js';

const REDIS_HOST = process.env['REDIS_HOST'] ?? 'localhost';
const REDIS_PORT = parseInt(process.env['REDIS_PORT'] ?? '6379', 10);
const connection = { host: REDIS_HOST, port: REDIS_PORT };

const workers = [
  new Worker('document-ingestion', documentIngestionProcessor, { connection }),
  new Worker('material-extraction', materialExtractionProcessor, { connection }),
  new Worker('signal-generation', signalGenerationProcessor, { connection }),
  new Worker('experiment-indexing', experimentIndexingProcessor, { connection }),
];

for (const worker of workers) {
  worker.on('completed', (job) => {
    console.log(`Job ${job.id} completed on queue ${job.queueName}`);
  });
  worker.on('failed', (job, err) => {
    console.error(`Job ${job?.id} failed on queue ${job?.queueName}:`, err.message);
  });
}

console.log(`Worker started with ${workers.length} queue processors.`);

async function shutdown() {
  console.log('Shutting down workers...');
  await Promise.all(workers.map((w) => w.close()));
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
