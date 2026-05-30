# Teams: Apps

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
    <a href="https://microsoft.github.io/teams-sdk" target="_blank">
        <img src="https://img.shields.io/badge/📖 docs-open-blue" />
    </a>
</p>

A package used to create apps/bots that can send/receive activities.

<a href="https://microsoft.github.io/teams-sdk" target="_blank">
    <img src="https://img.shields.io/badge/📖 Getting Started-blue?style=for-the-badge" />
</a>

## Install

```bash
$: npm install @microsoft/teams.apps
```

## What `@microsoft/teams.apps` is

`@microsoft/teams.apps` is the main npm package for building Teams app backends with Node.js.

Use it when you want to:

- receive activities from Teams
- route events like `message`, `invoke`, and install events to handlers
- send replies back to Teams from your own app server
- add app surfaces such as bots and tabs from one package

## Requirements

- Node.js 20 or later
- A Teams app registration that points to your app endpoint

## Typical app flow

Most apps built with `@microsoft/teams.apps` follow the same shape:

1. Install `@microsoft/teams.apps`
2. Create an `App` instance
3. Register handlers with `app.on(...)`
4. Start the server with `app.start()`
5. Point your Teams app at `/api/messages`

## Getting started

1. Install the package:

   ```bash
   npm install @microsoft/teams.apps
   ```

2. Create your app entrypoint
3. Add at least one handler, such as `message`
4. Configure the environment values your app needs, such as `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID`
5. Start the app locally

## First working example

The smallest useful `@microsoft/teams.apps` app creates an `App`, listens for messages, and replies:

```ts
import { App } from '@microsoft/teams.apps';

const app = new App();

app.on('message', async ({ reply, activity }) => {
  await reply(`you said "${activity.text}"`);
});

app.start().catch(console.error);
```

This gives you the basic flow:

- Teams sends an activity to your app
- `@microsoft/teams.apps` routes it to the matching handler
- your handler sends a response back to Teams

## Connect your app to Teams

Use the official Teams CLI to create and manage the Teams app that points to your local `@microsoft/teams.apps` server:

```bash
npm install -g @microsoft/teams.cli
teams login
teams app create --name "my-app" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

This is the core setup step for npm users: it connects your local app to a Teams app registration.

## Learn more

Start with these resources:

- [Getting started docs](https://microsoft.github.io/teams-sdk/typescript/getting-started)
- [Echo example](https://github.com/microsoft/teams.ts/tree/main/examples/echo) for a minimal message flow
- [Message extensions example](https://github.com/microsoft/teams.ts/tree/main/examples/message-extensions) for compose extensions and tabs
- [Tab example](https://github.com/microsoft/teams.ts/tree/main/examples/tab) for a tab-focused sample

## What to ignore at first

If you are just getting started with `@microsoft/teams.apps`, you can ignore:

- advanced auth flows beyond the basic app registration
- Microsoft Graph integrations
- production deployment and hardening details
- lower-level packages unless your scenario needs them

## Dependencies

- [`express`](https://www.npmjs.com/package/express)
