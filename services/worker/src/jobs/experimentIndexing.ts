import type { Job } from 'bullmq';

export interface ExperimentIndexingPayload {
  experimentId: string;
}

export async function experimentIndexingProcessor(
  job: Job<ExperimentIndexingPayload>,
): Promise<void> {
  const { experimentId } = job.data;
  console.log(`Indexing experiment for search: ${experimentId}`);
  // TODO: generate embeddings for experiment data, update analytical memory
}
