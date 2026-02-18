import type { FastifyInstance } from 'fastify';

export async function signalRoutes(app: FastifyInstance) {
  app.get('/', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });

  app.get('/:id', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });

  app.put('/:id/review', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });
}
