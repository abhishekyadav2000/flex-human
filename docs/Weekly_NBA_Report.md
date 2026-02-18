# Weekly NBA Report #1 — Post-Bootstrap

**Date:** 2026-02-17
**Phase:** 0 (Bootstrap Complete)

---

## Top 10 Next Best Actions

### NBA-01: Implement Session-Based Authentication

**Priority:** P0 (Security)
**Impact:** Without auth, the platform has no access control. Blocks all other platform work.
**Effort:** M (2-3 days)
**Dependencies:** Database running, users table migrated
**Deliverable:** Login/logout flow, session management, cookie handling in `services/api`
**Acceptance Criteria:** User can log in with email/password, session persists across requests, logout invalidates session, HTTP-only secure cookies set
**Risk:** Auth bugs create security exposure. Mitigate with thorough testing and session expiry.
**Score:** Strategic=9, Feasibility=9, Cost=2, IP=7, TimeToValidate=2, Risk=9, Competitive=5 → Composite=7.96

---

### NBA-02: Activate Audit Logging on All API Mutations

**Priority:** P0 (Security/IP)
**Impact:** Audit trail is foundational for IP protection, compliance, and incident response.
**Effort:** M (2 days)
**Dependencies:** NBA-01 (auth — need actor identity)
**Deliverable:** Middleware that intercepts all POST/PUT/DELETE and writes to `audit_logs` table
**Acceptance Criteria:** Every mutation logged with actor, resource, action, diff, timestamp. Logs queryable via admin API.
**Risk:** Performance overhead if logging is synchronous. Use async write with guaranteed delivery.
**Score:** Strategic=8, Feasibility=9, Cost=2, IP=10, TimeToValidate=2, Risk=9, Competitive=4 → Composite=7.90

---

### NBA-03: Implement RBAC Middleware Enforcement

**Priority:** P0 (Security)
**Impact:** Without RBAC, any authenticated user can access everything. Violates SecurityBaseline.md.
**Effort:** M (2 days)
**Dependencies:** NBA-01 (auth)
**Deliverable:** Fastify preHandler that checks role-resource-permission matrix on every protected route
**Acceptance Criteria:** All 5 roles enforced. Unauthorized access returns 403. Permission checks use `@flex-human/security` RBAC module.
**Risk:** Overly restrictive defaults block legitimate access. Start permissive with admin, tighten per role.
**Score:** Strategic=8, Feasibility=9, Cost=2, IP=9, TimeToValidate=2, Risk=9, Competitive=4 → Composite=7.78

---

### NBA-04: Implement Home Page Premium Design

**Priority:** P1 (Credibility)
**Impact:** First impression for partners, investors, and talent. Must convey premium engineering brand.
**Effort:** L (4-5 days)
**Dependencies:** Design tokens finalized, UI components ready
**Deliverable:** Fully designed home page with hero, pillar cards, manufacturing section, trust signals, CTAs
**Acceptance Criteria:** Lighthouse all scores >= 90, < 2s LCP, proper semantic HTML, responsive, brand-compliant
**Risk:** Design iteration cycles. Mitigate by starting with the existing shell and refining.
**Score:** Strategic=9, Feasibility=8, Cost=4, IP=5, TimeToValidate=3, Risk=2, Competitive=8 → Composite=7.00

---

### NBA-05: Set Up Database Migration Runner in CI

**Priority:** P2 (Infrastructure)
**Impact:** Without automated migrations, schema changes are manual and error-prone.
**Effort:** S (half day)
**Dependencies:** Docker Compose running, migration files exist
**Deliverable:** `pnpm db:migrate` works locally, CI pipeline runs migrations before tests
**Acceptance Criteria:** All 3 migration files apply cleanly on fresh database. Idempotent re-runs succeed.
**Risk:** Migration ordering issues. Mitigate with sequential numbering and transaction wrapping.
**Score:** Strategic=6, Feasibility=10, Cost=1, IP=4, TimeToValidate=1, Risk=3, Competitive=3 → Composite=6.60

---

### NBA-06: Build Knowledge Base CRUD Module

**Priority:** P2 (Platform Foundation)
**Impact:** Knowledge Base is the core data ingestion point. All intelligence capabilities depend on it.
**Effort:** L (4-5 days)
**Dependencies:** NBA-01 (auth), NBA-02 (audit), NBA-03 (RBAC)
**Deliverable:** Full CRUD API + dashboard UI for knowledge entries with tagging, provenance, search
**Acceptance Criteria:** Create/read/update/archive documents. Full-text search via tsvector. Version history. Audit logged.
**Risk:** Search quality depends on good tokenization. Start with PostgreSQL full-text, iterate.
**Score:** Strategic=8, Feasibility=8, Cost=4, IP=6, TimeToValidate=4, Risk=3, Competitive=5 → Composite=6.74

