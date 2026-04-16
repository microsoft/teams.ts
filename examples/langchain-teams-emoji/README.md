# langchain-teams-emoji

A Teams bot that replies to every message with emojis, built with [LangChain.js](https://js.langchain.com/) and [Microsoft Foundry](https://learn.microsoft.com/azure/ai-studio/) on an Express server.

Send it anything — it translates your message into a pure emoji response.

## Architecture

One Express server, two surfaces:

| Endpoint | Description |
|---|---|
| `POST /api/chat` | REST endpoint — send `{ "message": "..." }`, get back emojis |
| `POST /api/messages` | Teams bot endpoint (wired up via `ExpressAdapter`) |

## Setup

### 1. Prerequisites

- [Node.js 20+](https://nodejs.org)
- A [Microsoft Foundry](https://ai.azure.com) project with a deployed chat model
- [Teams CLI](https://www.npmjs.com/package/@microsoft/teams.cli) — `npm install -g @microsoft/teams.cli@preview`
- A tunnel for local dev — [devtunnels](https://learn.microsoft.com/azure/developer/dev-tunnels/get-started) or [ngrok](https://ngrok.com)

### 2. Configure environment

```bash
cp .env.example .env
```

Fill in `.env`:

```env
OPENAI_BASE_URL=https://<resource>.openai.azure.com/openai/v1
OPENAI_API_KEY=<your-api-key>
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4.1-mini
```

### 3. Register the Teams bot

Start your tunnel first, then:

```bash
teams app create --name "Emoji Bot" --endpoint "https://<tunnel-url>/api/messages" --json
```

Copy `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` from the output into your `.env`.

### 4. Install dependencies & run

```bash
npm install
npm run dev
```

### 5. Install in Teams

Use the `installLink` from the `teams app create` output, or look it up:

```bash
teams app get <teamsAppId> --json
```

Open the install link in your browser to sideload the bot.

## Usage

**In Teams:** Send any message to the bot and it replies with emojis.

**Via REST:**
```bash
curl -X POST http://localhost:3978/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"message": "I love pizza"}'
# → {"message":"I love pizza","response":"🍕❤️😍"}
```

## Updating the tunnel URL

If your tunnel URL changes, update the bot endpoint:

```bash
teams app update <teamsAppId> --endpoint "https://<new-tunnel-url>/api/messages"
```
