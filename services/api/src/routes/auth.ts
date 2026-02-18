import type { FastifyInstance } from 'fastify';

export async function authRoutes(app: FastifyInstance) {
  app.post('/login', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });

  app.post('/logout', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });

  app.get('/me', async (_request, _reply) => {
    return { data: null, message: 'Not implemented' };
  });
}
