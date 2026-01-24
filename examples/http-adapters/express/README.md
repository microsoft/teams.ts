# Express + teams.ts Example

This example shows how to integrate teams.ts into your **existing Express server**.

## Key Concept

**You manage the server lifecycle**, not the App. The App simply registers the `/api/messages` endpoint on your existing Express server.

## How It Works

```typescript
// 1. Create your Express app and server (you own this)
const expressApp = express();
const httpServer = http.createServer(expressApp);

// Add your custom routes
expressApp.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 2. Pass your server to ExpressAdapter
const adapter = new ExpressAdapter(httpServer);

// 3. Create App with the adapter
const app = new App({
  httpAdapter: adapter
});

// 4. Initialize (adds /api/messages to your Express app)
await app.initialize();

// 5. You control the server lifecycle
httpServer.listen(3978);
```

## Running

```bash
npm run dev
```

Server starts on `http://localhost:3978` with:
- Your custom Express routes
- `/api/messages` - Teams bot endpoint (added by teams.ts)

## Why This Pattern?

- ✅ Hook teams.ts into your existing Express server
- ✅ You control server startup/shutdown
- ✅ Add Teams bot capabilities to any Express app
