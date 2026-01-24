import 'dotenv/config';
import { app, httpServer } from './teams-app';

const port = parseInt(process.env.PORT || '3978', 10);

async function main() {
  // Initialize the app (registers routes with adapter)
  await app.initialize();

  // Start your server (you control the lifecycle)
  httpServer.listen(port, () => {
    console.log(`> Server ready on http://localhost:${port}`);
    console.log(`> Teams bot endpoint: /api/messages`);
    console.log(`> Next.js pages are served alongside Teams bot routes`);
  });
}

main().catch((err) => {
  console.error('Failed to start:', err);
  process.exit(1);
});
