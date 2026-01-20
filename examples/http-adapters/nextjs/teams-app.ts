import { App } from '@microsoft/teams.apps';
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

// 2. Create teams.ts app with the adapter
export const app = new App({
  httpAdapter: adapter
});

// 3. Handle incoming messages
app.on('message', async ({ send, activity }) => {
  await send(`Echo from Next.js + teams.ts: ${activity.text}`);
});
