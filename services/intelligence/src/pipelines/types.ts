import type { ExecutionMode, Signal } from '@flex-human/types';

export interface PipelineInput {
  mode: ExecutionMode;
  context: Record<string, unknown>;
  triggeredBy: string;
}

export interface PipelineResult {
  signals: Omit<Signal, 'id' | 'createdAt'>[];
  artifacts: PipelineArtifact[];
  errors: PipelineError[];
}

export interface PipelineArtifact {
  type: string;
  label: string;
  data: Record<string, unknown>;
}

export interface PipelineError {
  code: string;
  message: string;
  recoverable: boolean;
}

export interface Pipeline {
  name: string;
  mode: ExecutionMode;
  execute(input: PipelineInput): Promise<PipelineResult>;
}
