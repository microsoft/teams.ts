import http from 'http';
import { App } from '@microsoft/teams.apps';
import { NextjsAdapter } from './nextjs-adapter';

// 1. Create HTTP server (you own this)
export const httpServer = http.createServer();

// 2. Create Next.js adapter with your server
export const adapter = new NextjsAdapter(httpServer, {
  dev: process.env.NODE_ENV !== 'production'
});

// 3. Create teams.ts app with the adapter
export const app = new App({
  httpAdapter: adapter
});

// 4. Handle incoming messages
app.on('message', async ({ send, activity }) => {
  await send(`Echo from Next.js + teams.ts: ${activity.text}`);
});
