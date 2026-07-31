# AgenticIdentity example

Demonstrates using an AgenticIdentity scope to send and receive messages in the Agent 365 program.

## Reactive Echo

`src/main.ts` mimics the echo example. Incoming messages are handled normally; the inbound service URL and AgenticIdentity scope are carried by the context/API layer.

It also logs `agentLifecycle` events through one general handler plus typed handlers for each observed `AgenticUser*` wire lifecycle variant. The general handler calls `ctx.next()` so the matching variant-specific handler can run afterward.

```bash
export CLIENT_ID=<agentic-blueprint-id>
export CLIENT_SECRET=<agentic-blueprint-secret>
export TENANT_ID=<tenant-id>

npm run dev --workspace @examples/agentic-blueprint
```

## Proactive API Send

`src/proactive.ts` shows both `app.send(..., { agenticIdentity })` and the lower-level conversation activity API. In both cases the API layer asks the auth provider for the right AgenticIdentity token and uses it in the request header.

```bash
export CLIENT_ID=<agentic-blueprint-id>
export CLIENT_SECRET=<agentic-blueprint-secret>
export TENANT_ID=<tenant-id>

npm run dev:proactive --workspace @examples/agentic-blueprint -- \
  <conversation-id> \
  <agentic-app-id> \
  <agentic-user-id>
```
