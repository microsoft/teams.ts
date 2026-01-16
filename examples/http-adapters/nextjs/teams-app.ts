import { App, ConfigurableHttpPlugin } from '@microsoft/teams.apps';
import { NextjsAdapter } from './nextjs-adapter';

// Create NextjsAdapter instance
export const adapter = new NextjsAdapter(undefined, {
  dev: process.env.NODE_ENV !== 'production'
});

// Create teams.ts app with NextjsAdapter
export const app = new App({
  plugins: [
    new ConfigurableHttpPlugin(
      adapter,
      { skipAuth: true }
    )
  ]
});

// Handle incoming messages
app.on('message', async ({ send, activity }) => {
  await send(`Echo from Next.js + teams.ts: ${activity.text}`);
});
