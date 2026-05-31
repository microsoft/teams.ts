# Example: Threading

A bot that demonstrates reactive and proactive threading in Microsoft Teams channels.

## Commands

| Command | Behavior |
|---------|----------|
| `test reply` | `context.reply()` — reactive threaded reply with visual quote |
| `test send` | `context.send()` — reactive send to same thread, no quote |
| `test proactive` | `app.reply()` — proactive threaded reply |
| `test manual` | `toThreadedConversationId()` + `app.send()` — advanced manual control |
| `help` | Shows available commands |

## Notes

- `test reply` and `test send` work in all scopes (1:1, group chat, channels)
- `test proactive` constructs a threaded conversation ID and sends to that thread
- `test manual` does the same using `toThreadedConversationId()` + `app.send()` directly
- `test proactive` and `test manual` may return a service error in conversation types that do not currently support threading (e.g. meetings)

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "threading" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams.

## Run

```bash
npm run dev
```

## Environment Variables

Create a `.env` file:

```
CLIENT_ID=<your-azure-bot-app-id>
CLIENT_SECRET=<your-azure-bot-app-secret>
TENANT_ID=<your-tenant-id>
```
