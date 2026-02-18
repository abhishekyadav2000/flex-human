export type MemoryTier = 'static' | 'operational' | 'analytical';

export interface MemoryEntry {
  id: string;
  tier: MemoryTier;
  entityType: string;
  entityId: string;
  data: Record<string, unknown>;
  provenance: Provenance;
  createdAt: Date;
}

export interface Provenance {
  source: string;
  author: string;
  origin: string;
  ingestedAt: Date;
  references: string[];
}

export interface VersionedRecord {
  id: string;
  entityType: string;
  entityId: string;
  version: number;
  data: Record<string, unknown>;
  createdAt: Date;
  createdBy: string;
}

export interface EmbeddingRecord {
  id: string;
  knowledgeEntryId: string;
  embedding: number[];
  modelVersion: string;
  createdAt: Date;
}
