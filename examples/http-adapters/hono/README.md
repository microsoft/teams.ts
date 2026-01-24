# Hono + teams.ts Example

This example demonstrates how to **add a Teams bot to your existing Hono server** by "hooking in" the teams.ts adapter.

> **Note**: The `HonoAdapter` is included in this example (`hono-adapter.ts`) and is not part of the core `@microsoft/teams.apps` package. You can copy and customize it for your own projects.

## Key Concept

You already have a Hono server running with your own routes. You simply pass your Hono app to the adapter, and teams.ts adds the `/api/messages` bot endpoint to your existing server.

```typescript
// 1. Your existing Hono app
const hono = new Hono();
hono.get('/health', (c) => c.json({ status: 'ok' }));
hono.get('/api/users', (c) => c.json({ users: [...] }));

// 2. Hook it into teams.ts
const adapter = new HonoAdapter(hono);  // ← Pass YOUR Hono app
const app = new App({
  plugins: [new ConfigurableHttpPlugin(adapter)]
});

// 3. Initialize (adds /api/messages to your Hono app)
await app.initialize();

// 4. Start your server
await adapter.start(3978);
```

## Architecture

```
Your Hono App (with your routes)
         ↓
   HonoAdapter
         ↓
ConfigurableHttpPlugin
         ↓
    teams.ts App
         ↓
/api/messages route added to your Hono app
```

## Getting Started

1. Install dependencies:
```bash
cd examples/http-adapters
npm install
```

2. Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

3. Run the Hono example:
```bash
npm run dev:hono
```

The server will start on `http://localhost:3978` with:
- `/` - Homepage
- `/health` - Health check endpoint
- `/api/users` - Example API endpoint
- `/api/messages` - Teams bot endpoint (added by teams.ts)

Open http://localhost:3978 in your browser to see all available routes!

## How It Works

### 1. Create Your Hono App (`teams-app.ts`)

```typescript
import { Hono } from 'hono';

// Your existing Hono app with your routes
const hono = new Hono();

hono.get('/health', (c) => {
  return c.json({ status: 'healthy' });
});

hono.get('/api/users', (c) => {
  return c.json({ users: [...] });
});
```

### 2. Hook Into teams.ts

```typescript
import { App, HttpServer } from '@microsoft/teams.apps';
import { HonoAdapter } from './hono-adapter';

// Pass YOUR Hono app to the adapter
const adapter = new HonoAdapter(hono);

// Create teams.ts app
const app = new App({
  server: new HttpServer(adapter)
});

// Handle bot messages
app.on('message', async ({ send, activity }) => {
  await send(`Echo: ${activity.text}`);
});
```

### 3. Start Your Server (`index.ts`)

```typescript
// Initialize teams.ts (adds /api/messages to your Hono app)
await app.initialize();

// Start YOUR Hono server
await adapter.start(3978);
```

## What the HonoAdapter Does

The adapter bridges your Hono app with teams.ts:

1. **Accepts your existing Hono app** - You pass your `Hono` instance to the adapter
2. **Adds Teams bot routes** - When `app.initialize()` is called, it adds `/api/messages` to your Hono app
3. **Converts requests/responses** - Translates between Hono's Web API format and teams.ts format
4. **Manages the server** - Handles starting/stopping the Node.js HTTP server

## Benefits of Hono

- **Fast** - One of the fastest Node.js frameworks
- **Lightweight** - Minimal dependencies (~12KB)
- **Web Standards** - Uses Web API (Request/Response)
- **TypeScript** - First-class TypeScript support
- **Middleware** - Rich middleware ecosystem
- **Flexible** - Works with any Node.js server or edge runtime

## Why This Pattern?

This pattern demonstrates that teams.ts doesn't take over your server - it integrates with your existing setup:

✅ You control your Hono app and routes
✅ You can add/remove routes anytime
✅ teams.ts just adds the `/api/messages` endpoint
✅ Everything runs on a single port
✅ No conflicts between your app and the bot

This is perfect for adding bot functionality to an existing API server!
