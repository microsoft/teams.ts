Please refer to this sub-module's root repo Contributing guide at [Teams SDK Contributing](https://github.com/microsoft/teams-sdk/blob/main/CONTRIBUTING.md)

## Multi-Language SDK

The Teams SDK is maintained across three languages: **Python**, **TypeScript**, and **.NET**. When proposing new features, please discuss them in a language-agnostic way in [GitHub Discussions](https://github.com/microsoft/teams-sdk/discussions). This ensures that features can be implemented consistently across all three SDKs and benefits the entire Teams developer community.

## Public API Documentation

Add JSDoc for every new public-facing field, function, interface, class, and type. Public API documentation should explain what callers can set or call, when it is used, and any important constraints or migration guidance.

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
