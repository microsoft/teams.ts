Please refer to this sub-module's root repo Contributing guide at [Teams SDK Contributing](https://github.com/microsoft/teams-sdk/blob/main/CONTRIBUTING.md)

## Multi-Language SDK

The Teams SDK is maintained across three languages: **Python**, **TypeScript**, and **.NET**. When proposing new features, please discuss them in a language-agnostic way in [GitHub Discussions](https://github.com/microsoft/teams-sdk/discussions). This ensures that features can be implemented consistently across all three SDKs and benefits the entire Teams developer community.

## Integration Tests

Add an integration test when your change affects **what goes on the wire** — URLs, headers, request bodies, auth tokens, or response parsing.

**You MUST add a test when:**
- Adding a new API endpoint wrapper
- Changing serialization/model field names
- Modifying auth flow or header injection
- Changing HTTP middleware (retry, timeout, interceptors)

**You do NOT need a test for:** routing, card builders, event handlers, docs-only changes, or refactors with no public API change.

Tests live in `test/integration/` — see the [README](test/integration/README.md) for setup and run instructions.

👉 Full guidance: [INTEGRATION-TESTS.md](https://github.com/microsoft/teams-sdk/blob/main/INTEGRATION-TESTS.md#when-to-add-integration-tests)

## npm Registry (Microsoft-managed devices)

External contributors don't need extra setup; `npm ci` resolves from the public npm registry.

On a **Microsoft-managed device**, direct access to `registry.npmjs.org` is blocked. Your machine should already be configured to route npm through the org's Central Feed Services (CFS) proxy, so installs reroute transparently. Verify with:

```bash
npm config get registry
```

If a tool fails or warns that it can't reach npm, follow the per-protocol setup instructions at [aka.ms/CFS](https://aka.ms/CFS) to point npm at the internal Azure Artifacts feed.

> This is the device-level reroute that lets contributors install packages. Repo-level CFS onboarding (making the build itself consume through Azure Artifacts) is handled in the build pipeline, not configured here.

> Newly published package versions are held in CFS for ~7 days. If a dependency bump can't be installed on a managed device, this quarantine hold is the likely cause.
