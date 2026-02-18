import type { FastifyReply, FastifyRequest } from 'fastify';
import { SECURE_HEADERS } from '@flex-human/security';

export async function secureHeaders(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
  for (const [key, value] of Object.entries(SECURE_HEADERS)) {
    reply.header(key, value);
  }
}
