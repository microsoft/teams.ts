import { ChatPrompt } from '@microsoft/spark.ai';
import { App } from '@microsoft/spark.apps';
import { DevtoolsPlugin } from '@microsoft/spark.dev';
import { McpClient } from '@microsoft/spark.mcpclient';
import { OpenAIChatModel } from '@microsoft/spark.openai';

const app = new App({
  plugins: [new DevtoolsPlugin()],
});

const prompt = new ChatPrompt({
  instructions: 'You are a helpful assistant. Use the tool call to echo back what the user said!',
  model: new OpenAIChatModel({
    model: 'gpt-4o-mini',
    apiKey: process.env.OPENAI_API_KEY,
  }),
  mcpClient: new McpClient(),
}).mcp('http://localhost:3000/mcp');

app.on('message', async ({ send, activity }) => {
  await send({ type: 'typing' });

  const result = await prompt.send(activity.text);
  await send(result.content);
});

(async () => {
  await app.start(+(process.env.PORT || 3002));
})();
