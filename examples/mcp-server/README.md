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
