# Agent: MCP (Model Context Protocol) Server

A Teams bot that doubles as an MCP server, exposing human-in-the-loop tools
that let an MCP client (an agent, an IDE, etc.) reach a real user through
Teams and wait for them to reply or approve.

## Tools

| Tool              | Purpose                                                       |
| ----------------- | ------------------------------------------------------------- |
| `notify`          | Send a one-way message to a user. No response expected.       |
| `ask`             | Ask a user a question. Returns a `requestId`.                 |
| `getReply`        | Poll for the reply to an earlier `ask`.                       |
| `requestApproval` | Send an Approve/Reject card to a user. Returns `approvalId`.  |
| `getApproval`     | Poll for the decision on an earlier `requestApproval`.        |

## Layout

- `src/state.ts` — in-memory maps for conversations, pending asks, approvals.
- `src/app.ts` — the `App` instance and the Teams activity handlers
  (`message`, `card.action`) that capture replies and approvals.
- `src/mcpTools.ts` — `McpServer` from `@modelcontextprotocol/sdk` plus the
  five tool registrations that send to users and read/write shared state.
- `src/index.ts` — initializes the app, mounts a `StreamableHTTPServerTransport`
  at `/mcp` on the Express adapter, and starts the server.

## Configure

Create a `.env` file:

```
CLIENT_ID=<your-azure-bot-app-id>
CLIENT_SECRET=<your-azure-bot-app-secret>
TENANT_ID=<your-tenant-id>
```

`TENANT_ID` is required because the MCP tools
open 1:1 conversations *proactively* via `app.api.conversations.create({
tenantId })`. There's no inbound activity to read the tenant from.

The `userId` argument passed to `notify`, `ask`, and `requestApproval` is the
Teams AAD user id of someone in the same tenant. For the simplest setup,
message the bot once with a real user, then read the user id off the first
`message` activity in the server log and use that.

## Run

```bash
npm run dev
```

## Run with the MCP Inspector

The inspector connects to the server over HTTP, so run both in separate
terminals. Terminal 1:

```bash
npm run dev
```

Terminal 2:

```bash
npm run inspect
```

In the inspector UI (opens in your browser), pick **Streamable HTTP** as the
transport and enter `http://localhost:3978/mcp` as the URL, then click
**Connect**.

## Example agent flow

1. Agent calls `requestApproval(userId, title, description)` → gets
   `approvalId`.
2. The user sees an Approve/Reject card in Teams and clicks a button.
3. The `card.action` handler records the decision.
4. Agent polls `getApproval(approvalId)` until the status flips to
   `approved` or `rejected`.

## Limitations

All state is in-memory. A server restart clears everything — pending asks
and approvals in flight will be lost.

**Only one outstanding `ask` per user.** The next message that user sends to
the bot is treated as the answer to their open ask. Calling `ask` for the
same user while a previous ask is still pending will overwrite the
correlation, and the user's reply will resolve whichever ask is current.

The natural fix would be to match inbound replies to a specific question via
`activity.replyToId`, but Teams populates `replyToId` inconsistently in
personal/1:1 chat across desktop, mobile, and web clients, so it is not
reliable. To support concurrent asks per user, reshape `ask` to send an
Adaptive Card with an `Input.Text` + Submit action — the same pattern
`requestApproval` uses — so the `requestId` travels with the answer in the
submit data instead of relying on free-typed messages.

## Security

The `/mcp` endpoint is mounted **without authentication**. Anyone who can
reach the port can call the tools — which means they can DM arbitrary users
and mutate approval state on your behalf. This is fine for local dev (the
MCP Inspector connects from the same machine), but **do not expose `/mcp`
on the network as-is.**

Before deploying or making the port reachable from anywhere but localhost,
add an authentication check on `/mcp` — e.g. a bearer token / shared
secret in a header, or proper OAuth. The Teams `/api/messages` endpoint
already validates Bot Framework JWTs via the framework, so it is not
affected; only `/mcp` needs guarding.
