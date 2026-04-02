# Example: Quoting

A bot that demonstrates various ways to quote previous messages in Microsoft Teams.

## Commands

| Command | Behavior |
|---------|----------|
| `test reply` | `reply()` — auto-quotes the inbound message |
| `test quote` | `quote()` — sends a message, then quotes it by ID |
| `test add` | `addQuote()` — sends a message, then quotes it with builder + response |
| `test multi` | Sends two messages, then quotes both with interleaved responses |
| `test manual` | `addQuote()` + `addText()` — manual control |
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
