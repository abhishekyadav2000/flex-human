import type { Pipeline, PipelineInput, PipelineResult } from './types.js';

export class ResearchPipeline implements Pipeline {
  name = 'ResearchPipeline';
  mode = 'research' as const;

  async execute(_input: PipelineInput): Promise<PipelineResult> {
    // TODO Phase 4: Ingest papers, extract insights, update material knowledge graph
    return { signals: [], artifacts: [], errors: [] };
  }
}
