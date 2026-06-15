# @microsoft/teams.apps

<p>
    <a href="https://www.npmjs.com/package/@microsoft/teams.apps" target="_blank">
        <img src="https://img.shields.io/npm/v/@microsoft/teams.apps/latest" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/teams.apps?activeTab=code" target="_blank">
        <img src="https://img.shields.io/bundlephobia/min/@microsoft/teams.apps" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/teams.apps?activeTab=dependencies" target="_blank">
        <img src="https://img.shields.io/librariesio/release/npm/@microsoft/teams.apps" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/teams.apps" target="_blank">
        <img src="https://img.shields.io/npm/dw/@microsoft/teams.apps" />
    </a>
    <a href="https://aka.ms/teams-sdk-ts" target="_blank">
        <img src="https://img.shields.io/badge/📖 docs-open-blue" />
    </a>
</p>

Build Microsoft Teams agents, tabs, message extensions, and proactive notification services in TypeScript.

`@microsoft/teams.apps` handles Teams activity routing, request auth, replies, proactive sends, Graph access, OAuth sign-in, plugins, and HTTP hosting so you can focus on your app behavior.

Read the full docs at [aka.ms/teams-sdk-ts](https://aka.ms/teams-sdk-ts).

## Install

```bash
npm install @microsoft/teams.apps
```

## Hello Teams agent

```ts
import { App } from '@microsoft/teams.apps';

const app = new App();

app.on('message', async ({ activity, reply }) => {
  await reply(`You said: ${activity.text}`);
});

app.start().catch(console.error);
```

By default, the app receives Teams activities at `/api/messages`.

## Use your existing server

`@microsoft/teams.apps` can start its own HTTP server, or plug into an existing server/framework with an HTTP adapter.

```ts
import express from 'express';
import { App, ExpressAdapter } from '@microsoft/teams.apps';

async function main() {
  const server = express();

  server.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  const app = new App({
    httpServerAdapter: new ExpressAdapter(server),
  });

  app.on('message', async ({ activity, reply }) => {
    await reply(`You said: ${activity.text}`);
  });

  await app.initialize(); // registers /api/messages on your server

  server.listen(process.env.PORT || 3978);
}

main().catch(console.error);
```

See the [HTTP adapter examples](https://github.com/microsoft/teams.ts/tree/main/examples/http-adapters) for framework integration samples.

## Examples

See the [examples folder](https://github.com/microsoft/teams.ts/tree/main/examples) for agents, tabs, message extensions, proactive messaging, Graph, AI/MCP, A2A, and more.