---

### NBA-07: Build Materials Registry Module

**Priority:** P3 (Intelligence Foundation)
**Impact:** Materials data is the substrate for all experiment tracking, vendor correlation, and R&D intelligence.
**Effort:** L (4-5 days)
**Dependencies:** NBA-06 (knowledge base patterns), vendor tables
**Deliverable:** Materials CRUD with structured properties, vendor linkage, comparison view
**Acceptance Criteria:** Add materials with composition and properties. Link to vendors. Side-by-side comparison. Audit logged.
**Risk:** Property schema may need iteration as real data arrives. Use JSONB for flexibility with typed overlay.
**Score:** Strategic=8, Feasibility=7, Cost=5, IP=7, TimeToValidate=5, Risk=3, Competitive=6 → Composite=6.50

---

### NBA-08: Implement SEO Foundation for Website

**Priority:** P1 (Credibility)
**Impact:** Organic discoverability is zero without proper SEO. Sitemap and robots already exist but need verification.
**Effort:** M (2 days)
**Dependencies:** Website pages exist
**Deliverable:** JSON-LD structured data on all pages, OG tags verified, sitemap submitted, schema markup
**Acceptance Criteria:** Google Search Console validates all pages. Lighthouse SEO >= 95. Schema markup valid.
**Risk:** Low. Standard implementation with known patterns.
**Score:** Strategic=7, Feasibility=10, Cost=2, IP=3, TimeToValidate=2, Risk=1, Competitive=6 → Composite=6.38

---

### NBA-09: Implement Vendor Registry CRUD Module

**Priority:** P2 (Platform)
**Impact:** Vendor management is critical for supply chain resilience and quality tracking.
**Effort:** L (4-5 days)
**Dependencies:** NBA-01, NBA-02, NBA-03
**Deliverable:** Vendor profiles, onboarding workflow, scorecard evaluation, risk assessment UI
**Acceptance Criteria:** Full CRUD for vendors. Multi-dimension scorecard. Risk level indicators. Document attachment. Audit logged.
**Risk:** Scoring algorithm needs calibration with real vendor data. Start with simple average.
**Score:** Strategic=7, Feasibility=7, Cost=5, IP=5, TimeToValidate=5, Risk=4, Competitive=5 → Composite=6.04

---

### NBA-10: Signal Scoring Engine Integration Test

**Priority:** P3 (Intelligence)
**Impact:** Validates that the scoring rubric produces meaningful rankings before building the full pipeline.
**Effort:** S (half day)
**Dependencies:** Intelligence service scaffold exists
**Deliverable:** Unit tests for `SignalScoringEngine` with edge cases and expected composite scores
**Acceptance Criteria:** Tests cover all 7 dimensions, verify weight application, confirm inverted dimensions, pass CI.
**Risk:** None. Pure unit testing with no external dependencies.
**Score:** Strategic=5, Feasibility=10, Cost=1, IP=4, TimeToValidate=1, Risk=1, Competitive=3 → Composite=5.80

---

## Summary

| #   | Action                          | Priority | Effort | Phase |
| --- | ------------------------------- | -------- | ------ | ----- |
| 1   | Session-based authentication    | P0       | M      | 2     |
| 2   | Audit logging on all mutations  | P0       | M      | 2     |
| 3   | RBAC middleware enforcement     | P0       | M      | 2     |
| 4   | Home page premium design        | P1       | L      | 1     |
| 5   | Database migration runner in CI | P2       | S      | 0     |
| 6   | Knowledge Base CRUD module      | P2       | L      | 2     |
| 7   | Materials Registry module       | P3       | L      | 2     |
| 8   | SEO foundation for website      | P1       | M      | 1     |
| 9   | Vendor Registry CRUD module     | P2       | L      | 2     |
| 10  | Signal scoring engine tests     | P3       | S      | 3     |

**Recommended immediate focus:** NBA-05 (migration runner) since it's fast and unblocks everything, then NBA-01 → NBA-02 → NBA-03 in sequence (auth stack), then NBA-04 and NBA-08 in parallel (website polish).

---

_Next report: after Phase 1 website completion._
