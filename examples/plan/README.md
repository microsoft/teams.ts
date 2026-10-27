# Agent: Plans

A test application that demonstrated structured progress reporting.

> Plans and steps are preview APIs and may change. Diagnostic: `ExperimentalTeamsPlan`.

| Command | Scenario |
| --- | --- |
| `complete` | Start, block, update, and complete steps with descriptions and sources, then send an answer. |
| `complete-stream` | The same progress, followed by a streamed answer and completion metadata on the final message only. |
| `stop` | Start and stop the Plan. |
| `error` | Mark a step as failed and end the Plan with an error. |
| `proactive` | Start five seconds after the handler returns, using a saved prompt-bound Plan. |

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
