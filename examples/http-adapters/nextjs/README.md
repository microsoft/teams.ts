# Next.js + teams.ts Example

This example demonstrates how to use **Next.js** with teams.ts using a custom `NextjsAdapter`.

> **Note**: The `NextjsAdapter` is included in this example (`src/nextjs-adapter.ts`) and is not part of the core `@microsoft/teams.apps` package. You can copy and customize it for your own projects.

## Architecture

- **Next.js** - React framework with server-side rendering
- **NextjsAdapter** (local) - Intercepts Teams routes before Next.js
- **ConfigurableHttpPlugin** - Generic HTTP plugin that works with any adapter

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
- `/api/messages` - Teams bot endpoint (handled by NextjsAdapter)
- All other routes - Handled by Next.js

## How It Works

```typescript
import { App, HttpServer } from '@microsoft/teams.apps';
import { NextjsAdapter } from './nextjs-adapter';

// Create adapter and app
const adapter = new NextjsAdapter(undefined, {
  dev: process.env.NODE_ENV !== 'production'
});

const app = new App({
  server: new HttpServer(adapter)
});

// Start the app
await app.start(3978);
```

The `NextjsAdapter` handles:
- Creating and managing the Next.js app
- Preparing Next.js (await nextApp.prepare())
- Intercepting `/api/messages` before Next.js sees it
- Falling back to Next.js for all other routes
- Server lifecycle management

## Key Features

- **Route Interception** - Teams bot routes are handled before Next.js
- **Seamless Fallback** - All non-bot routes go to Next.js
- **Manual Server Management** - Full control over server lifecycle
- **TypeScript** - Full type safety

## Benefits

- ✅ **Co-located** - Bot and web UI in the same app
- ✅ **No conflicts** - Clean separation of concerns
- ✅ **Simple** - No complex routing logic needed
- ✅ **Flexible** - Easy to customize the adapter
