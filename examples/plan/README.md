# Agent: Plans

A test application demonstrating structured progress reporting.

> Plans and steps are preview APIs and may change. Diagnostic: `ExperimentalTeamsPlan`.

| Command | Scenario |
| --- | --- |
| `complete` | Start, block, update, and complete steps with descriptions and sources, then send an answer. |
| `complete-stream` | The same progress, followed by a streamed answer and completion metadata on the final message only. |
| `stop` | Start and stop the Plan. |
| `error` | Mark a step as failed and end the Plan with an error. |
| `proactive` | Start in the handler, then reconstruct from saved IDs to prepare and deliver a background report. |

## Long-running work

`ctx.plan()` caches one Plan for the inbound activity. Keep step IDs stable and increment
their versions whenever status, title, description, or sources change. Source icons use
the shared `CitationIconName` values (for example, `'Text'`).

Persist only the prompt binding, then inject an authenticated client already scoped to
the conversation's service URL and caller:

```typescript
const saved = ctx.plan().toJSON(); // Also used by JSON.stringify(plan).
const resumed = new Plan({ ...saved, apiClient: scopedClient });
await resumed.complete('Your background report is ready.');
```

The client and event listeners are not serialized. Context-created Plans forward sends
to app/plugin events; reconstructed Plans have their own `events.on('sent', ...)`
listeners receiving `SentActivity`.

Use `complete()` instead of `completePlan()`. The constructor now accepts `PlanOptions`;
use it instead of passing a prompt override to `ctx.plan()`. The original prompt ID
must remain separate from any answer or stream ID.

The application owns background tasks, cancellation, and prompt-deletion cleanup.
Plan completion after a stream timeout requires explicit recovery via `Plan.complete()`,
not the ordinary PUT fallback. HTTP 409 `PlanConflict` is a separate, non-retryable
lifecycle conflict.

## Run

From the repository root:

```bash
npm install
npx turbo run build --filter=@examples/plan
npm run dev --workspace=@examples/plan
```

For Teams, expose `/api/messages` through a tunnel and use the official Teams CLI to create the app:

```bash
teams app create --name "plan" --endpoint "https://<your-tunnel>/api/messages" --env examples/plan/.env --json
```
