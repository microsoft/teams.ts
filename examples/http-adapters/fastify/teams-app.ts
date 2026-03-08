import { App } from '@microsoft/teams.apps';
import { FastifyAdapter } from './fastify-adapter';

// 1. Create Fastify adapter
export const adapter = new FastifyAdapter();

// Get the Fastify instance to add custom routes
const fastify = adapter.instance;

// 2. Add your custom routes
fastify.get('/health', async (_request, reply) => {
  return reply.send({ status: 'healthy', timestamp: new Date().toISOString() });
});

fastify.get('/api/users', async (_request, reply) => {
  return reply.send({
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  });
});

fastify.get('/', async (_request, reply) => {
  return reply.type('text/html').send(`
    <html>
      <body>
        <h1>Fastify + teams.ts</h1>
        <p>Your Fastify server is running with a Teams bot!</p>
        <ul>
          <li><a href="/health">Health Check</a></li>
          <li><a href="/api/users">API: Users</a></li>
          <li><strong>/api/messages</strong> - Teams bot endpoint</li>
        </ul>
      </body>
    </html>
  `);
});

// 3. Create teams.ts app with the adapter
export const app = new App({
  httpServerAdapter: adapter,
});

// 4. Handle incoming messages
app.on('message', async ({ send, activity }) => {
  await send(`Echo from Fastify server: ${activity.text}`);
});
