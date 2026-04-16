# Example: Threading

A bot that demonstrates reactive and proactive threading in Microsoft Teams channels.

## Commands

| Command | Behavior |
|---------|----------|
| `test reply` | `context.reply()` — reactive threaded reply with visual quote |
| `test send` | `context.send()` — reactive send to same thread, no quote |
| `test proactive` | `app.reply()` — proactive threaded reply |
| `test manual` | `toThreadedConversationId()` + `app.send()` — advanced manual control (channels and 1:1 chats only) |
| `help` | Shows available commands |

## Notes

- `test reply` and `test send` work in all scopes (1:1, group chat, channels)
- `test proactive` works in all scopes — in channels it threads, in non-threading scopes it sends normally
- `test manual` only works in channels and 1:1 chats since `toThreadedConversationId()` constructs a threaded conversation ID (group chats and meetings do not support threading)

## Run

```bash
npm run dev
```

## Environment Variables

Create a `.env` file:

```
CLIENT_ID=<your-azure-bot-app-id>
CLIENT_SECRET=<your-azure-bot-app-secret>
```
