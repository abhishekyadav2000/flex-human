export interface Vendor {
  id: string;
  name: string;
  region: string;
  capabilities: string[];
  isoCertifications: string[];
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  status: 'prospect' | 'onboarding' | 'active' | 'suspended' | 'terminated';
  contacts: VendorContact[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface VendorContact {
  name: string;
  email: string;
  role: string;
  phone?: string;
}

export interface VendorScorecard {
  id: string;
  vendorId: string;
  quality: number;
  delivery: number;
  cost: number;
  compliance: number;
  risk: number;
  overallScore: number;
  notes: string | null;
  evaluatedAt: Date;
  evaluatedBy: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'draft' | 'active' | 'review' | 'complete' | 'archived';
  phase: string;
  ownerId: string;
  teamMemberIds: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface ComplianceItem {
  id: string;
  standard: string;
  requirement: string;
  jurisdiction: string;
  status: 'not_started' | 'in_progress' | 'compliant' | 'expired';
  evidenceUrl: string | null;
  expiresAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Document {
  id: string;
  title: string;
  content: string;
  source: string;
  tags: string[];
  provenanceAuthor: string;
  provenanceOrigin: string;
  version: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  deletedAt: Date | null;
}
