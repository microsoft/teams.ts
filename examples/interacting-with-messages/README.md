# Example: Interacting with Messages

A bot that demonstrates three ways messages relate to other messages in Microsoft Teams:
quoting, threading, and reactions.

Each concept is kept in a separate source module:

- `src/quoting.ts` - sending quotes and reading quoted-message metadata
- `src/threading.ts` - reactive and proactive threaded replies
- `src/reactions.ts` - adding, removing, and receiving reactions
- `src/index.ts` - shared app setup, command dispatch, and help

## Reply modes

`context.reply()` places and quotes its response according to the reply mode. Set it for the whole app, or pass it on a single call, which overrides the app setting (this sample keeps the default, `combined`):

```typescript
const app = new App({ activity: { replyMode: 'thread' } });

await context.reply('Hello!', { replyMode: 'quote' });
```

| Mode | In a chat | Quote |
|------|-----------|-------|
| `combined` (default) | A reply to a top-level message starts a thread under it; a reply inside a thread stays in that thread | Yes |
| `thread` | Same as `combined` | No, when the reply lands in a thread |
| `quote` | The reply stays at the level of the inbound message | Yes |

In a channel every reply goes in the thread of the inbound message, so the mode only decides the quote.

## Commands

### Quoting

| Command | Behavior |
|---------|----------|
| `quote reply` | `context.reply(text, { replyMode: 'quote' })` auto-quotes the inbound message and stays at its level (a top-level message gets a top-level reply) |
| `quote message` | `context.quote()` quotes a previously sent message by ID |
| `quote add` | `addQuote()` composes a quote with a response |
| `quote batch` | Combines multiple quotes with mixed responses |
| `quote manual` | Combines `addQuote()` and `addText()` manually |
| *(quote a message)* | Displays the quoted-message metadata |

### Threading

| Command | Behavior |
|---------|----------|
| `thread reply` | `context.reply()` with the default reply mode, `combined`. In a chat, a reply to a top-level message starts a thread under it, and a reply inside a thread stays in that thread. The inbound message is quoted. In a channel it is sent in the same thread |
| `thread reply unquoted` | `context.reply(text, { replyMode: 'thread' })`. The same placement as `combined`, without the quote when the reply lands in a thread |
| `thread send` | `context.send()` sends reactively without quoting. In a channel it is sent in the same thread. In a chat it matches the level of your message (in the thread if your message is in one, otherwise top-level). In a chat, unlike `reply`, `send` never starts a new thread |
| `thread proactive` | `app.reply()` replies in the reply chain (thread) of your message without the inbound activity, as a bot does when it replies later. It never quotes. It uses `channelData.chat.id` (or `channelData.channel.id`) and `channelData.replyChain.id`. Without `replyChain.id` the sample answers that there is not enough thread metadata |
| `thread top-level` | `app.send()` to `channelData.chat.id` (or `channelData.channel.id`) sends a new top-level message |

### Reactions

| Command | Behavior |
|---------|----------|
| `reaction add <type>` | Adds a reaction to the inbound message |
| `reaction remove <type>` | Adds a reaction, then removes it after two seconds |
| `reaction proactive` | Sends a bot message and reacts to it using app-level APIs |
| *(react to a bot message)* | Thanks you for an added reaction with `context.reply()` (in a chat, in a thread under the message you reacted to) and logs removed reactions |

Common reaction types include `like`, `heart`, `1f440_eyes`,
`2705_whiteheavycheckmark`, `launch`, and `1f4cc_pushpin`.

## Notes

- Threading behavior depends on the conversation type. A threaded reply, from `context.reply()` or a proactive `app.reply()`, may return a service error where threading is unsupported.
- Every message first gets a typing indicator from `context.send({ type: 'typing' })`. A typing activity never starts a new thread, so for a top-level message the indicator shows in the main conversation while a `thread reply` answer appears in the new thread.
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
