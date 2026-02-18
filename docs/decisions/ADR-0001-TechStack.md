# ADR-0001: Technology Stack Selection

**Status:** Accepted
**Date:** 2026-02-17
**Decision Makers:** FlexOrchestrator

---

## Context

Flex Human requires a technology stack that supports:

- A premium public website with strong SEO
- An authenticated internal platform (Flex Brain)
- A REST API with strict auth and audit logging
- Async job processing for ingestion and intelligence pipelines
- Relational data + vector embeddings for three-tier memory
- Local-first development with production parity
- Monorepo management across apps, services, and shared packages

---

## Decision

| Layer              | Choice                                     | Version                 |
| ------------------ | ------------------------------------------ | ----------------------- |
| Monorepo           | pnpm workspaces + Turborepo                | pnpm 10.x, turbo latest |
| Language           | TypeScript (strict mode)                   | TS 5.x                  |
| Frontend framework | Next.js (App Router)                       | 15.x                    |
| Styling            | Tailwind CSS + design tokens               | 4.x                     |
| Backend framework  | Fastify                                    | 5.x                     |
| Database           | PostgreSQL + pgvector                      | PG 16, pgvector 0.7+    |
| Queue              | BullMQ + Redis                             | BullMQ 5.x, Redis 7.x   |
| ORM/Query          | Raw SQL via `postgres` (porsager/postgres) | Latest                  |
| Migration          | `postgres-migrations`                      | Latest                  |
| Testing            | Vitest                                     | Latest                  |
| Linting            | ESLint + Prettier                          | Latest                  |
| CI                 | GitHub Actions                             | N/A                     |
| Containers         | Docker Compose (local dev)                 | N/A                     |
| Node runtime       | Node.js 22 LTS                             | 22.x                    |

---

## Alternatives Considered

### Frontend: Remix vs Next.js

Remix offers better progressive enhancement. Next.js chosen for: larger ecosystem, better static generation for public site, Vercel deployment path, team familiarity. Revisit if SSR streaming becomes critical.

### Backend: Express vs Fastify vs Hono

Express: mature but slower, less TypeScript-native. Hono: fast but smaller ecosystem. Fastify: excellent performance, schema validation, TypeScript support, plugin system. Fastify selected.

### Database: MongoDB vs PostgreSQL

MongoDB: flexible schema. PostgreSQL: relational integrity for operational memory, pgvector for analytical memory in single system, mature tooling, JSONB for semi-structured data. PostgreSQL selected for unified storage.

### Vector DB: Pinecone/Weaviate vs pgvector

Dedicated vector DBs offer better performance at scale. pgvector selected for MVP to reduce infrastructure complexity. Upgrade trigger: > 10M embeddings or latency > 100ms on similarity queries. Document upgrade path in ADR-0002.

### ORM: Drizzle vs Prisma vs raw SQL

Prisma: heavy, schema-first conflicts with migration-first approach. Drizzle: good but adds abstraction. Raw SQL via `postgres` library: maximum control, no ORM overhead, explicit queries. Selected for transparency and performance.

### Queue: BullMQ vs RabbitMQ vs SQS

RabbitMQ: powerful but complex deployment. SQS: cloud-locked. BullMQ: Redis-backed, simple, good dashboard (Bull Board), sufficient for current scale.

---

## Consequences

### Positive

- Single language (TypeScript) across entire stack
- pgvector eliminates need for separate vector DB infrastructure
- Turborepo provides fast cached builds across monorepo
- Fastify schema validation aligns with strict typing philosophy
- Raw SQL provides full control over query performance

### Negative

- Raw SQL requires more developer discipline (no ORM safety net)
- pgvector may need replacement at scale (documented upgrade path)
- pnpm less common than npm (minor onboarding friction)

### Risks

- Next.js 15 App Router still evolving (mitigated by conservative feature use)
- pgvector performance ceiling unknown until real data loaded (mitigated by benchmark plan in Phase 3)

---

## Upgrade Paths

| Component      | Trigger                              | Upgrade To              |
| -------------- | ------------------------------------ | ----------------------- |
| pgvector       | > 10M vectors or > 100ms P95 latency | Pinecone / Weaviate     |
| BullMQ         | > 10K jobs/min sustained             | RabbitMQ or cloud queue |
| Fastify        | Need for gRPC inter-service          | tRPC or gRPC layer      |
| Docker Compose | Production deployment                | Kubernetes / ECS        |
| GitHub Actions | Complex pipeline needs               | GitLab CI / Buildkite   |

---

_Next review: Phase 2 completion._
