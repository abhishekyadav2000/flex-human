import { classifyOutput, type IntelligenceClassification } from '@flex-human/security';
import type { PipelineResult } from '../pipelines/types.js';

export interface GuardrailViolation {
  rule: string;
  message: string;
  severity: 'warning' | 'error';
}

export class GuardrailEnforcer {
  enforce(result: PipelineResult): { passed: boolean; violations: GuardrailViolation[] } {
    const violations: GuardrailViolation[] = [];

    for (const signal of result.signals) {
      if (!signal.sources || signal.sources.length === 0) {
        violations.push({
          rule: 'source_traceability',
          message: `Signal "${signal.title}" has no source references.`,
          severity: 'error',
        });
      }

      if (signal.confidence === undefined || signal.confidence === null) {
        violations.push({
          rule: 'confidence_required',
          message: `Signal "${signal.title}" is missing a confidence level.`,
          severity: 'error',
        });
      }
    }

    return {
      passed: violations.filter((v) => v.severity === 'error').length === 0,
      violations,
    };
  }

  classify(result: PipelineResult): IntelligenceClassification {
    return classifyOutput(result);
  }
}
