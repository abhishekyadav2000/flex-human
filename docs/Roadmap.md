# Roadmap

> Phased delivery plan for Flex Human digital systems.

---

## Phase 0: Bootstrap (Week 1-2)

**Goal:** Repository, tooling, documentation, CI, and schema foundation.

| Deliverable                                       | Status      |
| ------------------------------------------------- | ----------- |
| soul.md                                           | Complete    |
| Bootstrap Pack documents                          | Complete    |
| Monorepo scaffold (pnpm + turbo)                  | In progress |
| Shared packages (config, types, security, ui)     | In progress |
| apps/web shell (Next.js)                          | In progress |
| apps/platform shell (Next.js)                     | In progress |
| services/api shell (Fastify)                      | In progress |
| services/worker shell (BullMQ)                    | In progress |
| services/intelligence shell (pipeline interfaces) | In progress |
| Docker Compose (PostgreSQL + Redis)               | In progress |
| CI pipeline (GitHub Actions)                      | In progress |
| Initial database migrations (all tables)          | In progress |
| Weekly NBA Report #1                              | In progress |

---

## Phase 1: Public Website MVP (Week 3-6)

**Goal:** Premium public website live with full SEO and brand implementation.

| Deliverable              | Acceptance Criteria                                        |
| ------------------------ | ---------------------------------------------------------- |
| Home page                | Hero, pillars, trust signals, CTAs. Lighthouse >= 90.      |
| Technology page          | Skin architecture diagram, capabilities, manufacturing AI. |
| R&D page                 | Research roadmap visualization, focus areas.               |
| Manufacturing page       | Process flow, QC pipeline, standards.                      |
| Partnerships page        | Inquiry form, collaboration model.                         |
| Contact page             | Secure form with rate limiting and CSRF.                   |
| Legal page               | Privacy policy, terms, IP notice.                          |
| SEO foundation           | Sitemap, robots.txt, JSON-LD, OG tags.                     |
| Analytics integration    | GA4 or Plausible, event tracking stubs.                    |
| Performance optimization | < 2s LCP, < 100KB initial JS gzipped.                      |

---

## Phase 2: Flex Brain Foundation (Week 7-12)

**Goal:** Internal platform with auth, core modules, and operational memory active.

| Deliverable        | Acceptance Criteria                                              |
| ------------------ | ---------------------------------------------------------------- |
| Auth system        | Session-based login, RBAC enforcement, session management.       |
| Knowledge Base     | CRUD, tagging, provenance, full-text search, version history.    |
| Vendor Registry    | Profiles, onboarding workflow, scorecard, risk assessment.       |
| Materials Registry | Profiles, property data, vendor/experiment linkage, comparison.  |
| Dashboard          | Overview metrics, navigation, role-based views.                  |
| Audit logging      | 100% mutation coverage, queryable via admin UI.                  |
| API hardening      | Rate limiting, input validation, secure headers, error handling. |

---

## Phase 3: Intelligence Foundation (Week 13-20)

**Goal:** R&D tracking, compliance, manufacturing stubs, and intelligence pipeline scaffold.

| Deliverable                     | Acceptance Criteria                                                 |
| ------------------------------- | ------------------------------------------------------------------- |
| R&D Projects Tracker            | CRUD, status pipeline, artifacts, team assignment.                  |
| Experiment Engine               | Hypothesis recording, variables, results, versioning, sim vs. real. |
| Compliance Matrix               | Requirements, status tracking, evidence, gap identification.        |
| Manufacturing Telemetry         | Schema defined, API endpoint ready, dashboard placeholder.          |
| Intelligence Signals Dashboard  | Signal feed, scores, status workflow, filters, confidence.          |
| services/intelligence pipelines | Mode router active, stub pipelines callable, guardrails enforced.   |
| Signal scoring engine           | 7-dimension scoring functional, composite score calculation.        |

---

## Phase 4: Intelligence Activation (Week 21-30)

**Goal:** Research ingestion, patent surveillance, decision signals, and analytical memory population.

| Deliverable                      | Acceptance Criteria                                              |
| -------------------------------- | ---------------------------------------------------------------- |
| Research ingestion pipeline      | Ingest from Semantic Scholar/arXiv, extract structured insights. |
| Material Knowledge Graph         | Entity extraction, property mapping, trend tracking.             |
| Patent surveillance hooks        | USPTO/EPO query integration, competitor filing alerts.           |
| Decision signal engine           | Automated bottleneck detection, experiment recommendations.      |
| Analytical memory                | Embeddings generated, similarity search functional.              |
| "What We Don't Know Yet" reports | Weekly automated knowledge gap reports.                          |
| Mode router full activation      | All 7 modes operational with appropriate pipelines.              |

---

## Post-MVP Horizon

| Capability                     | Trigger                                              |
| ------------------------------ | ---------------------------------------------------- |
| Dedicated vector DB migration  | > 10M embeddings or > 100ms P95 similarity queries   |
| Knowledge Graph (Neo4j)        | Complex entity traversal queries needed              |
| Autonomous agent framework     | Guardrails battle-tested, pipeline patterns proven   |
| Real-time telemetry streaming  | Manufacturing partners onboarded with MQTT/HTTP push |
| Mobile app                     | Significant field usage demand                       |
| LLM-powered content generation | Brand compliance guardrails validated                |

---

_Roadmap reviewed and updated at each phase boundary. Changes require team alignment._
