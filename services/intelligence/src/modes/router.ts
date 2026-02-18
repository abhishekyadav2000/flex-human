import type { ExecutionMode } from '@flex-human/types';
import type { Pipeline, PipelineInput, PipelineResult } from '../pipelines/types.js';
import { ResearchPipeline } from '../pipelines/research.js';
import { ExperimentPipeline } from '../pipelines/experiment.js';
import { SurveillancePipeline } from '../pipelines/surveillance.js';
import { DecisionPipeline } from '../pipelines/decision.js';
import { ContentPipeline } from '../pipelines/content.js';
import { ManufacturingPipeline } from '../pipelines/manufacturing.js';
import { CompliancePipeline } from '../pipelines/compliance.js';

export interface ExecutionModeConfig {
  riskTolerance: 'very_low' | 'low' | 'medium';
  pipeline: Pipeline;
}

const MODE_CONFIG: Record<ExecutionMode, ExecutionModeConfig> = {
  planning: { riskTolerance: 'low', pipeline: new DecisionPipeline() },
  research: { riskTolerance: 'low', pipeline: new ResearchPipeline() },
  experiment_design: { riskTolerance: 'medium', pipeline: new ExperimentPipeline() },
  competitive_surveillance: { riskTolerance: 'low', pipeline: new SurveillancePipeline() },
  content_generation: { riskTolerance: 'low', pipeline: new ContentPipeline() },
  manufacturing_optimization: { riskTolerance: 'medium', pipeline: new ManufacturingPipeline() },
  risk_compliance: { riskTolerance: 'very_low', pipeline: new CompliancePipeline() },
};

export class ModeRouter {
  async execute(mode: ExecutionMode, input: PipelineInput): Promise<PipelineResult> {
    const config = MODE_CONFIG[mode];
    if (!config) {
      return {
        signals: [],
        artifacts: [],
        errors: [{ code: 'INVALID_MODE', message: `Unknown mode: ${mode}`, recoverable: false }],
      };
    }

    console.log(`[ModeRouter] Executing mode=${mode} riskTolerance=${config.riskTolerance}`);
    return config.pipeline.execute(input);
  }

  getConfig(mode: ExecutionMode): ExecutionModeConfig | undefined {
    return MODE_CONFIG[mode];
  }

  getSupportedModes(): ExecutionMode[] {
    return Object.keys(MODE_CONFIG) as ExecutionMode[];
  }
}
