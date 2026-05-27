# HTTP Adapter Examples

This example shows how to integrate teams.ts with different HTTP frameworks using custom adapters.

## What's an Adapter?

An adapter bridges your HTTP framework with teams.ts. You create your server, pass it to the adapter, and teams.ts adds the `/api/messages` bot endpoint to your existing app.

## Examples

- **[express/](./express/)** - Hook your own Express server with the built-in Express adapter
- **[hono/](./hono/)** - Build a custom adapter and manage the lifecycle yourself
- **[fastify/](./fastify/)** - Build a custom adapter and let App manage its lifecycle

## Teams CLI

Use the official Teams CLI (`@microsoft/teams.cli`) to create and manage the Teams app for this sample:

```bash
npm install -g @microsoft/teams.cli
teams --version
teams login
```

Expose this sample's local `/api/messages` endpoint with a tunnel, then create the Teams app:

```bash
teams app create --name "http-adapters" --endpoint "https://<your-tunnel>/api/messages" --env .env --json
```

The CLI writes `CLIENT_ID`, `CLIENT_SECRET`, and `TENANT_ID` to your `.env` file and prints an install link for Teams.

## Running

```bash
npm install
cp .env.example .env

# Run an example
npm run dev:express
npm run dev:hono
npm run dev:fastify
```

All examples start on `http://localhost:3978` with `/api/messages` as the bot endpoint.
