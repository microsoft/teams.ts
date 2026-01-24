import { App, HttpServer } from '@microsoft/teams.apps';
import { NextjsAdapter } from './nextjs-adapter';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 1. Create Next.js adapter
export const adapter = new NextjsAdapter(undefined, {
  dev: process.env.NODE_ENV !== 'production',
  dir: __dirname
});

// 2. Create HTTP server with the adapter
export const server = new HttpServer(adapter);

// 3. Create teams.ts app with the HTTP server
export const app = new App({
  server
});

// 4. Handle incoming messages
app.on('message', async ({ send, activity }) => {
  await send(`Echo from Next.js + teams.ts: ${activity.text}`);
});
