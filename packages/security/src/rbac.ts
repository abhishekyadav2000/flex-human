import type { Role, Permission, RolePermission } from '@flex-human/types';

export const ROLE_PERMISSIONS: RolePermission[] = [
  { role: 'admin', resource: '*', permissions: ['create', 'read', 'update', 'delete'] },
  {
    role: 'engineer',
    resource: 'vendors',
    permissions: ['create', 'read', 'update', 'delete'],
  },
  {
    role: 'engineer',
    resource: 'projects',
    permissions: ['create', 'read', 'update', 'delete'],
  },
  {
    role: 'engineer',
    resource: 'materials',
    permissions: ['create', 'read', 'update', 'delete'],
  },
  {
    role: 'engineer',
    resource: 'experiments',
    permissions: ['create', 'read', 'update', 'delete'],
  },
  { role: 'engineer', resource: 'compliance', permissions: ['create', 'read', 'update'] },
  { role: 'engineer', resource: 'signals', permissions: ['read', 'update'] },
  { role: 'engineer', resource: 'knowledge', permissions: ['create', 'read', 'update', 'delete'] },
  { role: 'engineer', resource: 'audit_logs', permissions: ['read'] },
  {
    role: 'researcher',
    resource: 'knowledge',
    permissions: ['create', 'read', 'update', 'delete'],
  },
  {
    role: 'researcher',
    resource: 'materials',
    permissions: ['create', 'read', 'update', 'delete'],
  },
  {
    role: 'researcher',
    resource: 'experiments',
    permissions: ['create', 'read', 'update', 'delete'],
  },
  { role: 'researcher', resource: 'vendors', permissions: ['read'] },
  { role: 'researcher', resource: 'compliance', permissions: ['read'] },
  { role: 'researcher', resource: 'signals', permissions: ['read'] },
  { role: 'viewer', resource: '*', permissions: ['read'] },
  { role: 'vendor', resource: 'vendors', permissions: ['read'] },
];

export function checkPermission(role: Role, resource: string, permission: Permission): boolean {
  return ROLE_PERMISSIONS.some(
    (rp) =>
      rp.role === role &&
      (rp.resource === '*' || rp.resource === resource) &&
      rp.permissions.includes(permission),
  );
}
