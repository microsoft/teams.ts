# Example: Quoted Replies

A bot that demonstrates quoted reply features in Microsoft Teams — referencing previous messages when sending responses.

## Commands

| Command | Behavior |
|---------|----------|
| `test reply` | `reply()` — auto-quotes the inbound message |
| `test quote` | `quoteReply()` — sends a message, then quotes it by ID |
| `test add` | `addQuotedReply()` — sends a message, then quotes it with builder + response |
| `test multi` | Sends two messages, then quotes both with interleaved responses |
| `test manual` | `addQuotedReply()` + `addText()` — manual control |
| `help` | Shows available commands |
| *(quote a message)* | Bot reads and displays the quoted reply metadata |

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
