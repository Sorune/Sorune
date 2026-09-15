<!-- GENERATED FILE — edit profile/* and run node scripts/render-profile.mjs -->

# Selected Projects

[한국어](./PROJECTS.md) · [English](./PROJECTS.en.md) · [← 프로필](../README.md)

## grid-masonry

**PUBLIC · RELEASED**

Deterministic, platform-independent masonry geometry library.

제품 내부에서 geometry, rendering, measurement, application state가 결합되어 있던 문제를 분리하면서 시작했습니다.

- pure TypeScript geometry core
- React Web adapter
- framework-independent Browser adapter
- vertical / horizontal layout
- spans / reserved regions / checkpoints
- virtualization primitives
- deterministic source-order placement

`0.3.0` packages are published and registry-verified.

[Repository](https://github.com/Sorune/grid-masonry) · [Website](https://grid-masonry.sorune.org/) · [한국어 문서](https://grid-masonry.sorune.org/docs/ko/)

---

## WSP

**PUBLIC · RELEASED · v0.1.0**

로컬 개발 workspace를 관찰하고 해석하는 read-only semantic CLI입니다.

- explicit Workspace Root bootstrap / adoption
- Git / filesystem fact observation
- normalized semantic model과 명시적 relation
- Inspector / Lens projection
- Human / deterministic JSON output
- Linux / macOS amd64·arm64 binary release
- compiled runtime에서 Go 불필요, V0 runtime dependency는 Git

실제 GitHub Release artifact를 별도 Ubuntu BC250 host에서 다운로드해 checksum, Go-free runtime, bootstrap, Git observation, Lens까지 external-install smoke를 통과했습니다.

[Repository](https://github.com/Sorune/wsp) · [v0.1.0 Release](https://github.com/Sorune/wsp/releases/tag/v0.1.0)

---

## Workspace Ops Public

**PUBLIC · REFERENCE GOVERNANCE**

AI-assisted software development의 authority, ownership, scope, evidence, gate, boundary를 분리해서 다루는 human-gated governance reference model입니다.

WSP와는 책임을 분리합니다. `workspace-ops-public`은 governance/reference를, `wsp`는 독립적인 local workspace semantic product를 소유합니다.

[Repository](https://github.com/Sorune/workspace-ops-public)

---

## PhotoGram

**PRIVATE · ACTIVE**

Spring 기반 사진 플랫폼을 제품 단위로 재구성하고 있습니다.

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

Platform-independent character runtime.

- headless runtime facade
- behavior / autonomy orchestration
- browser runtime and motion
- React host binding
- stable / public / internal package contracts

---

## PaaS Platform

**PRIVATE · ACTIVE / NON-PRODUCTION**

개인 인프라의 deployment, runtime observation, access control을 다루기 위한 control plane입니다.

- domain / API / projection boundary
- authentication / RBAC / audit
- bounded operations contract
- infrastructure authority와 control-plane authority 분리

---

## Security Guard

**PRIVATE · ACTIVE / GO LEARNING**

독립적인 abuse-detection / security-decision service이자 Go 학습 프로젝트입니다.

Observation → Detection → Decision → Ban / Reputation → Enforcement Adapter
