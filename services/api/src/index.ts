import Fastify from 'fastify';
import cors from '@fastify/cors';
import cookie from '@fastify/cookie';
import rateLimit from '@fastify/rate-limit';
import { healthRoutes } from './routes/health.js';
import { authRoutes } from './routes/auth.js';
import { vendorRoutes } from './routes/vendors.js';
import { projectRoutes } from './routes/projects.js';
import { materialRoutes } from './routes/materials.js';
import { experimentRoutes } from './routes/experiments.js';
import { complianceRoutes } from './routes/compliance.js';
import { signalRoutes } from './routes/signals.js';
import { knowledgeRoutes } from './routes/knowledge.js';
import { auditLogRoutes } from './routes/auditLogs.js';
import { secureHeaders } from './middleware/secureHeaders.js';
import { errorHandler } from './middleware/errorHandler.js';

const PORT = parseInt(process.env['PORT'] ?? '4000', 10);
const HOST = process.env['HOST'] ?? '0.0.0.0';

async function start() {
  const app = Fastify({ logger: true });

  await app.register(cors, { origin: true, credentials: true });
  await app.register(cookie);
  await app.register(rateLimit, { max: 100, timeWindow: '1 minute' });

  app.addHook('onSend', secureHeaders);
  app.setErrorHandler(errorHandler);

  await app.register(healthRoutes, { prefix: '/api' });
  await app.register(authRoutes, { prefix: '/api/auth' });
  await app.register(vendorRoutes, { prefix: '/api/vendors' });
  await app.register(projectRoutes, { prefix: '/api/projects' });
  await app.register(materialRoutes, { prefix: '/api/materials' });
  await app.register(experimentRoutes, { prefix: '/api/experiments' });
  await app.register(complianceRoutes, { prefix: '/api/compliance' });
  await app.register(signalRoutes, { prefix: '/api/signals' });
  await app.register(knowledgeRoutes, { prefix: '/api/knowledge' });
  await app.register(auditLogRoutes, { prefix: '/api/audit-logs' });

  await app.listen({ port: PORT, host: HOST });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
