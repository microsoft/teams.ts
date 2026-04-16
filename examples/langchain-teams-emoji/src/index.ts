import 'dotenv/config';
import http from 'http';
import express, { Request, Response } from 'express';
import { App, ExpressAdapter } from '@microsoft/teams.apps';
import { translateToEmojis } from './agent';

const expressApp = express();
const port = parseInt(process.env.PORT || '3978', 10);

expressApp.use(express.json());

// ── REST endpoint ──────────────────────────────────────────────────────────
expressApp.post('/api/chat', async (req: Request, res: Response) => {
  const { message } = req.body as { message?: string };

  if (!message || typeof message !== 'string' || message.trim() === '') {
    res.status(400).json({ error: 'Request body must include a non-empty "message" string' });
    return;
  }

  try {
    const emojis = await translateToEmojis(message.trim());
    res.json({ message: message.trim(), response: emojis });
  } catch (err: unknown) {
    const e = err as { message?: string };
    console.error('Chat error:', e.message);
    res.status(500).json({ error: 'Failed to generate emoji response' });
  }
});

// ── Teams bot via ExpressAdapter ───────────────────────────────────────────
const adapter = new ExpressAdapter(expressApp);
const teamsApp = new App({ httpServerAdapter: adapter });

teamsApp.on('message', async ({ send, activity }) => {
  const text = activity.text?.trim();
  if (!text) return;

  await send({ type: 'typing' });
  const emojis = await translateToEmojis(text);
  await send(emojis);
});

// ── Start ──────────────────────────────────────────────────────────────────
async function main() {
  await teamsApp.initialize();

  const httpServer = http.createServer(expressApp);
  await new Promise<void>((resolve, reject) => {
    httpServer.listen(port, () => resolve());
    httpServer.once('error', reject);
  });

  console.log(`langchain-teams-emoji listening on http://localhost:${port}`);
  console.log(`  POST /api/chat     — REST emoji translator`);
  console.log(`  POST /api/messages — Teams bot endpoint`);
}

main().catch(console.error);
