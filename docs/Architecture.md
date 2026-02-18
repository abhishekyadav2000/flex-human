# Architecture

> System overview, module boundaries, data flows, and integration points.

---

## 1. System Tiers

```
┌─────────────────────────────────────────────────────────┐
│                     PUBLIC TIER                          │
│  apps/web — Next.js 15, static + SSR, CDN-delivered     │
└────────────────────────┬────────────────────────────────┘
                         │ HTTPS
┌────────────────────────▼────────────────────────────────┐
│                    PLATFORM TIER                         │
│  apps/platform — Next.js 15, authenticated dashboard    │
│  services/api  — Fastify, core REST API                 │
│  services/worker — BullMQ job processor                 │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                  INTELLIGENCE TIER                       │
│  services/intelligence — pipeline interfaces, mode      │
│  router, signal scoring, guardrail enforcement          │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                      DATA TIER                           │
│  PostgreSQL 16 + pgvector — relational + vector store   │
│  Redis — job queues + ephemeral cache                   │
│  Static files — soul.md, brand rules, IP rules          │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Module Map

### 2.1 Apps

| Module               | Path            | Purpose                                                | Owner                |
| -------------------- | --------------- | ------------------------------------------------------ | -------------------- |
| Public Website       | `apps/web`      | Brand presence, technology showcase, SEO, lead capture | FlexWebEngineer      |
| Flex Brain Dashboard | `apps/platform` | Internal operations, intelligence, vendor management   | FlexPlatformEngineer |

### 2.2 Services

| Module       | Path                    | Purpose                                                   | Owner                             |
| ------------ | ----------------------- | --------------------------------------------------------- | --------------------------------- |
| Core API     | `services/api`          | REST endpoints, auth, RBAC, audit, CRUD                   | FlexPlatformEngineer              |
| Worker       | `services/worker`       | Async jobs: ingestion, indexing, signal generation        | FlexKnowledge                     |
| Intelligence | `services/intelligence` | Pipeline orchestration, mode routing, scoring, guardrails | FlexManufacturingAI / FlexIPIntel |

### 2.3 Packages

| Package  | Path                | Purpose                                                  |
| -------- | ------------------- | -------------------------------------------------------- |
| UI       | `packages/ui`       | Shared component library, design tokens, Tailwind config |
| Config   | `packages/config`   | ESLint, TSConfig presets                                 |
| Types    | `packages/types`    | Shared TypeScript domain types                           |
| Security | `packages/security` | Auth helpers, RBAC, audit logger, rate limiting          |

---

## 3. Data Flow

### 3.1 Public Website

```
Browser → CDN → apps/web (Next.js SSR/SSG)
                    ↓ (contact form, partner inquiry)
               services/api → PostgreSQL (leads table)
```

### 3.2 Flex Brain Dashboard

```
Browser → apps/platform (authenticated)
              ↓
         services/api
              ↓
         PostgreSQL (operational memory)
              ↓
         services/worker (async jobs)
              ↓
         services/intelligence (pipelines)
              ↓
         PostgreSQL pgvector (analytical memory)
```

### 3.3 Intelligence Pipeline

```
Trigger (manual / scheduled / event)
    ↓
services/intelligence (mode router)
    ↓ selects pipeline
ResearchPipeline / ExperimentPipeline / SurveillancePipeline /
DecisionPipeline / ContentPipeline / ManufacturingPipeline / CompliancePipeline
    ↓
Guardrail enforcement
    ↓
Signal scoring (7 dimensions)
    ↓
Output → services/api → PostgreSQL (signals table)
    ↓
apps/platform (signals dashboard)
```

---

## 4. Memory Tier Mapping

| Tier        | Storage                                             | Access Pattern                  | Mutability                           |
| ----------- | --------------------------------------------------- | ------------------------------- | ------------------------------------ |
| Static      | Versioned files (soul.md, docs/\*.md) + config rows | Read-only at runtime            | Immutable without executive override |
| Operational | PostgreSQL relational tables                        | Full CRUD via API               | Continuously updated, audit-logged   |
| Analytical  | PostgreSQL pgvector tables                          | Read-heavy, write via pipelines | Append-mostly, versioned             |

---

## 5. Authentication & Authorization

- Session-based auth for MVP (JWT upgrade path documented in ADR)
- RBAC with five roles: admin, engineer, researcher, viewer, vendor
- Middleware enforcement at `services/api` boundary
- All mutations audit-logged with actor, timestamp, action, resource, diff

---

## 6. Security Boundaries

- Public tier: no auth required, rate-limited, secure headers
- Platform tier: auth required, RBAC enforced, audit logged
- Intelligence tier: internal only, no direct external access
- Data tier: network-isolated, connection via service layer only
- Secrets: `.env` locally, vault-ready architecture

---

## 7. Integration Points (Future)

| Integration                                   | Protocol  | Phase                 |
| --------------------------------------------- | --------- | --------------------- |
| External paper APIs (Semantic Scholar, arXiv) | REST      | Phase 4               |
| Patent databases (USPTO, EPO)                 | REST/SOAP | Phase 4               |
| Manufacturing telemetry ingestion             | MQTT/HTTP | Phase 3               |
| LLM providers (for intelligence pipelines)    | REST      | Phase 4               |
| Vector DB upgrade (Pinecone/Weaviate)         | gRPC/REST | Post-MVP (ADR-driven) |

---

## 8. Deployment Architecture (Target)

```
Production:
  CDN → apps/web (Vercel / Cloudflare Pages)
  Load Balancer → apps/platform (containerized)
  Load Balancer → services/api (containerized)
  services/worker (containerized, auto-scaled)
  services/intelligence (containerized, scheduled)
  PostgreSQL (managed, encrypted at rest)
  Redis (managed)

Local Development:
  docker-compose: PostgreSQL + pgvector, Redis
  pnpm dev: all apps + services with turbo
```

---

## 9. Conventions

- All inter-service communication via REST over HTTP (gRPC upgrade path reserved)
- All database access via `services/api` — no direct DB access from apps
- All async work via BullMQ queues through `services/worker`
- All intelligence pipelines via `services/intelligence` interfaces
- Shared types in `packages/types` — no type duplication across modules
