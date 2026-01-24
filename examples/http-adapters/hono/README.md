# Hono + teams.ts Example

This example shows how to build a custom HTTP adapter and integrate teams.ts with any framework.

## Key Concepts

**1. Building a custom adapter** - See `hono-adapter.ts` for a minimal `IHttpAdapter` implementation (~60 lines).

**2. Lifecycle options** - Two approaches:
- Implement `start()` in your adapter, then call `app.start()`
- Call `app.initialize()` and manage the server yourself ← This example

## How It Works

```typescript
// Create Hono app with your routes
const hono = new Hono();
hono.get('/health', (c) => c.json({ status: 'ok' }));

// Create adapter and App
const adapter = new HonoAdapter(hono);
const app = new App({ httpAdapter: adapter });
app.on('message', async ({ send, activity }) => {
  await send(`Echo: ${activity.text}`);
});

// Initialize adds /api/messages to your Hono app
await app.initialize();

// You control the server lifecycle
serve({ fetch: hono.fetch, port: 3978 });
```

## Running

```bash
npm run dev:hono
```

Server starts on `http://localhost:3978` with:
- Your custom Hono routes
- `/api/messages` - Teams bot endpoint

## Why This Pattern?

- ✅ Use any HTTP framework
- ✅ Full control over server lifecycle
- ✅ Simple adapter implementation
- ✅ Add Teams bot to existing apps
