# Teams TypeScript SDK — Integration Tests

Outbound API integration tests that run against live Teams service endpoints.

## Prerequisites

- Node.js >= 20
- A configured bot app registration (see [Cross-SDK Runbook](https://github.com/microsoft/teams-sdk/blob/main/INTEGRATION-TESTS.md))

## Setup

1. Copy `.env.example` to `.env.botid-prod` (and/or `.env.agenticid-prod`):
   ```bash
   cp .env.example .env.botid-prod
   ```

2. Populate with real values from your BAMI tenant (see runbook for details).

3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

```bash
# With a specific env file (from test/integration/)
npm run test:botid-prod
```

## Architecture

- **`fixture.ts`** — Shared fixture that acquires a token via MSAL client credentials and caches conversation members (avoids 429 throttling).
- Tests use `getFixture()` which initializes once and is reused across all test files.
- Tests run sequentially (`maxWorkers: 1`) since they share the same conversation.

## Test Coverage

| File | What it tests |
|------|---------------|
| `activities.test.ts` | Send, update, delete, reply to activities |
| `members.test.ts` | Get members, get by ID, paged members |
| `conversations.test.ts` | Create 1:1 and group conversations |
| `teams-and-reactions.test.ts` | Team details, channels, add/remove reactions |

## Known Limitations

- **Canary**: Paged members returns empty, reactions return 404 — tests return early (reported as passed, not skipped).
- **Agentic**: Reactions return 404 — tests return early.
- **Streaming**: Not yet covered (future addition for SSE chunk assembly).

## Cross-SDK Runbook

For provisioning, secret rotation, and troubleshooting:

👉 [INTEGRATION-TESTS.md](https://github.com/microsoft/teams-sdk/blob/main/INTEGRATION-TESTS.md)
