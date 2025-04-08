import { ChatPrompt } from '@microsoft/spark.ai';
import { App } from '@microsoft/spark.apps';
import { DevtoolsPlugin } from '@microsoft/spark.dev';
import { McpClientPlugin } from '@microsoft/spark.mcpclient';
import { OpenAIChatModel } from '@microsoft/spark.openai';

const app = new App({
  plugins: [new DevtoolsPlugin()],
});

const prompt = new ChatPrompt(
  {
    instructions: 'You are a helpful assistant. You MUST use tool calls to do all your work.',
    model: new OpenAIChatModel({
      model: 'gpt-4o-mini',
      apiKey: process.env.OPENAI_API_KEY,
    }),
  },
  [new McpClientPlugin()]
).usePlugin('mcpClient', { url: 'http://localhost:3000/mcp' });

app.on('message', async ({ send, activity }) => {
  await send({ type: 'typing' });

  const result = await prompt.send(activity.text);
  if (result.content) {
    await send(result.content);
  }
});

(async () => {
  await app.start(+(process.env.PORT || 3002));
})();
