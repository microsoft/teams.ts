import 'dotenv/config';
import { app, adapter } from './teams-app';

const port = parseInt(process.env.PORT || '3978', 10);

async function main() {
  console.log('Starting Express server with Teams bot integration...\n');

  // Initialize teams.ts app - this adds /api/messages to your Express app
  await app.initialize();

  // Start the server via the adapter
  await adapter.start(port);

  console.log(`✓ Server ready on http://localhost:${port}`);
  console.log(`\nYour Express routes:`);
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
