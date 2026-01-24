# HTTP Adapter Examples

This example shows how to integrate teams.ts with different HTTP frameworks using custom adapters.

## What's an Adapter?

An adapter bridges your HTTP framework with teams.ts. You create your server, pass it to the adapter, and teams.ts adds the `/api/messages` bot endpoint to your existing app.

## Examples

- **[express/](./express/)** - Hook teams.ts into an existing Express server
- **[hono/](./hono/)** - Build a custom adapter (Hono example)
- **[nextjs/](./nextjs/)** - Integrate with Next.js app

## Running

```bash
npm install
cp .env.example .env

# Run an example
npm run dev:express
npm run dev:hono
npm run dev:nextjs
```

All examples start on `http://localhost:3978` with `/api/messages` as the bot endpoint.
