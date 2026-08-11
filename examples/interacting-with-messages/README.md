# Example: Interacting with Messages

A bot that demonstrates three ways messages relate to other messages in Microsoft Teams:
quoting, threading, and reactions.

Each concept is kept in a separate source module:

- `src/quoting.ts` - sending quotes and reading quoted-message metadata
- `src/threading.ts` - reactive and proactive threaded replies
- `src/reactions.ts` - adding, removing, and receiving reactions
- `src/index.ts` - shared app setup, command dispatch, and help

## Commands

### Quoting

| Command | Behavior |
|---------|----------|
| `quote reply` | `context.reply()` auto-quotes the inbound message |
| `quote message` | `context.quote()` quotes a previously sent message by ID |
| `quote add` | `addQuote()` composes a quote with a response |
| `quote batch` | Combines multiple quotes with mixed responses |
| `quote manual` | Combines `addQuote()` and `addText()` manually |
| *(quote a message)* | Displays the quoted-message metadata |

### Threading

| Command | Behavior |
|---------|----------|
| `thread reply` | `context.reply()` sends a reactive threaded reply |
| `thread send` | `context.send()` sends to the same thread without quoting |
| `thread proactive` | `app.reply()` sends a proactive threaded reply |
| `thread manual` | `toThreadedConversationId()` and `app.send()` provide manual control |

### Reactions

| Command | Behavior |
|---------|----------|
| `reaction add <type>` | Adds a reaction to the inbound message |
| `reaction remove <type>` | Adds a reaction, then removes it after two seconds |
| `reaction proactive` | Sends a bot message and reacts to it using app-level APIs |
| *(react to a bot message)* | Reports added reactions and logs removed reactions |

Common reaction types include `like`, `heart`, `1f440_eyes`,
`2705_whiteheavycheckmark`, `launch`, and `1f4cc_pushpin`.

## Notes

- Threading behavior depends on the conversation type. Proactive and manually constructed
  threads may return a service error where threading is unsupported.
- The reaction API accepts known reaction types as well as other reaction IDs supported by Teams.

## Teams CLI

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "interacting-with-messages" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

## Run

```bash
npm run dev
```

## Environment Variables

Create a `.env` file:

```env
CLIENT_ID=<your-azure-bot-app-id>
CLIENT_SECRET=<your-azure-bot-app-secret>
TENANT_ID=<your-tenant-id>
```
