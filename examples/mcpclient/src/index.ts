import { ChatPrompt } from '@microsoft/teams.ai';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';
import { DevtoolsPlugin } from '@microsoft/teams.dev';
import { McpClientPlugin } from '@microsoft/teams.mcpclient';
import { OpenAIChatModel } from '@microsoft/teams.openai';

const app = new App({
  plugins: [new DevtoolsPlugin()],
});


// :snippet-start: mcp-client-prompt-config
const logger = new ConsoleLogger('mcp-client', { level: 'debug' });
const prompt = new ChatPrompt(
  {
    instructions:
      'You are a helpful assistant. You MUST use tool calls to do all your work.',
    model: new OpenAIChatModel({
      model: 'gpt-4o-mini',
      apiKey: process.env.OPENAI_API_KEY,
    }),
    logger
  },
  // Tell the prompt that the plugin needs to be used
  // Here you may also pass in additional configurations such as
  // a tool-cache, which can be used to limit the tools that are used
  // or improve performance
  [new McpClientPlugin({ logger })],
)
  // Here we are saying you can use any tool from localhost:3978/mcp
  // (that is the URL for the server we built using the mcp plugin)
  .usePlugin('mcpClient', { url: 'http://localhost:3978/mcp' })
  // Alternatively, you can use a different server hosted somewhere else
  // Here we are using the mcp server hosted on an Azure Function
  .usePlugin('mcpClient', {
    url: 'https://aiacceleratormcp.azurewebsites.net/runtime/webhooks/mcp/sse',
    params: {
      headers: {
        // If your server requires authentication, you can pass in Bearer or other
        // authentication headers here
        'x-functions-key': process.env.AZURE_FUNCTION_KEY!,
      },
    },
  }).usePlugin('mcpClient', {
    url: 'https://aiacceleratormcp.azurewebsites.net/runtime/webhooks/mcp/sse',
    params: {
      headers: {
        'x-functions-key': process.env.AZURE_FUNCTION_KEY!,
      },
    },
  }).usePlugin('mcpClient', {
    url: 'https://learn.microsoft.com/api/mcp',
  });

app.on('message', async ({ send, activity }) => {
  await send({ type: 'typing' });

  const result = await prompt.send(activity.text);
  if (result.content) {
    await send(result.content);
  }
});
// :snippet-end:

app.start(process.env.PORT || 3002).catch(console.error);
