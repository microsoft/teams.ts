# State

Demonstrates per-turn conversation and user state with the same commands as the
.NET `StateBot` sample.

State is enabled with `state: true`. Without a dedicated provider, the app uses
process-local storage, so values are lost on restart and are not shared across
instances. For production, configure `state.storage` with a durable provider.

## Commands

| Command | Behavior |
| --- | --- |
| `count` | Increments a counter in conversation state, shared by everyone in the chat. |
| `my name is <name>` | Saves your name in user state for this conversation. |
| `who am i` | Reads your saved name from user state. |
| `show completed` | Demonstrates that state is sealed after the turn ends. |
| `reset counter` | Clears this conversation's state. |
| `help` | Shows command help. |

## Teams CLI

Expose this sample's local `/api/messages` endpoint with a tunnel, then create
the Teams app:

```bash
npm install -g @microsoft/teams.cli
teams login
teams app create --name "state" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

## Run

```bash
npm run dev
```
