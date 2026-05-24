# a2a — A2A proactive handoff

Two Teams bots (**Alice**, **Bob**) that hand a user off to each other over
the [A2A protocol](https://github.com/a2aproject/A2A) using the
[`@a2a-js/sdk`](https://www.npmjs.com/package/@a2a-js/sdk). Each bot has
its own Teams app registration, so each user has a **separate DM** with
Alice and Bob. The receiving bot **proactively opens a 1:1** with the
user and greets them with the context the sending bot passed over A2A.

In this sample:

- **Alice** answers questions about **cats**.
- **Bob** answers questions about **dogs**.
- Either LLM can decide to hand off; both are symmetric. The toy
  descriptions make the routing obvious — ask Alice about dogs and watch
  Bob start a DM with you.

## Flow

```
User-A    Alice (LLM)               Bob (A2A executor + LLM)
  |           |                                |
  |- "best    |                                |
  |  dog      | LLM: "dogs → Bob".             |
  |  breed?" >| Calls handoff_to_peer          |
  |           |--- A2A handoff ---------------->|
  |           |  (DataPart carries aadObjectId,| Client(serviceUrl).conversations.create()
  |           |   tenantId, serviceUrl,        |   → new 1:1 conv with the user
  |           |   summary)                     |  agent.greetWithHandoff()
  |           |<------- ack -------------------|   → seeds history + greeting
  |<- "I've handed you to Bob"                 |  app.send(newConvId, greeting)
  |                                            |
  |   (Bob's DM lights up with a new message)  |
  |- reply --->|<- delivered in Bob's DM ------|
  |            | LLM sees seeded history, picks up coherently
```

## How it works

1. User DMs **Alice**. Alice's LLM has a single
   `handoff_to_peer(summary)` tool. Its description carries Bob's live
   A2A `AgentCard.description`, fetched once at startup, so the LLM
   knows what Bob actually specializes in.
2. When the LLM decides Bob is a better fit, it calls the tool.
   `runTools()` invokes the callback, which sends an A2A `message/send`
   to Bob with a `DataPart` carrying:
   ```ts
   { kind: 'handoff', from, aadObjectId, userName, tenantId, serviceUrl, summary }
   ```
3. Bob's `HandoffAgentExecutor` validates the payload, then constructs
   a `Client` from `@microsoft/teams.api` against the user's `serviceUrl`
   and calls `conversations.create({...})` to open a 1:1 with the user.
   The member id is the user's **`aadObjectId`**, not the Teams MRI
   (`29:...`) that other samples use — MRIs are bot-specific, so the
   one Alice sees for the user isn't valid against Bob. `aadObjectId`
   is the tenant-wide identity both bots share.
4. Bob's agent runs the LLM with the handoff context as a synthetic
   user turn, producing a greeting that already answers the question.
   The turn is left in the per-conversation history, so when the user
   replies in their new DM, Bob picks up coherently.
5. Bob sends the greeting via `app.send(newConvId, greeting)`.

The bots are symmetric — the same flow runs in reverse from Bob to Alice.

## Prerequisites

- Node.js 24+
- Two separate bot registrations in Azure (one for Alice, one for Bob),
  each installed for the user in the same tenant.
- An Azure OpenAI resource with a chat deployment (e.g. `gpt-4o`).

## Configuration

Copy the templates into per-bot `.env` files (these are gitignored):

```bash
cp .env.alice.template .env.alice
cp .env.bob.template .env.bob
```

Fill in:

- `CLIENT_ID` / `CLIENT_SECRET` / `TENANT_ID` — each bot's own
  registration. Alice and Bob MUST be different App IDs.
- `PORT` — `3978` for Alice, `3979` for Bob (or any pair).
- `AZURE_OPENAI_*` — your shared Azure OpenAI credentials.
- `BOT_NAME` / `BOT_DESCRIPTION` — this bot's A2A identity. The
  description is what the peer's LLM reads when deciding to hand off.
- `BOT_SELF_URL` — `http://localhost:<PORT>` for local dev.
- `PEER_NAME` / `PEER_URL` — the other bot.

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "a2a" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams.

## Run

In two terminals:

```bash
npm install
npm run dev:alice
```

```bash
npm run dev:bob
```

Each bot exposes:
- `POST /api/messages` — Teams traffic (registered by teams.ts on the
  shared Express app)
- `POST /a2a` — inbound A2A JSON-RPC
- `GET  /.well-known/agent-card.json` — the bot's A2A AgentCard

The two bots talk to each other on `localhost` for A2A. For Teams
itself, expose each bot's port through a tunnel (ngrok / dev tunnels)
and register that URL as the bot's messaging endpoint in Azure.

## Caveats

- **Same-tenant assumption.** The handoff carries `aadObjectId` +
  `tenantId` + `serviceUrl`. Bob uses these to call `conversations.create`
  in his own bot context. Cross-tenant handoff would need an OAuth flow
  and identity translation that this sample doesn't cover.
- **Peer must be installed for the user.** A proactive
  `conversations.create` only succeeds if the receiving bot is
  installable for that user (tenant app catalog, user installed, etc.).
  If Bob isn't installed, the create call fails and no DM opens.
- **No auth on `/a2a`.** This sample uses
  `UserBuilder.noAuthentication`, so any caller can post a handoff
  message. For production, validate the caller's identity (bearer
  token or mTLS) before opening a conversation with someone they named.
- **Provider scope.** The agent is bound to the OpenAI chat-completions
  wire protocol — Azure OpenAI and vanilla OpenAI work; non-OpenAI
  providers do not.
