import { Hono } from 'hono';
import { App } from '@microsoft/teams.apps';
import { HonoAdapter } from './hono-adapter';

// 1. Create your Hono app with your own routes
export const hono = new Hono();

// Add your custom routes
hono.get('/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

hono.get('/api/users', (c) => {
  return c.json({
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  });
});

hono.get('/', (c) => {
  return c.html(`
    <html>
      <body>
        <h1>Hono + teams.ts</h1>
        <p>Your Hono server is running with a Teams bot!</p>
        <ul>
          <li><a href="/health">Health Check</a></li>
          <li><a href="/api/users">API: Users</a></li>
          <li><strong>/api/messages</strong> - Teams bot endpoint</li>
        </ul>
      </body>
    </html>
  `);
});

// 2. Create Hono adapter with your Hono app
export const adapter = new HonoAdapter(hono);

// 3. Create teams.ts app with the adapter
export const app = new App({
  httpAdapter: adapter
});

// 5. Handle Teams bot messages
app.on('message', async ({ send, activity }) => {
  await send(`Echo from Hono server: ${activity.text}`);
});
