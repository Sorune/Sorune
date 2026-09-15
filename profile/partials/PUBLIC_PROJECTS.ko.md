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
