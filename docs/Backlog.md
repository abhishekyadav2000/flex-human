# Backlog

> Prioritized task list with acceptance criteria, effort, dependencies, and phase assignment.

---

## Priority Legend

- **P0** — Security/IP protection (must do first)
- **P1** — Credibility + premium presence
- **P2** — Modular platform foundation
- **P3** — Intelligence infrastructure
- **P4** — Data/knowledge capture
- **P5** — Manufacturing intelligence
- **P6** — Growth & partnerships

## Effort Legend

- **S** — Small (< 1 day)
- **M** — Medium (1-3 days)
- **L** — Large (3-7 days)
- **XL** — Extra Large (> 1 week)

---

## Security (P0)

| ID      | Task                               | Effort | Phase | Dependencies           | Acceptance Criteria                                   |
| ------- | ---------------------------------- | ------ | ----- | ---------------------- | ----------------------------------------------------- |
| SEC-001 | Implement session-based auth       | M      | 2     | API scaffold           | Login, logout, session persistence, HTTP-only cookies |
| SEC-002 | Implement RBAC middleware          | M      | 2     | SEC-001                | 5 roles enforced on all protected routes              |
| SEC-003 | Implement audit logging            | M      | 2     | SEC-001, DB migrations | All mutations produce audit log, queryable via API    |
| SEC-004 | Secure headers middleware          | S      | 0     | API scaffold           | All headers from SecurityBaseline applied             |
| SEC-005 | Rate limiting                      | S      | 0     | API scaffold           | Per-IP and per-user limits enforced                   |
| SEC-006 | Input validation schemas           | M      | 2     | API routes             | All endpoints have JSON schema validation             |
| SEC-007 | Intelligence output classification | S      | 3     | Intelligence service   | All outputs labeled internal-only by default          |

---

## Website (P1)

| ID      | Task                     | Effort | Phase | Dependencies                 | Acceptance Criteria                                  |
| ------- | ------------------------ | ------ | ----- | ---------------------------- | ---------------------------------------------------- |
| WEB-001 | Home page implementation | L      | 1     | Design tokens, UI components | Hero, pillars, trust signals, CTAs, Lighthouse >= 90 |
| WEB-002 | Technology page          | M      | 1     | WEB-001                      | Skin diagram, capabilities, manufacturing AI section |
| WEB-003 | R&D page                 | M      | 1     | WEB-001                      | Roadmap visualization, focus areas                   |
| WEB-004 | Manufacturing page       | M      | 1     | WEB-001                      | Process flow, QC pipeline, standards                 |
| WEB-005 | Partnerships page        | M      | 1     | WEB-001, API                 | Inquiry form, submission to API, rate limited        |
| WEB-006 | Contact page             | S      | 1     | API                          | Secure form, CSRF, honeypot, rate limited            |
| WEB-007 | Legal page               | S      | 1     | None                         | Privacy, terms, IP notice content                    |
| WEB-008 | SEO implementation       | M      | 1     | All pages                    | Sitemap, robots.txt, JSON-LD, OG tags, semantic HTML |
| WEB-009 | Performance optimization | M      | 1     | All pages                    | < 2s LCP, < 100KB JS, Core Web Vitals pass           |
| WEB-010 | Analytics integration    | S      | 1     | All pages                    | GA4/Plausible placeholder, event stubs               |

---

## Platform (P2)

| ID      | Task                          | Effort | Phase | Dependencies         | Acceptance Criteria                                    |
| ------- | ----------------------------- | ------ | ----- | -------------------- | ------------------------------------------------------ |
| PLT-001 | Dashboard layout + navigation | M      | 2     | Auth, UI components  | Sidebar, topbar, role-based menu, responsive           |
| PLT-002 | Knowledge Base module         | L      | 2     | PLT-001, API, DB     | CRUD, tagging, provenance, search, versioning          |
| PLT-003 | Vendor Registry module        | L      | 2     | PLT-001, API, DB     | Profiles, onboarding, scorecard, risk, docs            |
| PLT-004 | Materials Registry module     | L      | 2     | PLT-001, API, DB     | Profiles, properties, vendor/experiment links, compare |
| PLT-005 | R&D Projects Tracker          | L      | 3     | PLT-001, API, DB     | CRUD, status pipeline, artifacts, team assign          |
| PLT-006 | Experiment Engine             | XL     | 3     | PLT-004, API, DB     | Hypothesis, variables, results, versions, sim vs real  |
| PLT-007 | Compliance Matrix             | M      | 3     | PLT-001, API, DB     | Requirements, status, evidence, gaps, expiry alerts    |
| PLT-008 | Manufacturing Telemetry stub  | M      | 3     | API, DB              | Schema, endpoint, placeholder dashboard                |
| PLT-009 | Signals Dashboard             | L      | 3     | Intelligence service | Feed, scores, workflow, filters, confidence            |
| PLT-010 | Admin: Audit Log viewer       | M      | 2     | SEC-003              | Filterable log viewer for admin role                   |
| PLT-011 | Settings page                 | S      | 2     | Auth                 | User profile, password change, session management      |

