
import { A2AClientPlugin } from '@microsoft/teams.a2a';
import { ChatPrompt } from '@microsoft/teams.ai';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';
import { DevtoolsPlugin } from '@microsoft/teams.dev';
import { OpenAIChatModel } from '@microsoft/teams.openai';

const logger = new ConsoleLogger('a2a-client', { level: 'debug' });

const app = new App({
  logger,
  plugins: [new DevtoolsPlugin()],
});

// :snippet-start: a2a-client-use-with-chat-prompt-example
// import { ChatPrompt } from "@microsoft/teams.ai";
// import { OpenAIChatModel } from "@microsoft/teams.openai";
// import { A2AClientPlugin } from "@microsoft/teams.a2a";
const prompt = new ChatPrompt(
  {
    logger,
    model: new OpenAIChatModel({
      apiKey: process.env.AZURE_OPENAI_API_KEY,
      model: process.env.AZURE_OPENAI_MODEL!,
      endpoint: process.env.AZURE_OPENAI_ENDPOINT,
      apiVersion: process.env.AZURE_OPENAI_API_VERSION
    }),
  },
  // Add the A2AClientPlugin to the prompt
  [new A2AClientPlugin()]
)
  // Provide the agent's card URL
  .usePlugin('a2a', {
    key: 'my-weather-agent',
    cardUrl: 'http://localhost:4000/a2a/.well-known/agent-card.json',
  });
// :snippet-end:

// :snippet-start: a2a-client-advanced-customization-example
// Example with custom message builders and response processors
export const advancedPrompt = new ChatPrompt(
  {
    logger,
    model: new OpenAIChatModel({
      apiKey: process.env.AZURE_OPENAI_API_KEY,
      model: process.env.AZURE_OPENAI_MODEL!,
      endpoint: process.env.AZURE_OPENAI_ENDPOINT,
      apiVersion: process.env.AZURE_OPENAI_API_VERSION
    }),
  },
  [new A2AClientPlugin({
    // Custom function metadata builder
    buildFunctionMetadata: (card) => ({
      name: `ask${card.name.replace(/\s+/g, '')}`,
      description: `Ask ${card.name} about ${card.description || 'anything'}`,
    }),
    // Custom message builder - can return either Message or string
    buildMessageForAgent: (card, input) => {
      // Return a string - will be automatically wrapped in a Message
      return `[To ${card.name}]: ${input}`;

      // Or return a full Message object for more control:
      // return {
      //   messageId: uuidv4(),
      //   role: 'user',
      //   parts: [{ kind: 'text', text: `[To ${card.name}]: ${input}` }],
      //   kind: 'message',
      //   metadata: { source: 'chat-prompt', ...metadata },
      // };
    },
    // Custom response processor
    buildMessageFromAgentResponse: (card, response) => {
      if (response.kind === 'message') {
        const textParts = response.parts
          .filter(part => part.kind === 'text')
          .map(part => part.text);
        return `${card.name} says: ${textParts.join(' ')}`;
      }
      return `${card.name} sent a non-text response.`;
    },
  })]
)
  .usePlugin('a2a', {
    key: 'weather-agent',
    cardUrl: 'http://localhost:4000/a2a/.well-known/agent-card.json',
  });
// :snippet-end:

const handler = async (message: string) => {
  // :snippet-start: a2a-client-use-with-chat-prompt-example-send
  // Now we can send the message to the prompt and it will decide if
  // the a2a agent should be used or not and also manages contacting the agent
  const result = await prompt.send(message);
  return result;
  // :snippet-end:
};

app.on('message', async ({ send, activity }) => {
  await send({ type: 'typing' });
  const result = await handler(activity.text);
  if (result.content) {
    await send(result.content);
  }
});

app.start(process.env.PORT || 3978).catch(console.error);
