import type { SignalScore } from '@flex-human/types';

export interface ScoreDimensions {
  strategicImpact: number;
  technicalFeasibility: number;
  costImplication: number;
  ipDefensibility: number;
  timeToValidate: number;
  riskExposure: number;
  competitiveAdvantage: number;
}

const DEFAULT_WEIGHTS = {
  strategicImpact: 0.2,
  technicalFeasibility: 0.18,
  costImplication: 0.12,
  ipDefensibility: 0.18,
  timeToValidate: 0.1,
  riskExposure: 0.12,
  competitiveAdvantage: 0.1,
} as const;

export class SignalScoringEngine {
  private weights: typeof DEFAULT_WEIGHTS;

  constructor(weights?: Partial<typeof DEFAULT_WEIGHTS>) {
    this.weights = { ...DEFAULT_WEIGHTS, ...weights };
  }

  score(dimensions: ScoreDimensions): number {
    return (
      dimensions.strategicImpact * this.weights.strategicImpact +
      dimensions.technicalFeasibility * this.weights.technicalFeasibility +
      (11 - dimensions.costImplication) * this.weights.costImplication +
      dimensions.ipDefensibility * this.weights.ipDefensibility +
      (11 - dimensions.timeToValidate) * this.weights.timeToValidate +
      (11 - dimensions.riskExposure) * this.weights.riskExposure +
      dimensions.competitiveAdvantage * this.weights.competitiveAdvantage
    );
  }

  toSignalScore(
    signalId: string,
    dimensions: ScoreDimensions,
  ): Omit<SignalScore, 'id' | 'createdAt'> {
    return {
      signalId,
      ...dimensions,
      compositeScore: this.score(dimensions),
    };
  }
}
