# Agent: MCP (Model Context Protocol) Server

A Teams bot that doubles as an MCP server, exposing human-in-the-loop tools
that let an MCP client (an agent, an IDE, etc.) reach a real user through
Teams and wait for them to reply or approve.

## Tools

| Tool                | Purpose                                                                        | Parameters                        |
| ------------------- | ------------------------------------------------------------------------------ | --------------------------------- |
| `find_user`         | Search the tenant by partial name / email / UPN. Returns up to 5 AAD object ids. | `query`                         |
| `notify`            | Send a one-way notification to a user. No response expected.                   | `userId`, `message`               |
| `ask`               | Ask a user a question via an Adaptive Card with a reply box. Returns a `requestId`. Multiple asks per user can be in flight. | `userId`, `question` |
| `wait_for_reply`    | Wait up to `timeoutSeconds` for the reply (default 30). Returns `pending` on timeout. | `requestId`, `timeoutSeconds` |
| `get_reply`         | Snapshot the reply state without waiting. For manual polling.                  | `requestId`                       |
| `request_approval`  | Send an Approve/Reject card to a user. Returns an `approvalId`.                | `userId`, `title`, `description`  |
| `wait_for_approval` | Wait up to `timeoutSeconds` for the decision (default 30). Returns `pending` on timeout. | `approvalId`, `timeoutSeconds` |
| `get_approval`      | Snapshot the approval status without waiting. For manual polling.              | `approvalId`                      |

`userId` everywhere is the **AAD object id** of someone in the same tenant. Use `find_user` to resolve a name to an id.

## Layout

- `src/state.ts` — in-memory maps for conversations, pending asks, approvals, and reply/approval waiters.
- `src/app.ts` — the `App` instance and the Teams activity handlers
  (`message`, `card.action.ask_reply`, `card.action.approval_response`) that capture replies and approvals.
- `src/mcpTools.ts` — `McpServer` from `@modelcontextprotocol/sdk` plus the
  tool registrations that send to users and read/write shared state.
- `src/graphClient.ts` — lightweight app-only Graph client for `find_user`.
- `src/index.ts` — initializes the app, mounts a `StreamableHTTPServerTransport`
  at `/mcp` on the Express adapter, and starts the server.

## Configure

Create a `.env` file:

```
CLIENT_ID=<your-azure-bot-app-id>
CLIENT_SECRET=<your-azure-bot-app-secret>
TENANT_ID=<your-tenant-id>
```

`TENANT_ID` is required because the MCP tools open 1:1 conversations
*proactively* via `conversations.create({ tenantId })`. There's no inbound
activity to read the tenant from.

The `userId` argument passed to `notify`, `ask`, and `request_approval` is the
**AAD object id** of someone in the same tenant. Either call `find_user` to
resolve a name, or DM the bot once and read the AAD object id off the first
`message` activity in the server log.

## Graph permissions

`find_user` calls Microsoft Graph as the bot's app identity. In the bot's
Azure AD app registration → **API permissions**, add
**`User.ReadBasic.All`** (Microsoft Graph, **Application** permission) and
grant admin consent for your tenant. Without this, `find_user` returns 403
Forbidden.

The Graph call reuses `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` — no
extra config keys.

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

1. Agent calls `request_approval(userId, title, description)` → gets
   `approvalId`.
2. The user sees an Approve/Reject card in Teams and clicks a button.
3. The `card.action.approval_response` handler records the decision and
   signals any in-flight `wait_for_approval` waiter.
4. Agent calls `wait_for_approval(approvalId)` — returns within
   milliseconds of the click. If the user doesn't click within 30 s, the
   tool returns `pending` and the agent calls again. (The `get_approval`
   variant exists for clients that prefer manual polling.)

## Limitations

All state is in-memory. A server restart clears everything — pending asks
and approvals in flight will be lost.

## Security

The `/mcp` endpoint is mounted **without authentication**. Anyone who can
reach the port can call the tools — which means they can DM arbitrary users
and mutate approval state on your behalf. This is fine for local dev (the
MCP Inspector connects from the same machine), but **do not expose `/mcp`
on the network as-is.**

Before deploying or making the port reachable from anywhere but localhost,
add an authentication check on `/mcp` — e.g. a bearer token / shared
secret in a header, or proper OAuth.
