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

`@microsoft/teams.apps` is the main server-side package in this repo for building Teams apps that receive activities, route them to handlers, and send replies back to Teams.

Use it when you want one package that covers the app entrypoint, activity handling, app configuration, and the local HTTP endpoint used by Teams.

## When to use it

Use `@microsoft/teams.apps` when you are:

- building a bot or app endpoint for Teams
- handling incoming activities such as messages, installs, and invoke events
- starting from one of this repo's app examples

Reach for lower-level packages only when you need to work directly with raw activity models or other platform-specific APIs.

## How a `teams.apps` app is structured

Most apps built with `@microsoft/teams.apps` follow the same shape:

1. Create an `App` instance
2. Register handlers with `app.on(...)`
3. Optionally register tabs or other app surfaces
4. Start the local server with `app.start()`

The default Teams messaging endpoint is `/api/messages`.

## Minimal getting-started flow

1. Install the package:

   ```bash
   npm install @microsoft/teams.apps
   ```

2. Create an app entrypoint and initialize `App`
3. Add one handler for a simple activity such as `message`
4. Set the environment values used by the app, such as `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID`
5. Start the app locally

If you want a repo-backed starting point, begin with:

- [`examples/echo`](../../examples/echo/README.md) for a minimal message flow
- [`examples/message-extensions`](../../examples/message-extensions/README.md) for compose extensions and tabs
- [`examples/tab`](../../examples/tab/README.md) for a tab-focused sample

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

## Teams CLI flow

Use the official Teams CLI to create and manage the Teams app that points to your local `@microsoft/teams.apps` server:

```bash
npm install -g @microsoft/teams.cli
teams login
teams app create --name "my-app" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

In the examples, this flow writes values such as `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to `.env`, then prints an install link for Teams.

## What to ignore for a first pass

If you are just getting started with `@microsoft/teams.apps`, you can ignore:

- advanced auth flows beyond the basic app registration
- Microsoft Graph integrations
- production deployment and hardening details
- lower-level packages unless your scenario needs them

## Dependencies

- [`express`](https://www.npmjs.com/package/express)
