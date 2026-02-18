-- Operations tables: vendors, projects, compliance, knowledge

CREATE TABLE vendors (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            TEXT NOT NULL,
    region          TEXT NOT NULL,
    capabilities    JSONB NOT NULL DEFAULT '[]',
    iso_certifications JSONB NOT NULL DEFAULT '[]',
    risk_level      TEXT NOT NULL DEFAULT 'low' CHECK (risk_level IN ('low', 'medium', 'high', 'critical')),
    status          TEXT NOT NULL DEFAULT 'prospect' CHECK (status IN ('prospect', 'onboarding', 'active', 'suspended', 'terminated')),
    contacts        JSONB NOT NULL DEFAULT '[]',
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_by      UUID REFERENCES users(id),
    deleted_at      TIMESTAMPTZ
);

CREATE TABLE vendor_scorecards (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vendor_id       UUID NOT NULL REFERENCES vendors(id),
    quality         REAL NOT NULL CHECK (quality BETWEEN 0 AND 10),
    delivery        REAL NOT NULL CHECK (delivery BETWEEN 0 AND 10),
    cost            REAL NOT NULL CHECK (cost BETWEEN 0 AND 10),
    compliance      REAL NOT NULL CHECK (compliance BETWEEN 0 AND 10),
    risk            REAL NOT NULL CHECK (risk BETWEEN 0 AND 10),
    overall_score   REAL NOT NULL,
    notes           TEXT,
    evaluated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    evaluated_by    UUID NOT NULL REFERENCES users(id)
);

CREATE TABLE projects (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            TEXT NOT NULL,
    description     TEXT NOT NULL DEFAULT '',
    status          TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'review', 'complete', 'archived')),
    phase           TEXT NOT NULL DEFAULT '',
    owner_id        UUID NOT NULL REFERENCES users(id),
    team_member_ids JSONB NOT NULL DEFAULT '[]',
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at      TIMESTAMPTZ
);

CREATE TABLE compliance_items (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    standard        TEXT NOT NULL,
    requirement     TEXT NOT NULL,
    jurisdiction    TEXT NOT NULL,
    status          TEXT NOT NULL DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'compliant', 'expired')),
    evidence_url    TEXT,
    expires_at      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE knowledge_entries (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title           TEXT NOT NULL,
    content         TEXT NOT NULL,
    source          TEXT NOT NULL DEFAULT '',
    tags            JSONB NOT NULL DEFAULT '[]',
    provenance_author TEXT NOT NULL DEFAULT '',
    provenance_origin TEXT NOT NULL DEFAULT '',
    version         INTEGER NOT NULL DEFAULT 1,
    search_vector   tsvector GENERATED ALWAYS AS (
        setweight(to_tsvector('english', title), 'A') ||
        setweight(to_tsvector('english', content), 'B')
    ) STORED,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_by      UUID REFERENCES users(id),
    deleted_at      TIMESTAMPTZ
);

CREATE INDEX idx_knowledge_search ON knowledge_entries USING gin(search_vector);
