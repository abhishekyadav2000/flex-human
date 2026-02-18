import type { AuditLogEntry } from '@flex-human/types';

export interface AuditLogStore {
  write(entry: Omit<AuditLogEntry, 'id' | 'createdAt'>): Promise<void>;
  query(filters: AuditLogQueryFilters): Promise<AuditLogEntry[]>;
}

export interface AuditLogQueryFilters {
  actorId?: string;
  resource?: string;
  resourceId?: string;
  action?: AuditLogEntry['action'];
  from?: Date;
  to?: Date;
  limit?: number;
  offset?: number;
}

export function createAuditLogger(store: AuditLogStore) {
  return {
    async log(
      actorId: string,
      action: AuditLogEntry['action'],
      resource: string,
      resourceId: string,
      diff: Record<string, unknown> | null = null,
      metadata: { ipAddress?: string; userAgent?: string } = {},
    ): Promise<void> {
      await store.write({
        actorId,
        action,
        resource,
        resourceId,
        diff,
        ipAddress: metadata.ipAddress ?? null,
        userAgent: metadata.userAgent ?? null,
      });
    },
    query: store.query.bind(store),
  };
}
