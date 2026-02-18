# Memory Architecture

> Three-tier memory model for Flex Human AI. All entries are provenance-tracked, timestamped, version-controlled, and rollback-capable.

---

## 1. Overview

```
┌──────────────────────────────────────────────┐
│              STATIC MEMORY                    │
│  soul.md, Architecture.md, BrandSystem.md,   │
│  IP rules, regulatory constraints             │
│  Storage: versioned files + config rows       │
│  Mutability: IMMUTABLE (executive override)   │
└──────────────────────────────────────────────┘
                    ▲ references
┌──────────────────────────────────────────────┐
│            OPERATIONAL MEMORY                 │
│  Projects, vendors, materials, experiments,   │
│  risk register, telemetry, compliance         │
│  Storage: PostgreSQL relational tables        │
│  Mutability: CRUD with full audit trail       │
└──────────────────────────────────────────────┘
                    ▲ feeds
┌──────────────────────────────────────────────┐
│            ANALYTICAL MEMORY                  │
│  Embeddings, patterns, hypothesis clusters,   │
│  material trends, simulation deviations,      │
│  performance anomalies, signals               │
│  Storage: PostgreSQL pgvector tables          │
│  Mutability: APPEND-MOSTLY, versioned         │
└──────────────────────────────────────────────┘
```

---

## 2. Static Memory

### Purpose

Source of truth for system identity and constraints. Governs all behavior.

### Contents

- `soul.md` — company + AI identity, directives, guardrails
- `docs/Architecture.md` — system boundaries and data flows
- `docs/BrandSystem.md` — visual identity and tone rules
- `docs/SecurityBaseline.md` — security posture and access controls
- Regulatory constraints (compliance requirements per geography)
- IP rules (protect vs. publish decisions)

### Storage

- Primary: versioned Markdown files in the repository
- Secondary: `static_config` table in PostgreSQL for runtime lookups

### Access

- Read-only at runtime
- Changes require: executive approval → PR → review → merge
- Git history provides full version trail

### Schema (runtime config)

```sql
CREATE TABLE static_config (
    key         TEXT PRIMARY KEY,
    value       JSONB NOT NULL,
    description TEXT,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_by  UUID REFERENCES users(id)
);
```

---

## 3. Operational Memory

### Purpose

Current state of all business operations. The working memory of the organization.

### Contents

| Domain       | Tables                         | Key Fields                                           |
| ------------ | ------------------------------ | ---------------------------------------------------- |
| Users & Auth | users, sessions                | id, email, role, created_at                          |
| Audit        | audit_logs                     | actor_id, action, resource, diff, timestamp          |
| Vendors      | vendors, vendor_scorecards     | name, region, iso_certs, score, risk_level           |
| Projects     | projects, project_artifacts    | name, status, phase, owner, created_at               |
| Materials    | materials, material_properties | name, composition, supplier, properties (JSONB)      |
| Experiments  | experiments, test_results      | hypothesis, variables, results, material_id, version |
| Compliance   | compliance_items               | requirement, standard, status, evidence_url          |
| Telemetry    | telemetry_events               | source, event_type, payload (JSONB), timestamp       |
| Knowledge    | knowledge_entries              | title, content, source, provenance, tags             |

### Storage

PostgreSQL 16 relational tables with:

- UUID primary keys
- `created_at`, `updated_at` timestamps on all tables
- `created_by`, `updated_by` actor references on all mutable tables
- Soft deletes (`deleted_at`) — no hard deletes in operational memory

### Audit Trail

Every mutation produces an `audit_logs` entry:

```sql
CREATE TABLE audit_logs (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_id    UUID NOT NULL REFERENCES users(id),
    action      TEXT NOT NULL,         -- 'create', 'update', 'delete'
    resource    TEXT NOT NULL,         -- 'vendor', 'experiment', etc.
    resource_id UUID NOT NULL,
    diff        JSONB,                 -- before/after snapshot
    ip_address  INET,
    user_agent  TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_audit_logs_resource ON audit_logs(resource, resource_id);
CREATE INDEX idx_audit_logs_actor ON audit_logs(actor_id);
CREATE INDEX idx_audit_logs_created ON audit_logs(created_at);
```

### Versioning

Mutable entities use an `entity_versions` pattern:

