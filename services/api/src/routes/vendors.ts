import type { FastifyInstance } from 'fastify';

export async function vendorRoutes(app: FastifyInstance) {
  app.get('/', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });

  app.get('/:id', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });

  app.post('/', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });

  app.put('/:id', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });

  app.delete('/:id', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });
}
