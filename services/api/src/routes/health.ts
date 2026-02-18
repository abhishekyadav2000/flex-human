import type { FastifyInstance } from 'fastify';

export async function healthRoutes(app: FastifyInstance) {
  app.get('/', async (_request, _reply) => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });
}
