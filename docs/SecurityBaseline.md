# Security Baseline

> Security posture, access controls, audit logging, and threat model for Flex Human systems.

---

## 1. Roles & Permissions (RBAC)

### Roles

| Role       | Description                                                               | Population             |
| ---------- | ------------------------------------------------------------------------- | ---------------------- |
| admin      | Full system access, user management, config changes                       | Founders, CTO          |
| engineer   | R&D, experiments, materials, projects, manufacturing                      | Core engineering team  |
| researcher | Read/write knowledge, experiments, materials; read-only vendor/compliance | Research staff         |
| viewer     | Read-only access to dashboards and reports                                | Stakeholders, advisors |
| vendor     | Access to own profile, scorecard, onboarding portal only                  | External vendors       |

### Permission Matrix

| Resource    | admin | engineer | researcher | viewer | vendor  |
| ----------- | ----- | -------- | ---------- | ------ | ------- |
| Users       | CRUD  | R        | R          | -      | -       |
| Vendors     | CRUD  | CRUD     | R          | R      | R (own) |
| Projects    | CRUD  | CRUD     | R          | R      | -       |
| Materials   | CRUD  | CRUD     | CRUD       | R      | -       |
| Experiments | CRUD  | CRUD     | CRUD       | R      | -       |
| Compliance  | CRUD  | CRUD     | R          | R      | -       |
| Signals     | CRUD  | RU       | R          | R      | -       |
| Knowledge   | CRUD  | CRUD     | CRUD       | R      | -       |
| Audit Logs  | R     | R        | -          | -      | -       |
| Settings    | CRUD  | R        | -          | -      | -       |

### ABAC Readiness

RBAC is enforced for MVP. The permission system is designed to support attribute-based access control (ABAC) by storing permissions as structured policies. Migration path: add `policies` table with condition expressions evaluated at runtime.

---

## 2. Authentication

### MVP: Session-Based Auth

- Server-side sessions stored in PostgreSQL `sessions` table
- HTTP-only, secure, SameSite=Strict cookies
- Session expiry: 24 hours (configurable)
- Refresh on activity within last 4 hours of session

### Future: JWT Upgrade Path

When API consumers beyond the web dashboard exist (mobile, CLI, third-party), migrate to JWT with short-lived access tokens + refresh tokens. Requires ADR.

---

## 3. Audit Logging

Every state-changing operation produces an immutable audit log entry:

```
{actor_id, action, resource, resource_id, diff, ip_address, user_agent, timestamp}
```

### Requirements

- Audit logs are append-only; no updates or deletes
- Retained for minimum 7 years
- Indexed by resource, actor, and timestamp
- Queryable via admin API and dashboard
- Intelligence outputs include `mode` and `pipeline` metadata

---

## 4. Secret Management

### Local Development

- `.env` files (never committed, listed in `.gitignore`)
- `.env.example` documents all required variables (no values)

### Production (Future)

- HashiCorp Vault or cloud-native secret manager (AWS Secrets Manager / GCP Secret Manager)
- Secrets injected at runtime, never baked into images
- Rotation policy: database passwords every 90 days, API keys every 180 days

### Secrets Inventory

| Secret            | Used By                       | Rotation |
| ----------------- | ----------------------------- | -------- |
| DATABASE_URL      | services/api, services/worker | 90 days  |
| REDIS_URL         | services/worker               | 90 days  |
| SESSION_SECRET    | services/api                  | 90 days  |
| API_KEYS (future) | external integrations         | 180 days |

---

## 5. Network & Transport Security

- HTTPS everywhere (TLS 1.3 minimum in production)
- Secure headers on all responses:
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Content-Security-Policy: default-src 'self'`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- CORS: explicit origin allowlist, no wildcards in production

---

## 6. Input Validation & Rate Limiting

- All API inputs validated via Fastify JSON Schema validation
- Request body size limit: 1MB default, 10MB for document upload
- Rate limiting per IP:
  - General API: 100 req/min
  - Auth endpoints: 10 req/min
  - Document upload: 5 req/min
- Rate limiting per authenticated user:
  - General: 300 req/min
  - Intelligence pipeline triggers: 10 req/min

---

## 7. Intelligence Output Classification

All outputs from `services/intelligence` are classified:

| Classification | Description                          | Distribution            |
| -------------- | ------------------------------------ | ----------------------- |
| internal-only  | Default for all intelligence outputs | Dashboard only          |
| shareable      | Approved for external communication  | Requires admin approval |
| confidential   | Contains IP-sensitive analysis       | Admin + engineer only   |

---

## 8. Threat Model Outline

### Assets

1. Proprietary material formulations and test data
2. Manufacturing process parameters
3. Vendor relationships and scoring data
4. Patent strategy and competitive intelligence
5. Customer/partner contact information

### Threat Actors

1. Competitors seeking IP theft
2. Disgruntled insiders
3. Opportunistic attackers (credential stuffing, injection)
4. Supply chain compromise (malicious dependencies)

### Key Mitigations

| Threat                  | Mitigation                                                              |
| ----------------------- | ----------------------------------------------------------------------- |
| IP exfiltration         | RBAC, audit logs, output classification, network segmentation           |
| Credential compromise   | Session-based auth, rate limiting, activity monitoring                  |
| Injection attacks       | Parameterized queries (raw SQL), input validation, CSP headers          |
| Dependency supply chain | pnpm audit in CI, lockfile integrity check, minimal dependencies        |
| Insider threat          | Least privilege RBAC, comprehensive audit trail, separation of duties   |
| Data loss               | Automated backups, soft deletes, entity versioning, rollback capability |

---

## 9. Data Protection

- All data encrypted at rest in production (database-level encryption)
- All data encrypted in transit (TLS)
- PII minimized: collect only what is needed
- Soft deletes everywhere; hard purge only via documented process with audit trail
- Backup strategy: daily automated backups, 30-day retention, tested restore quarterly

---

## 10. CI/CD Security

- No secrets in code or CI config
- Secrets injected via CI environment variables
- Dependency audit on every PR
- Docker images scanned for vulnerabilities
- No `latest` tags in production images

---

_This baseline is enforced from day one. Exceptions require ADR with security review._
