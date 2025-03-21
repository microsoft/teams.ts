import { ChatPrompt } from '@microsoft/spark.ai';
import { App } from '@microsoft/spark.apps';
import { ConsoleLogger } from '@microsoft/spark.common/logging';
import { DevtoolsPlugin } from '@microsoft/spark.dev';
import { McpPlugin } from '@microsoft/spark.mcp';
import { OpenAIChatModel } from '@microsoft/spark.openai';

const prompt = new ChatPrompt({
  model: new OpenAIChatModel({
    model: 'gpt-4o-mini',
    apiKey: process.env.OPENAI_API_KEY,
  }),
});

prompt.function('hello-world', 'print hello world', () => {
  return 'hello world!';
});

const app = new App({
  logger: new ConsoleLogger('@samples/echo', { level: 'debug' }),
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
