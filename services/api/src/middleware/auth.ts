import type { FastifyReply, FastifyRequest } from 'fastify';
import type { Role } from '@flex-human/types';
import { checkPermission, type Permission } from '@flex-human/security';

declare module 'fastify' {
  interface FastifyRequest {
    userId?: string;
    userRole?: Role;
  }
}

export async function requireAuth(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const sessionId = request.cookies['flex-session'];
  if (!sessionId) {
    reply.status(401).send({ error: true, message: 'Authentication required', statusCode: 401 });
    return;
  }
  // TODO: validate session against database
  request.userId = 'placeholder-user-id';
  request.userRole = 'admin';
}

export function requirePermission(resource: string, permission: Permission) {
  return async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    if (!request.userRole) {
      reply.status(401).send({ error: true, message: 'Authentication required', statusCode: 401 });
      return;
    }
    if (!checkPermission(request.userRole, resource, permission)) {
      reply.status(403).send({ error: true, message: 'Insufficient permissions', statusCode: 403 });
    }
  };
}
