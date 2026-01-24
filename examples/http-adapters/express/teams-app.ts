import http from 'http';
import express from 'express';
import { App, HttpServer, ExpressAdapter } from '@microsoft/teams.apps';

// 1. Create your existing Express app with routes
export const expressApp = express();
export const httpServer = http.createServer(expressApp);

// Add your custom routes
expressApp.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

expressApp.get('/api/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  });
});

expressApp.get('/', (req, res) => {
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

// 2. Create Express adapter with your existing server
export const adapter = new ExpressAdapter(httpServer);

// 3. Create HTTP server with the adapter
export const server = new HttpServer(adapter);

// 4. Create teams.ts app with the HTTP server
export const app = new App({
  server
});

// 5. Handle incoming messages
app.on('message', async ({ send, activity }) => {
  await send(`Echo from Express server: ${activity.text}`);
});
