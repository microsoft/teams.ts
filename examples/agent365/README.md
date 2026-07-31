# AgenticIdentity example

Demonstrates using `AgenticIdentity` as the SDK operation/request/proactive scope in the Agent 365 program, and how to wire the resulting telemetry into Agent365 observability. An `AgenticIdentity` has an `agenticAppBlueprintId`, can include an `agenticAppId`, and that app can optionally be associated with an `agenticUserId`. For background on the underlying telemetry model, see the [OpenTelemetry documentation](https://opentelemetry.io/docs/).

| Entrypoint | Flow | What it shows |
| --- | --- | --- |
| `src/observability.ts` | OTel setup | Exporter + Agentic App token resolver. |
| `src/main.ts` | Reactive | Inbound messages; the SDK establishes baggage automatically. |
| `src/proactive.ts` | Proactive | A job with no inbound activity opens its own scope. |

```bash
export CLIENT_ID=<agentic-app-blueprint-id>
export CLIENT_SECRET=<agentic-app-blueprint-secret>
export TENANT_ID=<tenant-id>
```

## Reactive Echo

`src/main.ts` mimics the echo example. Incoming messages are handled normally; the inbound service URL and `AgenticIdentity` operation scope are carried by the context/API layer.

It also logs `agentLifecycle` events through one general handler plus typed Agentic User handlers for each observed `AgenticUser*` wire lifecycle variant. Lifecycle APIs stay Agentic User-specific because those service events are specifically about agentic users. The general handler calls `ctx.next()` so the matching variant-specific handler can run afterward.

```bash
npm run dev --workspace @examples/agentic-blueprint
```

## Proactive API Send

`src/proactive.ts` shows both `app.send(..., { agenticIdentity })` and the lower-level conversation activity API. `AgenticIdentity` is the SDK operation scope; token helpers stay specific, so the API layer maps that scope to the Agentic User or Agentic App helper the service operation needs.

```bash
npm run dev:proactive --workspace @examples/agentic-blueprint -- \
  <conversation-id> \
  <agentic-app-id> \
  <agentic-user-id>
```

## Independent baggage

`createAgent365Scope` needs no `App`, so a worker in a separate process can attribute its spans the same way. See [Independent of `App`](#4-independent-of-app) below.

## Integrate with Agent365 OpenTelemetry

The Teams SDK emits OpenTelemetry-compatible spans and metrics, but it does not configure an OpenTelemetry SDK, exporters, collectors, credentials, or Agent365 scopes. Configure those in your application so you can choose the exporter and destination that match your environment.

For Agent365 telemetry, use the Microsoft OpenTelemetry distro from your app or example package. It owns the OpenTelemetry SDK and exporter setup; the Teams SDK packages do not depend on it.

```bash
npm install @microsoft/opentelemetry
```

Signals emitted by the Teams SDK use lowercase dotted names under the `Microsoft.Teams.Api` and `Microsoft.Teams.Apps` instrumentation scopes, such as `microsoft.teams.activity.process`, `microsoft.teams.handler`, `microsoft.teams.api.client`, `microsoft.teams.auth.outbound`, and metrics like `microsoft.teams.activity.process.duration`.

### 1. Configure the exporter

`src/observability.ts` exports a single `useAgent365Exporter(tokens)` that initializes the distro and points its exporter at a token source.

Exports are attributed to the agent itself rather than to a user, so the exporter authenticates with an Agentic App token:

```ts
useMicrosoftOpenTelemetry({
  a365: {
    enabled: true,
    enableObservabilityExporter: true,
    useS2SEndpoint: true,
    observabilityScopeOverride: OBSERVABILITY_SCOPE,
    tokenResolver: (agenticAppId, tenantId, authScopes) =>
      tokens.getAgenticAppToken(
        authScopes?.[0] ?? OBSERVABILITY_SCOPE,
        agenticAppId,
        tenantId
      ),
  },
});
```

`app.tokenProvider` mints that token — the SDK's token surface for callers that need to authenticate outside the API and Graph clients. These helpers stay specific (`getAgenticUserToken` and `getAgenticAppToken`) even though sends and API clients use `AgenticIdentity` as their operation scope. Call `useAgent365Exporter(app.tokenProvider)` after constructing the `App` and before `app.start()`.

### 2. Reactive flows

The SDK bridges Teams identity into OpenTelemetry baggage so the Agent365 scopes you create are correlated. It uses only standard OpenTelemetry baggage, so the Teams SDK packages do not depend on `@microsoft/opentelemetry` or any Microsoft Agents SDK package.

For inbound activities this is automatic, and it happens *before the first span of the turn starts*, so every span the turn produces inherits it — including the SDK's own `api.client` and `auth.outbound` spans, not just your handler.

```ts
const app = new App({
  telemetry: {
    agent365: {
      include: ['senderName', 'agentName', 'agentEmail'],
      operationSource: 'my-agent',
    },
  },
});

app.on('message', async (ctx) => {
  const scope = InvokeAgentScope.start(/* ... */);
  try {
    await scope.withActiveSpanAsync(async () => {
      await ctx.reply('Agent365 telemetry is scoped without logging message content.');
    });
  } finally {
    scope.dispose();
  }
});
```

By default the bridge adds only the identifiers Agent365 needs for correlation: tenant id, conversation id, channel id, agent/app identity, and user id when available. It never adds message text or content. Names and email addresses are opt-in per field, because baggage is serialized onto the `baggage` header of outbound requests when a baggage propagator is configured.

Pass `telemetry: { agent365: false }` to disable the bridge.

### 3. Proactive flows

Outbound sends contribute no baggage of their own. Proactive code creates its own Agent365 spans *before* it calls `app.send`, so anything the send established would arrive too late to attribute them — it would cover the SDK's own outbound spans while leaving yours bare. Attribution is the caller's, because the caller is what knows the operation. Build an opener with `createAgent365Scope` and wrap the work:

```ts
import type { AgenticIdentity } from '@microsoft/teams.api';
import { App, createAgent365Scope } from '@microsoft/teams.apps';

// Shared, so proactive baggage matches reactive baggage.
const agent365 = { operationSource: 'nightly-digest', include: ['agentName'] } as const;

const app = new App({ telemetry: { agent365 } });
const withAgent365Scope = createAgent365Scope(agent365);

await app.initialize();
const agenticAppBlueprintId = app.id;
const tenantId = app.credentials?.tenantId;
if (!agenticAppBlueprintId || !tenantId) {
  throw new Error('CLIENT_ID and TENANT_ID are required to construct an AgenticIdentity.');
}

const agenticIdentity: AgenticIdentity = {
  agenticAppBlueprintId,
  agenticAppId,
  agenticUserId,
  tenantId,
};

await withAgent365Scope({ agenticIdentity, conversationId }, async () => {
  const scope = InvokeAgentScope.start(/* ... */);
  try {
    await scope.withActiveSpanAsync(() => app.send(conversationId, 'Digest ready.', { agenticIdentity }));
  } finally {
    scope.dispose();
  }
});
```

Build the opener once per host and share it. The personal-data `include` policy is bound at the factory, not at each call site, so a background job cannot emit fields the app does not allow — and cannot silently drop ones it does.

A send made without a scope goes out unattributed, including the SDK's own outbound spans. Reactive turns are unaffected: the inbound flow establishes baggage before the root span, and a `ctx.send` inherits it.

Set `serviceUrl` and `channelName` when the host knows them — nothing downstream fills them in.

Flush before the process exits. Spans are batched, so a job that returns straight from `main` takes its `invoke_agent` span with it — `src/proactive.ts` awaits `flushAgent365Spans()` (a `shutdownMicrosoftOpenTelemetry()` wrapper) as its last step. A long-running host does the same on graceful shutdown.

### 4. Independent of `App`

`createAgent365Scope` needs no `App`, so a queue consumer or cron job in a separate process can attribute its spans the same way. Enabling `a365` alone installs the span processor without the exporter, so this needs no token and no network:

```ts
useMicrosoftOpenTelemetry({ a365: { enabled: true } });

const withAgent365Scope = createAgent365Scope({
  operationSource: 'nightly-digest',
  agentId: process.env.CLIENT_ID,
  include: ['agentName'],
});

await withAgent365Scope(
  {
    agenticIdentity,
    conversationId,
    agentName: 'Nightly Digest Agent',
    agentEmail: 'digest-agent@example.com', // dropped: not in `include`
  },
  async () => {
    // Spans created here inherit the baggage.
  }
);
```
