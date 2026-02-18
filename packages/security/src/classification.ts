export const INTELLIGENCE_CLASSIFICATIONS = {
  INTERNAL_ONLY: 'internal-only',
  SHAREABLE: 'shareable',
  CONFIDENTIAL: 'confidential',
} as const;

export type IntelligenceClassification =
  (typeof INTELLIGENCE_CLASSIFICATIONS)[keyof typeof INTELLIGENCE_CLASSIFICATIONS];

export function classifyOutput(
  _content: unknown,
  override?: IntelligenceClassification,
): IntelligenceClassification {
  if (override) return override;
  return INTELLIGENCE_CLASSIFICATIONS.INTERNAL_ONLY;
}
