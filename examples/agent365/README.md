# Agent Blueprint and Agentic User example

Demonstrates using an Agent Blueprint app to send and receive messages as an Agentic User in the Agentic Id program.

## Reactive Echo

`src/main.ts` mimics the echo example. Incoming messages are handled normally; the inbound service URL and Agentic User identity are carried by the context/API layer.

It also logs Agentic User `agentLifecycle` events through one general handler plus typed handlers for each observed `AgenticUser*` lifecycle variant. The general handler calls `ctx.next()` so the matching variant-specific handler can run afterward.

```bash
export CLIENT_ID=<agent-blueprint-app-id>
export CLIENT_SECRET=<agent-blueprint-secret>
export TENANT_ID=<tenant-id>

npm run dev --workspace @examples/agent-blueprint
```

## Proactive API Send

`src/proactive.ts` shows both `app.send(..., { agenticIdentity })` and the lower-level conversation activity API. In both cases the API layer asks the auth provider for the right Agentic Id token and uses it in the request header.

```bash
export CLIENT_ID=<agent-blueprint-app-id>
export CLIENT_SECRET=<agent-blueprint-secret>
export TENANT_ID=<tenant-id>

npm run dev:proactive --workspace @examples/agent-blueprint -- \
  <conversation-id> \
  <agentic-app-id> \
  <agentic-user-id>
```
