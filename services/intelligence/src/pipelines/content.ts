import type { Pipeline, PipelineInput, PipelineResult } from './types.js';

export class ContentPipeline implements Pipeline {
  name = 'ContentPipeline';
  mode = 'content_generation' as const;

  async execute(_input: PipelineInput): Promise<PipelineResult> {
    // TODO Post-MVP: Generate pages, whitepapers, marketing material per BrandSystem.md
    return { signals: [], artifacts: [], errors: [] };
  }
}
