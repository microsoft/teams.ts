import 'dotenv/config';
import express, { Request, Response } from 'express';
import { translateToEmojis } from './agent';

const app = express();
const port = parseInt(process.env.PORT || '3978', 10);

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({
    name: 'langchain-emoji-agent',
    description: 'An AI agent that echoes messages back as emojis using LangChain + Microsoft Foundry',
    endpoints: {
      'POST /api/chat': 'Send { "message": "<text>" }, receive an emoji-only response',
    },
  });
});

app.post('/api/chat', async (req: Request, res: Response) => {
  const { message } = req.body as { message?: string };

  if (!message || typeof message !== 'string' || message.trim() === '') {
    res.status(400).json({ error: 'Request body must include a non-empty "message" string' });
    return;
  }

  try {
    const emojis = await translateToEmojis(message.trim());
    res.json({ message: message.trim(), response: emojis });
  } catch (err: unknown) {
    const e = err as { message?: string; status?: number };
    console.error('Agent error:', e.message, e.status ?? '');
    res.status(500).json({ error: 'Failed to generate emoji response' });
  }
});

app.listen(port, () => {
  console.log(`langchain-emoji-agent listening on http://localhost:${port}`);
  console.log(`Try: curl -X POST http://localhost:${port}/api/chat -H 'Content-Type: application/json' -d '{"message":"I love pizza"}'`);
});
