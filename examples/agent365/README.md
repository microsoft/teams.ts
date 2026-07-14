# agent365

Demonstrates passing `AgenticIdentity` directly to Teams API surfaces.

## Reactive Echo

`src/main.ts` mimics the echo example. Incoming messages are handled normally; the inbound service URL and agentic identity are carried by the context/API layer.

It also logs Agent 365 `agentLifecycle` events through one general handler plus typed handlers for each observed `AgenticUser*` lifecycle variant. The general handler calls `ctx.next()` so the matching variant-specific handler can run afterward.

```bash
export CLIENT_ID=<agent-identity-blueprint-app-id>
export CLIENT_SECRET=<agent-identity-blueprint-secret>
export TENANT_ID=<tenant-id>

npm run dev --workspace @examples/agent365
```

## Proactive API Send

`src/proactive.ts` shows both `app.send(..., { agenticIdentity })` and the lower-level conversation activity API. In both cases the API layer asks the auth provider for the right Agent ID token and uses it in the request header.

```bash
export CLIENT_ID=<agent-identity-blueprint-app-id>
export CLIENT_SECRET=<agent-identity-blueprint-secret>
export TENANT_ID=<tenant-id>

npm run dev:proactive --workspace @examples/agent365 -- \
  <conversation-id> \
  <agentic-app-id> \
  <agentic-user-id>
```
