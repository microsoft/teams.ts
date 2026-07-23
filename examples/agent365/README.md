# AgentIdentityBlueprint and Agentic User example

Demonstrates using an AgentIdentityBlueprint to send and receive messages as an Agentic User in the Agentic User program.

## Reactive Echo

`src/main.ts` mimics the echo example. Incoming messages are handled normally; the inbound service URL and Agentic User identity are carried by the context/API layer.

It also logs Agentic User `agentLifecycle` events through one general handler plus typed handlers for each observed `AgenticUser*` wire lifecycle variant. The general handler calls `ctx.next()` so the matching variant-specific handler can run afterward.

```bash
export CLIENT_ID=<agent-identity-blueprint-id>
export CLIENT_SECRET=<agent-identity-blueprint-secret>
export TENANT_ID=<tenant-id>

npm run dev --workspace @examples/agent-identity-blueprint
```

## Proactive API Send

`src/proactive.ts` shows both `app.send(..., { agenticUser })` and the lower-level conversation activity API. In both cases the API layer asks the auth provider for the right Agentic User token and uses it in the request header.

```bash
export CLIENT_ID=<agent-identity-blueprint-id>
export CLIENT_SECRET=<agent-identity-blueprint-secret>
export TENANT_ID=<tenant-id>

npm run dev:proactive --workspace @examples/agent-identity-blueprint -- \
  <conversation-id> \
  <agent-app-instance-id> \
  <agentic-user-id>
```
