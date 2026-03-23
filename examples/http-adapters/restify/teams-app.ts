import { App } from '@microsoft/teams.apps';
import { RestifyAdapter } from './restify-adapter';

// 1. Create Restify adapter
export const adapter = new RestifyAdapter();

// Get the Restify server instance to add custom routes
const server = adapter.instance;

// 2. Add your custom routes
server.get('/health', (_req, res, next) => {
  res.send(200, { status: 'healthy', timestamp: new Date().toISOString() });
  next();
});

server.get('/api/users', (_req, res, next) => {
  res.send(200, {
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  });
  next();
});

server.get('/', (_req, res, next) => {
  res.sendRaw(200, `
    <html>
      <body>
        <h1>Restify + teams.ts</h1>
        <p>Your Restify server is running with a Teams bot!</p>
        <ul>
          <li><a href="/health">Health Check</a></li>
          <li><a href="/api/users">API: Users</a></li>
          <li><strong>/api/messages</strong> - Teams bot endpoint</li>
        </ul>
      </body>
    </html>
  `, { 'Content-Type': 'text/html' });
  next();
});

// 3. Create teams.ts app with the adapter
export const app = new App({
  httpServerAdapter: adapter,
});

// 4. Handle incoming messages
app.on('message', async ({ send, activity }) => {
  await send(`Echo from Restify server: ${activity.text}`);
});
