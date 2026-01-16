# Express + teams.ts Example (Adapter Pattern)

This example demonstrates how to use **Express** with teams.ts using the explicit `ExpressAdapter` and `ConfigurableHttpPlugin`.

## Why This Example?

While teams.ts provides `HttpPlugin` (which uses Express internally), this example shows:
1. The **explicit adapter pattern** for consistency with other frameworks
2. How to use `ConfigurableHttpPlugin` + `ExpressAdapter`
3. A pattern that matches Hono, Next.js, and other framework integrations

## Comparison

**Traditional approach:**
```typescript
import { App, HttpPlugin } from '@microsoft/teams.apps';

const app = new App({
  plugins: [new HttpPlugin()]
});
```

**Adapter pattern (this example):**
```typescript
import { App, ConfigurableHttpPlugin, ExpressAdapter } from '@microsoft/teams.apps';

const app = new App({
  plugins: [
    new ConfigurableHttpPlugin(new ExpressAdapter())
  ]
});
```

Both are functionally equivalent, but the adapter pattern provides:
- **Consistency** across all HTTP frameworks
- **Explicit** framework choice
- **Flexibility** to customize the adapter

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

3. Run the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3978` with:
- `/api/messages` - Teams bot endpoint
- Other Express routes can be added

## How It Works

```typescript
import { App, ConfigurableHttpPlugin, ExpressAdapter } from '@microsoft/teams.apps';

const app = new App({
  plugins: [
    new ConfigurableHttpPlugin(
      new ExpressAdapter(),
      { skipAuth: true }
    )
  ]
});
```

The `ExpressAdapter` handles:
- Creating and managing the Express app
- Converting between Express format and teams.ts format
- Routing Teams bot requests to `/api/messages`
- Server lifecycle management
- CORS and JSON parsing middleware

## Adding Custom Routes

Access the underlying Express app through the adapter:

```typescript
const adapter = new ExpressAdapter();

// Add custom routes
adapter.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

adapter.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.sendStatus(200);
});

const app = new App({
  plugins: [new ConfigurableHttpPlugin(adapter)]
});
```

## Benefits of the Adapter Pattern

1. **Unified API** - Same pattern for Express, Hono, Next.js, etc.
2. **Framework Flexibility** - Easy to switch frameworks
3. **Clear Separation** - Teams logic separate from HTTP framework
4. **Type Safety** - Full TypeScript support
5. **Extensibility** - Easy to create custom adapters

## When to Use HttpPlugin vs ExpressAdapter

**Use `HttpPlugin`** when:
- You want the simplest possible setup
- You're okay with Express as the default
- You don't need to customize the Express app before initialization

**Use `ExpressAdapter`** when:
- You want consistency with other framework examples
- You need to customize the Express app setup
- You want explicit control over the HTTP framework
- You're building a multi-framework library
