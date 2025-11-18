import { randomUUID } from 'node:crypto';

import { AgentCard, Message, TextPart } from '@a2a-js/sdk';

import { A2APlugin, } from '@microsoft/teams.a2a';
import { ChatPrompt } from '@microsoft/teams.ai';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';
import { OpenAIChatModel } from '@microsoft/teams.openai';

const logger = new ConsoleLogger('a2a-server', { level: 'debug' });

const PORT = process.env.PORT || 4000;

// :snippet-start: a2a-server-app-initialization-example
// import { A2APlugin, schema } from "@microsoft/teams.a2a";
// import { App } from "@microsoft/teams.apps";
const agentCard: AgentCard = {
  name: 'Weather Agent',
  description: 'An agent that can tell you the weather',
  url: `http://localhost:${PORT}/a2a`,
  version: '0.0.1',
  protocolVersion: '0.3.0',
  capabilities: {},
  defaultInputModes: [],
  defaultOutputModes: [],
  skills: [
    {
      // Expose various skills that this agent can perform
      id: 'get_weather',
      name: 'Get Weather',
      description: 'Get the weather for a given location',
      tags: ['weather', 'get', 'location'],
      examples: [
        // Give concrete examples on how to contact the agent
        'Get the weather for London',
        'What is the weather',
        'What\'s the weather in Tokyo?',
        'How is the current temperature in San Francisco?',
      ],
    },
  ],
};

const app = new App({
  logger,
  plugins: [new A2APlugin({
    agentCard
  })],
});
// :snippet-end:
const myEventHandler = async (userMessage: string): Promise<Message | string> => {
  logger.info(`Received message: ${userMessage}`);
  let toolLocation: string | null = null;
  const result = await new ChatPrompt({
    instructions: 'You are a weather agent that can tell you the weather for a given location',
    model: new OpenAIChatModel({
      apiKey: process.env.AZURE_OPENAI_API_KEY,
      model: process.env.AZURE_OPENAI_MODEL!,
      endpoint: process.env.AZURE_OPENAI_ENDPOINT,
      apiVersion: process.env.AZURE_OPENAI_API_VERSION
    }),
  }).function('location', 'The location to get the weather for', {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'The location to get the weather for',
      },
    },
    required: ['location'],
  }, async ({ location }: { location: string }) => {
    toolLocation = location;
    return `The weather in ${location} is sunny`;
  }).send(userMessage);

  if (!toolLocation) {
    return {
      kind: 'message',
      role: 'agent',
      messageId: randomUUID(),
      parts: [{
        kind: 'text',
        text: 'Please provide a location'
      }]
    };
  } else {
    return result.content!;
  }
};


// :snippet-start: a2a-server-event-handler-example
app.event('a2a:message', async ({ respond, requestContext }) => {
  logger.info(`Received message: ${requestContext.userMessage}`);
  const textInput = requestContext.userMessage.parts.filter((p): p is TextPart => p.kind === 'text').at(0)?.text;
  if (!textInput) {
    await respond('My agent currently only supports text input');
    return;
  }
  const result = await myEventHandler(textInput);
  await respond(result);
});
// :snippet-end:

app.start(PORT).catch(console.error);
