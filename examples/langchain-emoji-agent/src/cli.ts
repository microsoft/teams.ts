import 'dotenv/config';
import * as readline from 'readline';
import { translateToEmojis } from './agent';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let closing = false;

rl.on('close', () => {
  closing = true;
});

function prompt() {
  if (closing) return;

  rl.question('You: ', async (input) => {
    const text = input.trim();

    if (!text || text === '/exit' || text === '/quit') {
      console.log('Goodbye!');
      closing = true;
      rl.close();
      return;
    }

    try {
      const emojis = await translateToEmojis(text);
      console.log(`Bot: ${emojis}\n`);
    } catch (err: unknown) {
      const e = err as { message?: string };
      console.error(`Error: ${e.message ?? 'unknown error'}\n`);
    }

    prompt();
  });
}

console.log('Emoji Agent CLI — type a message and get an emoji response.');
console.log('Type /exit to quit.\n');
prompt();
