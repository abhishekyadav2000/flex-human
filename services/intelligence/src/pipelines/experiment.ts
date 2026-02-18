import type { Pipeline, PipelineInput, PipelineResult } from './types.js';

export class ExperimentPipeline implements Pipeline {
  name = 'ExperimentPipeline';
  mode = 'experiment_design' as const;

  async execute(_input: PipelineInput): Promise<PipelineResult> {
    // TODO Phase 4: Analyze experiment data, suggest follow-ups, track sim vs real deviation
    return { signals: [], artifacts: [], errors: [] };
  }
}
