import 'dotenv/config';
import { app } from './teams-app';

const port = parseInt(process.env.PORT || '3978', 10);

async function main() {
  // Start the app (ExpressAdapter handles server setup)
  await app.start(port);

  console.log(`> Server ready on http://localhost:${port}`);
  console.log(`> Teams bot endpoint: /api/messages`);
  console.log(`> Express server with Teams bot integration`);
}

main().catch((err) => {
  console.error('Failed to start:', err);
  process.exit(1);
});
