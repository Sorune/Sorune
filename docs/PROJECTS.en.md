<!-- GENERATED FILE — edit profile/* and run node scripts/render-profile.mjs -->

# Selected Projects

[한국어](./PROJECTS.md) · [English](./PROJECTS.en.md) · [← Profile](../README.en.md)

## grid-masonry

**PUBLIC · RELEASED**

A deterministic, platform-independent masonry geometry library extracted from a product layout implementation where geometry, rendering, measurement, and application state had become tightly coupled.

- pure TypeScript geometry core
- React Web adapter
- framework-independent Browser adapter
- vertical / horizontal layout
- spans / reserved regions / checkpoints
- virtualization primitives
- deterministic source-order placement

The `0.3.0` packages are published and registry-verified.

[Repository](https://github.com/Sorune/grid-masonry) · [Website](https://grid-masonry.sorune.org/) · [English Docs](https://grid-masonry.sorune.org/docs/en/)

---

## WSP

**PUBLIC · RELEASED · v0.1.0**

A read-only semantic CLI for observing and interpreting local development workspaces.

- explicit Workspace Root bootstrap / adoption
- Git / filesystem fact observation
- normalized semantic model with explicit relations
- Inspector / Lens projections
- Human-readable and deterministic JSON output
- Linux / macOS amd64·arm64 binary releases
- no Go runtime required for compiled binaries; Git is the current V0 runtime dependency

The published GitHub Release artifact was downloaded and exercised on a separate Ubuntu BC250 host, including checksum verification, Go-free runtime execution, workspace bootstrap, Git observation, and Lens projection.

[Repository](https://github.com/Sorune/wsp) · [v0.1.0 Release](https://github.com/Sorune/wsp/releases/tag/v0.1.0)

---

## Workspace Ops Public

**PUBLIC · REFERENCE GOVERNANCE**

A human-gated governance reference model for AI-assisted software development, separating authority, ownership, scope, evidence, gates, and boundaries.

Its responsibility is intentionally separate from WSP: `workspace-ops-public` owns governance/reference material, while `wsp` is an independent local workspace semantic product.

[Repository](https://github.com/Sorune/workspace-ops-public)

---

## PhotoGram

**PRIVATE · ACTIVE**

A Spring-based photo platform being rebuilt around explicit application, media, web-consumer, layout, and operations boundaries.

- Spring MVC + Thymeleaf primary web
- React consumer
- authentication / authorization
- upload / attachment lifecycle
- normalized image metadata
- privacy-safe media delivery
- metadata-derived discovery
- browser acceptance
- health / readiness / observability

---

## CharaWeave

**PRIVATE · ACTIVE**

A platform-independent character runtime.

- headless runtime facade
- behavior / autonomy orchestration
- browser runtime and motion
- React host binding
- stable / public / internal package contracts

---

## PaaS Platform

**PRIVATE · ACTIVE / NON-PRODUCTION**

A control plane for deployment, runtime observation, and access control on top of my infrastructure.

- domain / API / projection boundaries
- authentication / RBAC / audit
- bounded operations contracts
- separation between infrastructure authority and control-plane authority

---

## Security Guard

**PRIVATE · ACTIVE / GO LEARNING**

An independent abuse-detection / security-decision service and a hands-on Go learning project.

Observation → Detection → Decision → Ban / Reputation → Enforcement Adapter
