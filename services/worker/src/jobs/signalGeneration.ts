import type { Job } from 'bullmq';

export interface SignalGenerationPayload {
  mode: string;
  context: Record<string, unknown>;
}

export async function signalGenerationProcessor(job: Job<SignalGenerationPayload>): Promise<void> {
  const { mode } = job.data;
  console.log(`Generating intelligence signals in mode: ${mode}`);
  // TODO: run intelligence pipeline, generate signals, score, apply guardrails
}