```sql
CREATE TABLE entity_versions (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type TEXT NOT NULL,
    entity_id   UUID NOT NULL,
    version     INTEGER NOT NULL,
    data        JSONB NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_by  UUID REFERENCES users(id),
    UNIQUE(entity_type, entity_id, version)
);
```

### Rollback

Rollback reconstructs state from `entity_versions` entries. The API exposes `GET /api/:resource/:id/versions` and `POST /api/:resource/:id/rollback/:version`.

---

## 4. Analytical Memory

### Purpose

Derived insights, embeddings, and pattern detections used for proactive intelligence.

### Contents

| Domain     | Tables                 | Description                                    |
| ---------- | ---------------------- | ---------------------------------------------- |
| Embeddings | knowledge_embeddings   | Vector representations of knowledge entries    |
| Signals    | signals, signal_scores | Intelligence outputs scored by priority engine |
| Patterns   | detected_patterns      | Recurring themes across experiments/materials  |
| Hypotheses | hypothesis_clusters    | Grouped hypotheses for R&D direction           |
| Trends     | material_trends        | Emerging material property trajectories        |
| Anomalies  | performance_anomalies  | Deviations from expected outcomes              |

### Storage

PostgreSQL with pgvector extension:

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE knowledge_embeddings (
    id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    knowledge_entry_id UUID NOT NULL REFERENCES knowledge_entries(id),
    embedding         vector(1536),
    model_version     TEXT NOT NULL,
    created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_embeddings_vector ON knowledge_embeddings
    USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
```

### Signal Storage

```sql
CREATE TABLE signals (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title           TEXT NOT NULL,
    description     TEXT NOT NULL,
    signal_type     TEXT NOT NULL,     -- 'risk', 'opportunity', 'gap', 'alert'
    mode            TEXT NOT NULL,     -- execution mode that generated it
    confidence      REAL NOT NULL CHECK (confidence BETWEEN 0 AND 1),
    sources         JSONB NOT NULL,    -- provenance references
    status          TEXT NOT NULL DEFAULT 'new',
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    reviewed_at     TIMESTAMPTZ,
    reviewed_by     UUID REFERENCES users(id)
);

CREATE TABLE signal_scores (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    signal_id           UUID NOT NULL REFERENCES signals(id),
    strategic_impact    REAL NOT NULL CHECK (strategic_impact BETWEEN 1 AND 10),
    technical_feasibility REAL NOT NULL CHECK (technical_feasibility BETWEEN 1 AND 10),
    cost_implication    REAL NOT NULL CHECK (cost_implication BETWEEN 1 AND 10),
    ip_defensibility    REAL NOT NULL CHECK (ip_defensibility BETWEEN 1 AND 10),
    time_to_validate    REAL NOT NULL CHECK (time_to_validate BETWEEN 1 AND 10),
    risk_exposure       REAL NOT NULL CHECK (risk_exposure BETWEEN 1 AND 10),
    competitive_advantage REAL NOT NULL CHECK (competitive_advantage BETWEEN 1 AND 10),
    composite_score     REAL GENERATED ALWAYS AS (
        strategic_impact * 0.20 +
        technical_feasibility * 0.18 +
        (11 - cost_implication) * 0.12 +
        ip_defensibility * 0.18 +
        (11 - time_to_validate) * 0.10 +
        (11 - risk_exposure) * 0.12 +
        competitive_advantage * 0.10
    ) STORED,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### Provenance

All analytical memory entries reference their source:

```sql
-- Every analytical entry links back to operational data
-- via source_type + source_id, enabling full traceability
```

### Retention

- Embeddings regenerated when model version changes (old versions retained for 90 days)
- Signals archived after review (never deleted)
- Patterns and anomalies versioned with detection timestamp

---

## 5. Cross-Tier Invariants

1. **Provenance chain**: Analytical → Operational → Static. Every derived insight traces to source data.
2. **Timestamp consistency**: All tiers use `TIMESTAMPTZ` in UTC.
3. **Actor tracking**: All mutations record the actor (user or system agent).
4. **No orphans**: Foreign key constraints enforce referential integrity.
5. **Soft deletes only**: `deleted_at` column; no `DELETE FROM` in production.
6. **Version monotonicity**: Version numbers only increment, never reuse.

---

_This document governs all data storage decisions. Schema changes require migration files and ADR for structural changes._
