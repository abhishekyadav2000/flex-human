export interface Material {
  id: string;
  name: string;
  composition: string;
  classification: string;
  supplierId: string | null;
  properties: MaterialProperty[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface MaterialProperty {
  id: string;
  materialId: string;
  property: string;
  value: number;
  unit: string;
  testMethod: string | null;
  testedAt: Date | null;
  source: 'experimental' | 'published' | 'simulated';
  confidence: number;
}

export interface Experiment {
  id: string;
  title: string;
  hypothesis: string;
  rationale: string;
  status: 'draft' | 'active' | 'complete' | 'failed' | 'archived';
  materialIds: string[];
  variables: ExperimentVariable[];
  version: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export interface ExperimentVariable {
  name: string;
  type: 'independent' | 'dependent' | 'controlled';
  value: string;
  unit: string;
}

export interface Hypothesis {
  id: string;
  experimentId: string;
  statement: string;
  rationale: string;
  status: 'proposed' | 'testing' | 'supported' | 'refuted' | 'inconclusive';
  createdAt: Date;
  createdBy: string;
}

export interface TestResult {
  id: string;
  experimentId: string;
  materialId: string | null;
  metric: string;
  predictedValue: number | null;
  actualValue: number;
  unit: string;
  deviation: number | null;
  testedAt: Date;
  createdBy: string;
}

export type SignalType = 'risk' | 'opportunity' | 'gap' | 'alert';

export type ExecutionMode =
  | 'planning'
  | 'research'
  | 'experiment_design'
  | 'competitive_surveillance'
  | 'content_generation'
  | 'manufacturing_optimization'
  | 'risk_compliance';

export interface Signal {
  id: string;
  title: string;
  description: string;
  signalType: SignalType;
  mode: ExecutionMode;
  confidence: number;
  sources: SignalSource[];
  status: 'new' | 'reviewed' | 'accepted' | 'dismissed';
  createdAt: Date;
  reviewedAt: Date | null;
  reviewedBy: string | null;
}

export interface SignalSource {
  type: string;
  id: string;
  label: string;
}

export interface SignalScore {
  id: string;
  signalId: string;
  strategicImpact: number;
  technicalFeasibility: number;
  costImplication: number;
  ipDefensibility: number;
  timeToValidate: number;
  riskExposure: number;
  competitiveAdvantage: number;
  compositeScore: number;
  createdAt: Date;
}

export interface PatentEntry {
  id: string;
  filingNumber: string;
  title: string;
  applicant: string;
  filingDate: Date;
  jurisdiction: string;
  status: string;
  relevanceScore: number;
  overlapRisk: 'none' | 'low' | 'medium' | 'high';
  notes: string | null;
  createdAt: Date;
}

export interface CompetitorEntry {
  id: string;
  name: string;
  domain: string;
  products: string[];
  differentiators: string[];
  threatLevel: 'low' | 'medium' | 'high';
  lastUpdated: Date;
  notes: string | null;
}

export interface KnowledgeNode {
  id: string;
  entryId: string;
  entityType: string;
  entityName: string;
  relations: KnowledgeRelation[];
  createdAt: Date;
}

export interface KnowledgeRelation {
  targetNodeId: string;
  relationType: string;
  weight: number;
}