---

## Intelligence (P3)

| ID      | Task                                  | Effort | Phase | Dependencies               | Acceptance Criteria                                              |
| ------- | ------------------------------------- | ------ | ----- | -------------------------- | ---------------------------------------------------------------- |
| INT-001 | Mode router implementation            | M      | 3     | Intelligence service shell | 7 modes routable, logs mode context                              |
| INT-002 | Signal scoring engine                 | M      | 3     | INT-001, DB                | 7-dimension scoring, composite calculation, configurable weights |
| INT-003 | Guardrail enforcement module          | M      | 3     | INT-001                    | Source check, confidence check, classification label             |
| INT-004 | Research ingestion pipeline           | L      | 4     | INT-001, Knowledge Base    | Paper ingestion, insight extraction, knowledge graph update      |
| INT-005 | Patent surveillance pipeline          | L      | 4     | INT-001                    | USPTO/EPO queries, competitor alerts, risk index                 |
| INT-006 | Decision signal pipeline              | L      | 4     | INT-002, INT-003           | Bottleneck detection, experiment recommendations                 |
| INT-007 | Embedding generation pipeline         | M      | 4     | INT-001, pgvector          | Knowledge entry embeddings, similarity search                    |
| INT-008 | "What We Don't Know" report generator | M      | 4     | INT-006, Knowledge Base    | Weekly gap analysis report                                       |

---

## Data (P4)

| ID      | Task                           | Effort | Phase | Dependencies | Acceptance Criteria                                  |
| ------- | ------------------------------ | ------ | ----- | ------------ | ---------------------------------------------------- |
| DAT-001 | Core schema migrations         | M      | 0     | PostgreSQL   | users, sessions, audit_logs tables created           |
| DAT-002 | Operations schema migrations   | M      | 0     | DAT-001      | vendors, projects, compliance tables                 |
| DAT-003 | Intelligence schema migrations | M      | 0     | DAT-001      | materials, experiments, signals, embeddings tables   |
| DAT-004 | Entity versioning system       | M      | 2     | DAT-001      | Version table, API endpoints, rollback               |
| DAT-005 | Full-text search setup         | M      | 2     | DAT-002      | tsvector indexes, search API endpoint                |
| DAT-006 | pgvector setup and benchmarks  | M      | 3     | DAT-003      | Extension enabled, index created, benchmark baseline |

---

## Infrastructure (P2)

| ID      | Task                            | Effort | Phase    | Dependencies | Acceptance Criteria                                 |
| ------- | ------------------------------- | ------ | -------- | ------------ | --------------------------------------------------- |
| INF-001 | Docker Compose setup            | S      | 0        | None         | PostgreSQL + Redis up with single command           |
| INF-002 | CI pipeline                     | M      | 0        | Monorepo     | Lint, typecheck, test, build on PR                  |
| INF-003 | Git hooks (husky + lint-staged) | S      | 0        | Monorepo     | Format on commit                                    |
| INF-004 | Database migration runner       | M      | 0        | INF-001, API | Migrations run in order, idempotent                 |
| INF-005 | Production Docker images        | M      | Post-MVP | All services | Multi-stage builds, scanned, no secrets             |
| INF-006 | Production deployment pipeline  | L      | Post-MVP | INF-005      | Automated deploy to staging, manual promote to prod |

---

_Backlog reviewed and reprioritized at each phase boundary._
