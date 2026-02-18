-- Intelligence tables: materials, experiments, signals, embeddings

CREATE TABLE materials (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            TEXT NOT NULL,
    composition     TEXT NOT NULL DEFAULT '',
    classification  TEXT NOT NULL DEFAULT '',
    supplier_id     UUID REFERENCES vendors(id),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_by      UUID REFERENCES users(id),
    deleted_at      TIMESTAMPTZ
);

CREATE TABLE material_properties (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    material_id     UUID NOT NULL REFERENCES materials(id),
    property        TEXT NOT NULL,
    value           REAL NOT NULL,
    unit            TEXT NOT NULL,
    test_method     TEXT,
    tested_at       TIMESTAMPTZ,
    source          TEXT NOT NULL DEFAULT 'experimental' CHECK (source IN ('experimental', 'published', 'simulated')),
    confidence      REAL NOT NULL DEFAULT 1.0 CHECK (confidence BETWEEN 0 AND 1),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_material_props_material ON material_properties(material_id);

CREATE TABLE experiments (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title           TEXT NOT NULL,
    hypothesis      TEXT NOT NULL,
    rationale       TEXT NOT NULL DEFAULT '',
    status          TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'complete', 'failed', 'archived')),
    material_ids    JSONB NOT NULL DEFAULT '[]',
    variables       JSONB NOT NULL DEFAULT '[]',
    version         INTEGER NOT NULL DEFAULT 1,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_by      UUID REFERENCES users(id)
);

CREATE TABLE test_results (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    experiment_id   UUID NOT NULL REFERENCES experiments(id),
    material_id     UUID REFERENCES materials(id),
    metric          TEXT NOT NULL,
    predicted_value REAL,
    actual_value    REAL NOT NULL,
    unit            TEXT NOT NULL,
    deviation       REAL,
    tested_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_by      UUID REFERENCES users(id)
);

CREATE TABLE signals (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title           TEXT NOT NULL,
    description     TEXT NOT NULL,
    signal_type     TEXT NOT NULL CHECK (signal_type IN ('risk', 'opportunity', 'gap', 'alert')),
    mode            TEXT NOT NULL,
    confidence      REAL NOT NULL CHECK (confidence BETWEEN 0 AND 1),
    sources         JSONB NOT NULL DEFAULT '[]',
    status          TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'accepted', 'dismissed')),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    reviewed_at     TIMESTAMPTZ,
    reviewed_by     UUID REFERENCES users(id)
);

CREATE TABLE signal_scores (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    signal_id               UUID NOT NULL REFERENCES signals(id),
    strategic_impact        REAL NOT NULL CHECK (strategic_impact BETWEEN 1 AND 10),
    technical_feasibility   REAL NOT NULL CHECK (technical_feasibility BETWEEN 1 AND 10),
    cost_implication        REAL NOT NULL CHECK (cost_implication BETWEEN 1 AND 10),
    ip_defensibility        REAL NOT NULL CHECK (ip_defensibility BETWEEN 1 AND 10),
    time_to_validate        REAL NOT NULL CHECK (time_to_validate BETWEEN 1 AND 10),
    risk_exposure           REAL NOT NULL CHECK (risk_exposure BETWEEN 1 AND 10),
    competitive_advantage   REAL NOT NULL CHECK (competitive_advantage BETWEEN 1 AND 10),
    composite_score         REAL GENERATED ALWAYS AS (
        strategic_impact * 0.20 +
        technical_feasibility * 0.18 +
        (11 - cost_implication) * 0.12 +
        ip_defensibility * 0.18 +
        (11 - time_to_validate) * 0.10 +
        (11 - risk_exposure) * 0.12 +
        competitive_advantage * 0.10
    ) STORED,
    created_at              TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- pgvector for analytical memory
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE knowledge_embeddings (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    knowledge_entry_id  UUID NOT NULL REFERENCES knowledge_entries(id),
    embedding           vector(1536),
    model_version       TEXT NOT NULL,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Telemetry placeholder
CREATE TABLE telemetry_events (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source      TEXT NOT NULL,
    event_type  TEXT NOT NULL,
    payload     JSONB NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_telemetry_source ON telemetry_events(source, event_type);
CREATE INDEX idx_telemetry_created ON telemetry_events(created_at);
