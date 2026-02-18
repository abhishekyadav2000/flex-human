# ADR-0002: Intelligence Architecture

**Status:** Accepted
**Date:** 2026-02-17
**Decision Makers:** FlexOrchestrator

---

## Context

Flex Human AI requires a persistent intelligence layer with:

- Three-tier memory (static, operational, analytical)
- Seven execution modes with different tool/agent/risk profiles
- Signal priority scoring engine
- Guardrail enforcement preventing fabrication
- Pipeline-based processing for research, experiments, patents, manufacturing
- Continuous evolution capabilities

We need to decide on the architecture pattern for this layer.

---

## Decision

### 1. Three-Tier Memory in Single Database

Use PostgreSQL as the unified store for all three memory tiers:

- **Static**: config rows + versioned files in git
- **Operational**: relational tables with audit trail
- **Analytical**: pgvector tables for embeddings + JSONB for structured patterns

**Rationale:** Single database reduces operational complexity. PostgreSQL handles relational, document (JSONB), and vector (pgvector) workloads. Avoids multi-database sync issues.

### 2. Pipeline Architecture Over Real-Time Agents

Intelligence capabilities implemented as **pipelines** (batch/triggered processes) rather than continuously running autonomous agents.

**Rationale:** Autonomous agents introduce unpredictable behavior, cost, and debugging complexity. Pipelines are testable, reproducible, auditable, and align with guardrail enforcement. Upgrade to agent autonomy when pipeline patterns are proven and guardrails are battle-tested.

### 3. Mode Router at Service Boundary

`services/intelligence` implements a mode router that:

- Accepts a mode parameter with each request
- Activates only the pipelines and tools appropriate for that mode
- Enforces mode-specific risk tolerance
- Logs mode context in all outputs

**Rationale:** Explicit mode selection prevents accidental cross-contamination of outputs. Each mode is independently testable.

### 4. Guardrails at API Boundary

All intelligence outputs pass through a guardrail module before reaching consumers:

- Source traceability check
- Confidence level requirement
- Brand compliance check (for content generation)
- Classification labeling (internal-only default)

**Rationale:** Centralizing guardrails at the API boundary ensures no unvalidated output reaches consumers regardless of which pipeline generated it.

### 5. Signal Scoring as Separate Concern

The signal priority engine is a standalone module that scores any recommendation independently of the pipeline that generated it. Scoring dimensions and weights are configurable.

**Rationale:** Decoupling scoring from generation allows weight tuning without pipeline changes.

---

## Alternatives Considered

### Multi-Database Approach (Postgres + Neo4j + Pinecone)

Better performance per workload but introduces: three systems to maintain, sync challenges, operational overhead. Deferred to post-MVP.

### LangChain/LangGraph Agent Framework

Full agent framework is premature. Current need is structured pipelines with clear interfaces. Agent frameworks add abstraction that obscures behavior and complicates guardrail enforcement.

### Real-Time Streaming Intelligence

Continuous agents monitoring data streams. Excessive for current data volume. Pipelines with scheduled triggers sufficient for MVP.

---

## Consequences

### Positive

- Single database simplifies operations and transactions
- Pipelines are fully testable and auditable
- Mode router prevents output contamination
- Centralized guardrails ensure consistent safety
- Architecture supports incremental capability addition

### Negative

- pgvector performance ceiling at scale (documented upgrade path in ADR-0001)
- Pipeline latency higher than real-time agents (acceptable for MVP use cases)
- No Knowledge Graph for complex entity relationships (deferred)

---

## Upgrade Triggers

| Capability             | Current             | Upgrade When                               | Upgrade To                 |
| ---------------------- | ------------------- | ------------------------------------------ | -------------------------- |
| Vector search          | pgvector            | > 10M vectors                              | Dedicated vector DB        |
| Entity relationships   | JSONB references    | Complex traversal queries needed           | Neo4j / Apache AGE         |
| Intelligence execution | Triggered pipelines | Proven guardrails + high-frequency signals | Autonomous agent framework |
| Streaming              | Batch processing    | Real-time telemetry ingestion              | Kafka / Redis Streams      |

---

_Next review: Phase 3 completion._
