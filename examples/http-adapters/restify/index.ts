import 'dotenv/config';
import { app } from './teams-app';

const port = parseInt(process.env.PORT || '3978', 10);

async function main() {
  console.log('Starting Restify server with Teams bot integration...\n');

  await app.start(port);

  console.log(`✓ Server ready on http://localhost:${port}`);
  console.log(`\nYour Restify routes:`);
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
