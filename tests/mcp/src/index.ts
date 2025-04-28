import { ChatPrompt } from '@microsoft/teams.ai';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';
import { McpPlugin } from '@microsoft/teams.mcp';
import { OpenAIChatModel } from '@microsoft/teams.openai';

const prompt = new ChatPrompt({
  model: new OpenAIChatModel({
    model: 'gpt-4o-mini',
    apiKey: process.env.OPENAI_API_KEY,
  }),
});

prompt.function(
  'echo',
  'echos back whatever you said',
  {
    type: 'object',
    properties: {
      input: {
        type: 'string',
        description: 'the text to echo back',
      },
    },
    required: ['input'],
  } as const,
  async ({ input }: { input: string }) => {
    return `You said "${input}" :)`;
  }
);

const app = new App({
  logger: new ConsoleLogger('@tests/echo', { level: 'debug' }),
  plugins: [
    new DevtoolsPlugin(),
    new McpPlugin({
      name: 'echo',
      inspector: 'http://localhost:5173?proxyPort=9000',
    }).use(prompt),
  ],
});

app.on('message', async ({ send, activity }) => {
  await send({ type: 'typing' });
  await send(`you said "${activity.text}"`);
});

(async () => {
  await app.start();
})();
