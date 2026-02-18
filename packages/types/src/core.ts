export type Role = 'admin' | 'engineer' | 'researcher' | 'viewer' | 'vendor';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface Session {
  id: string;
  userId: string;
  expiresAt: Date;
  createdAt: Date;
}

export interface AuditLogEntry {
  id: string;
  actorId: string;
  action: 'create' | 'update' | 'delete';
  resource: string;
  resourceId: string;
  diff: Record<string, unknown> | null;
  ipAddress: string | null;
  userAgent: string | null;
  createdAt: Date;
}

export type Permission = 'create' | 'read' | 'update' | 'delete';

export interface RolePermission {
  role: Role;
  resource: string;
  permissions: Permission[];
}
