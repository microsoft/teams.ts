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

## Observability and Agent365 baggage

The Teams SDK emits OpenTelemetry-compatible spans and metrics, but it does not configure an OpenTelemetry SDK, exporters, collectors, or credentials. Configure those in your application so you can choose the exporter and destination that match your environment.

Install OpenTelemetry SDK/exporter packages in your app or example package, not in the Teams SDK packages:

```bash
npm install @opentelemetry/sdk-node \
  @opentelemetry/exporter-trace-otlp-http \
  @opentelemetry/exporter-metrics-otlp-http
```

Initialize OpenTelemetry before starting the Teams app. The SDK uses the canonical cross-language source names exported by the public package telemetry constants:

```ts
// observability.ts
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-http';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { NodeSDK } from '@opentelemetry/sdk-node';

import { TeamsApiTelemetry } from '@microsoft/teams.api';
import { TeamsBotApplicationTelemetry } from '@microsoft/teams.apps';

const teamsTelemetrySources = {
  tracers: [
    TeamsApiTelemetry.tracerName, // Microsoft.Teams.Api
    TeamsBotApplicationTelemetry.tracerName, // Microsoft.Teams.Apps
  ],
  meters: [
    TeamsApiTelemetry.meterName, // Microsoft.Teams.Api
    TeamsBotApplicationTelemetry.meterName, // Microsoft.Teams.Apps
  ],
};

console.log('Teams OpenTelemetry sources', teamsTelemetrySources);

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: process.env.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT,
  }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: process.env.OTEL_EXPORTER_OTLP_METRICS_ENDPOINT,
    }),
  }),
});

sdk.start();
```

Signals emitted by the SDK use lowercase dotted names under those sources, such as `microsoft.teams.activity.process`, `microsoft.teams.handler`, `microsoft.teams.api.client`, `microsoft.teams.auth.outbound`, and metrics like `microsoft.teams.activity.process.duration`.

Then import the setup before creating or starting the app:

```ts
import './observability';

import { App } from '@microsoft/teams.apps';
```

The SDK automatically applies activity-derived Agent365 baggage while processing inbound turns. If your app has non-activity-derived Agent365 values, scope the work with `withTeamsBaggage(...)` and add those values on the builder:

```ts
import { App, withTeamsBaggage } from '@microsoft/teams.apps';

const app = new App();

app.on('message', async (ctx) => {
  await withTeamsBaggage(
    ctx.activity,
    (baggage) => {
      baggage.operationSource(process.env.OTEL_SERVICE_NAME ?? 'agent-blueprint');

      if (process.env.AGENT_SERVER_ADDRESS) {
        baggage.invokeAgentServer(
          process.env.AGENT_SERVER_ADDRESS,
          process.env.AGENT_SERVER_PORT ? Number(process.env.AGENT_SERVER_PORT) : undefined
        );
      }

      // Only set client.address when your app has a trusted caller-supplied
      // source, such as proxy or infrastructure metadata.
      baggage.set('client.address', process.env.CLIENT_ADDRESS);
    },
    async () => {
      await ctx.reply('Observed with Agent365 baggage.');
    }
  );
});
```

Use placeholders or environment variables for exporter endpoints and service metadata. Do not put secrets, tokens, OAuth codes, or connection strings in source control.
