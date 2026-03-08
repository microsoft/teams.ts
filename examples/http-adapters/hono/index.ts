import 'dotenv/config';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { App } from '@microsoft/teams.apps';
import { HonoAdapter } from './hono-adapter';

const port = parseInt(process.env.PORT || '3978', 10);

async function main() {
  console.log('Starting Hono server with Teams bot integration...\n');

  // 1. Create your Hono app with your own routes
  const hono = new Hono();

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
  const adapter = new HonoAdapter(hono);

  // 3. Create teams.ts app with the adapter
  const app = new App({
    httpServerAdapter: adapter
  });

  // 4. Handle Teams bot messages
  app.on('message', async ({ send, activity }) => {
    await send(`Echo from Hono server: ${activity.text}`);
  });

  // 5. Initialize teams.ts app - this adds /api/messages to your Hono app
  await app.initialize();

  // 6. Start your Hono server directly (adapter doesn't manage lifecycle)
  serve({
    fetch: hono.fetch,
    port
  });

  console.log(`✓ Server ready on http://localhost:${port}`);
  console.log(`\nYour Hono routes:`);
  console.log(`  GET  /              - Homepage`);
  console.log(`  GET  /health        - Health check`);
  console.log(`  GET  /api/users     - Users API`);
  console.log(`  POST /api/messages  - Teams bot endpoint (added by teams.ts)`);
  console.log(`\nOpen http://localhost:${port} in your browser!`);
}

main().catch((err) => {
  console.error('Failed to start:', err);
  process.exit(1);
});
