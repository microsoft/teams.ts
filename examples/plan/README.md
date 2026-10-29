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

## Streamed completion

Emit completion metadata last, after the answer text, then close explicitly:

```typescript
ctx.stream.emit('Here is the answer.');
ctx.stream.emit(plan.completion());
await ctx.stream.close();
```

`plan.completion()` synchronously builds a fresh `MessageActivityInput` bound to the
original prompt. It does not send, emit a Plan event, or close the stream. The builder
supports additional final metadata; the stream must target the same conversation.
Use `await plan.complete(message)` to send a non-streamed answer instead.

## Long-running work

`ctx.plan()` caches one Plan for the inbound activity. Keep step IDs stable and increment
their versions whenever status, title, description, or sources change.

Persist only the prompt binding, then inject an authenticated client already scoped to
the conversation's service URL and caller.

The application owns background tasks, cancellation, and prompt-deletion cleanup.

## Run

From the repository root:

```bash
npm install
npx turbo run build --filter=@examples/plan
npm run dev --workspace=@examples/plan
```

After building, `npm test --workspace=@examples/plan` checks the streaming sample
in process without starting a server or making network requests.

For Teams, expose `/api/messages` through a tunnel and use the official Teams CLI to create the app:

```bash
teams app create --name "plan" --endpoint "https://<your-tunnel>/api/messages" --env examples/plan/.env --json
```
