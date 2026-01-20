# HTTP Adapter Examples

This example demonstrates how to use **teams.ts** with different HTTP frameworks through custom adapters.

## What is an HTTP Adapter?

An HTTP adapter bridges a specific HTTP framework (Express, Hono, Next.js, etc.) with teams.ts. This allows you to:

- ✅ Use any HTTP framework you prefer
- ✅ Co-locate your bot with existing web applications
- ✅ Maintain full control over server lifecycle
- ✅ Add custom routes alongside your Teams bot

## Structure

This example contains three different adapter implementations in separate folders:

```
adapters/
├── express/              # Express adapter (recommended for most)
│   ├── index.ts
│   ├── express-adapter.ts
│   └── teams-app.ts
├── hono/                 # Hono adapter (fastest & modern)
│   ├── index.ts
│   ├── hono-adapter.ts
│   └── teams-app.ts
└── nextjs/               # Next.js adapter (full-stack)
    ├── server.ts
    ├── nextjs-adapter.ts
    ├── teams-app.ts
    └── app/              # Next.js pages
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

3. Run the adapter you want to try:
```bash
# Run Express adapter
npm run dev:express

# Run Hono adapter
npm run dev:hono

# Run Next.js adapter
npm run dev:nextjs
```

All adapters start on `http://localhost:3978` with the Teams bot endpoint at `/api/messages`.

## Architecture

```
┌─────────────────┐
│   teams.ts App  │
│                 │
│  ┌───────────┐  │
│  │HttpServer │  │  ← Teams bot infrastructure (framework-agnostic)
│  └─────┬──────┘  │
└────────┼─────────┘
         │
    ┌────▼────┐
    │ Adapter │           ← Framework-specific implementation
    └────┬────┘
         │
    ┌────▼────────┐
    │  Framework  │       ← Express / Hono / Next.js / etc.
    │   (HTTP)    │
    └─────────────┘
```

## Adapter Implementations

### 1. Express ([`express/`](./express/))

The most common adapter using Express.js.

**When to use:**
- Starting a new Teams bot project
- You want a simple, well-documented solution
- You need middleware ecosystem (CORS, body parsing, etc.)
- Your team is familiar with Express

**Key features:**
- Rich middleware ecosystem
- Easy to add custom routes
- Built-in static file serving

**Usage:**
```bash
npm run dev:express
```

See [express/README.md](./express/README.md) for details.

### 2. Hono ([`hono/`](./hono/))

Ultra-fast, lightweight web framework with Web Standards API.

**When to use:**
- Performance is critical
- You want a modern, TypeScript-first framework
- You prefer Web Standards (Request/Response) over Express
- You want minimal dependencies

**Key features:**
- One of the fastest Node.js frameworks
- Lightweight with minimal dependencies
- Web Standards API (Request/Response)
- Excellent TypeScript support

**Usage:**
```bash
npm run dev:hono
```

See [hono/README.md](./hono/README.md) for details.

### 3. Next.js ([`nextjs/`](./nextjs/))

Combines a Teams bot with a Next.js web application in a single server.

**When to use:**
- You have an existing Next.js app and want to add a bot
- You want a web UI and bot in the same project
- You need server-side rendering (SSR) or static generation
- You want React-based admin/config pages for your bot

**Key features:**
- Bot and web UI in one codebase
- Share code between bot and web app
- Next.js handles all non-bot routes
- Server-side rendering for web pages

**Usage:**
```bash
npm run dev:nextjs
```

See [nextjs/README.md](./nextjs/README.md) for details.

## Quick Comparison

| Feature | Express | Hono | Next.js |
|---------|---------|------|---------|
| **Performance** | Good | Excellent | Good |
| **Bundle Size** | Medium | Small | Large |
| **Learning Curve** | Easy | Easy | Medium |
| **Use Case** | General purpose | High performance | Full-stack app |
| **Web UI** | Manual setup | Manual setup | Built-in (React) |
| **TypeScript** | Good | Excellent | Excellent |
| **Middleware** | Rich ecosystem | Growing | Next.js specific |

## How Adapters Work

All adapters implement the `IHttpAdapter` interface:

```typescript
interface IHttpAdapter {
  /**
   * Get the underlying HTTP server
   */
  getServer(): http.Server;

  /**
   * Register a route handler
   */
  registerRoute(config: IRouteConfig): void;

  /**
   * Initialize the adapter (optional)
   * Called before routes are registered
   */
  initialize?(): Promise<void>;

  /**
   * Start the server (optional)
   * Called when user calls app.start() or adapter.start()
   */
  start?(port: number | string): Promise<void>;
}
```

## Usage Pattern

All adapters follow the same pattern:

```typescript
import { App } from '@microsoft/teams.apps';
import { MyAdapter } from './my-adapter';

// 1. Create adapter
const adapter = new MyAdapter();

// 2. Create teams.ts app with adapter
const app = new App({
  httpAdapter: adapter
});

// 3. Start the app
await app.start(3978);
```

## Creating Your Own Adapter

Want to use a different framework? Creating an adapter is straightforward:

1. Implement the `IHttpAdapter` interface
2. Convert between your framework's request/response format and teams.ts format
3. Register routes by calling the handler when requests match

See the adapter implementations in this example for reference:
- [express-adapter.ts](./express/express-adapter.ts) - Most straightforward
- [hono-adapter.ts](./hono/hono-adapter.ts) - Web Standards API
- [nextjs-adapter.ts](./nextjs/nextjs-adapter.ts) - Complex integration

## Additional Resources

- [teams.ts Documentation](https://github.com/microsoft/teams.ts)
- [Express Documentation](https://expressjs.com/)
- [Hono Documentation](https://hono.dev/)
- [Next.js Documentation](https://nextjs.org/)
