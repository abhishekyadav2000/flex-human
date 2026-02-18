import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

export function errorHandler(
  error: FastifyError,
  _request: FastifyRequest,
  reply: FastifyReply,
): void {
  const statusCode = error.statusCode ?? 500;
  const message = statusCode >= 500 ? 'Internal Server Error' : error.message;

  if (statusCode >= 500) {
    _request.log.error(error);
  }

  reply.status(statusCode).send({
    error: true,
    message,
    statusCode,
  });
}
