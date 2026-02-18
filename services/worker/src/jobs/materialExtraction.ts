import type { Job } from 'bullmq';

export interface MaterialExtractionPayload {
  knowledgeEntryId: string;
}

export async function materialExtractionProcessor(
  job: Job<MaterialExtractionPayload>,
): Promise<void> {
  const { knowledgeEntryId } = job.data;
  console.log(`Extracting material properties from knowledge entry: ${knowledgeEntryId}`);
  // TODO: extract structured material properties, update materials registry
}
