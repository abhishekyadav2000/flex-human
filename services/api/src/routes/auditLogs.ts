import type { FastifyInstance } from 'fastify';

export async function auditLogRoutes(app: FastifyInstance) {
  app.get('/', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });
}
