import type { Job } from 'bullmq';

export interface DocumentIngestionPayload {
  documentId: string;
  source: string;
  content: string;
}

export async function documentIngestionProcessor(
  job: Job<DocumentIngestionPayload>,
): Promise<void> {
  const { documentId, source } = job.data;
  console.log(`Processing document ingestion: ${documentId} from ${source}`);
  // TODO: parse content, extract entities, generate embeddings, store in knowledge graph
}
