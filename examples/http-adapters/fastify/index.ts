import 'dotenv/config';
import { app } from './teams-app';

const port = parseInt(process.env.PORT || '3978', 10);

async function main() {
  console.log('Starting Fastify server with Teams bot integration...\n');

  // In this case, we're choosing to use a Fastify server to run the app
  // app.start() will initialize the app and start the Fastify server
  //
  // Alternatively, we could have used app.initialize() and then started
  // the Fastify server separately with adapter.instance.listen()
  await app.start(port);

  console.log(`✓ Server ready on http://localhost:${port}`);
  console.log(`\nYour Fastify routes:`);
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
