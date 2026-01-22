import 'dotenv/config';
import { serve } from '@hono/node-server';
import { app, hono } from './teams-app';

const port = parseInt(process.env.PORT || '3978', 10);

async function main() {
  console.log('Starting Hono server with Teams bot integration...\n');

  // Initialize teams.ts app - this adds /api/messages to your Hono app
  await app.initialize();

  // If you wanted the App class to handle server lifecycle, your adapter would need to implement start / stop
  // app.start().catch(console.error)

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
