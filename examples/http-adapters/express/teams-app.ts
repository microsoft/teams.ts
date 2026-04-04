import express from 'express';
import { App, ExpressAdapter } from '@microsoft/teams.apps';

// 1. Create your existing Express app with routes
export const expressApp = express();

// Add your custom routes
expressApp.get('/health', (_req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

expressApp.get('/api/users', (_req, res) => {
  res.json({
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  });
});

expressApp.get('/', (_req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Express + teams.ts</h1>
        <p>Your Express server is running with a Teams bot!</p>
        <ul>
          <li><a href="/health">Health Check</a></li>
          <li><a href="/api/users">API: Users</a></li>
          <li><strong>/api/messages</strong> - Teams bot endpoint</li>
        </ul>
      </body>
    </html>
  `);
});

// 2. Create Express adapter with your existing Express app
export const adapter = new ExpressAdapter(expressApp);

// 3. Create teams.ts app with the adapter
export const app = new App({
  httpServerAdapter: adapter
});

// 4. Handle incoming messages
app.on('message', async ({ send, activity }) => {
  await send(`Echo from Express server: ${activity.text}`);
});
