# Repository Scaffold Plan

> Monorepo structure, naming conventions, script catalog, and dependency policy.

---

## 1. Directory Structure

```
flex-human/
├── soul.md                          # Root identity (immutable)
├── package.json                     # Root workspace config
├── pnpm-workspace.yaml              # Workspace definition
├── turbo.json                       # Turbo pipeline config
├── tsconfig.base.json               # Shared TypeScript base
├── .eslintrc.js                     # Root ESLint config
├── .prettierrc                      # Prettier config
├── .editorconfig                    # Editor consistency
├── .gitignore
├── .nvmrc                           # Node version pin
├── .npmrc                           # pnpm settings
├── .env.example                     # Environment variable template
│
├── docs/
│   ├── Architecture.md
│   ├── FlexHumanAI.md
│   ├── MemoryArchitecture.md
│   ├── RepoScaffoldPlan.md
│   ├── SecurityBaseline.md
│   ├── BrandSystem.md
│   ├── PRD_Website.md
│   ├── PRD_FlexBrain.md
│   ├── Roadmap.md
│   ├── Backlog.md
│   ├── decisions/
│   │   ├── ADR-0001-TechStack.md
│   │   └── ADR-0002-IntelligenceArchitecture.md
│   └── intelligence/                # Future intelligence reports
│
├── apps/
│   ├── web/                         # Public website (Next.js 15)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   └── src/
│   │       └── app/                 # App Router pages
│   │
│   └── platform/                    # Flex Brain dashboard (Next.js 15)
│       ├── package.json
│       ├── tsconfig.json
│       ├── next.config.ts
│       ├── tailwind.config.ts
│       └── src/
│           └── app/                 # App Router pages (authenticated)
│
├── services/
│   ├── api/                         # Core REST API (Fastify)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts
│   │       ├── routes/
│   │       ├── middleware/
│   │       ├── db/
│   │       └── migrations/
│   │
│   ├── worker/                      # Job processor (BullMQ)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │
│   └── intelligence/                # Intelligence pipelines
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── pipelines/
│           ├── scoring/
│           ├── guardrails/
│           └── modes/
│
├── packages/
│   ├── config/                      # Shared ESLint + TSConfig
│   │   ├── package.json
│   │   ├── eslint.js
│   │   ├── tsconfig.base.json
│   │   ├── tsconfig.nextjs.json
│   │   └── tsconfig.node.json
│   │
│   ├── types/                       # Shared TypeScript types
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts
│   │       ├── core.ts
│   │       ├── platform.ts
│   │       ├── intelligence.ts
│   │       └── memory.ts
│   │
│   ├── security/                    # Auth, RBAC, audit helpers
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │
│   └── ui/                          # Shared component library
│       ├── package.json
│       ├── tsconfig.json
│       ├── tailwind.config.ts
│       └── src/
│           ├── index.ts
│           └── components/
│
└── docker/
    ├── docker-compose.yml
    └── init.sql
```

---

## 2. Naming Conventions

| Item             | Convention          | Example                              |
| ---------------- | ------------------- | ------------------------------------ |
| Directories      | kebab-case          | `services/api`, `packages/ui`        |
| TypeScript files | camelCase           | `auditLogger.ts`, `signalScoring.ts` |
| React components | PascalCase          | `Button.tsx`, `SignalCard.tsx`       |
| Types/Interfaces | PascalCase          | `Material`, `AuditLogEntry`          |
| Constants        | SCREAMING_SNAKE     | `MAX_RETRY_COUNT`                    |
| Database tables  | snake_case          | `vendor_scorecards`, `audit_logs`    |
| Database columns | snake_case          | `created_at`, `material_id`          |
| Environment vars | SCREAMING_SNAKE     | `DATABASE_URL`, `REDIS_URL`          |
| ADR files        | `ADR-XXXX-Title.md` | `ADR-0001-TechStack.md`              |

---

## 3. Script Catalog

Root `package.json` scripts (delegated via turbo):

| Script         | Command                                             | Scope                        |
| -------------- | --------------------------------------------------- | ---------------------------- |
| `dev`          | `turbo dev`                                         | All apps + services          |
| `build`        | `turbo build`                                       | All packages, apps, services |
| `lint`         | `turbo lint`                                        | All workspaces               |
| `typecheck`    | `turbo typecheck`                                   | All workspaces               |
| `test`         | `turbo test`                                        | All workspaces               |
| `format`       | `prettier --write .`                                | Entire repo                  |
| `format:check` | `prettier --check .`                                | CI check                     |
| `db:up`        | `docker compose -f docker/docker-compose.yml up -d` | PostgreSQL + Redis           |
| `db:down`      | `docker compose -f docker/docker-compose.yml down`  | Stop containers              |
| `db:migrate`   | Runs migration tool in services/api                 | Database migrations          |
| `clean`        | `turbo clean && rm -rf node_modules`                | Clean all                    |

---

## 4. Dependency Policy

- All dependencies pinned to exact versions in workspace packages
- Shared dependencies hoisted to root where possible
- `pnpm` strict mode: no phantom dependencies
- Security: `pnpm audit` in CI pipeline
- Updates: monthly dependency review cycle

---

## 5. Versioning Strategy

- Monorepo uses single version (no independent package publishing for now)
- Git tags for releases: `v0.1.0`, `v0.2.0`, etc.
- Conventional commits enforced via lint-staged hook
- Breaking changes require ADR

---

_This document governs repository structure. Structural changes require team review._
