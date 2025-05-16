import { A2APlugin, schema, TaskUpdate } from '@microsoft/teams.a2a';
import { ChatPrompt } from '@microsoft/teams.ai';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';
import { OpenAIChatModel } from '@microsoft/teams.openai';

const logger = new ConsoleLogger('a2a-server', { level: 'debug' });

const PORT = +(process.env.PORT || 4000);

// :snippet-start: a2a-server-app-initialization-example
// import { A2APlugin, schema } from "@microsoft/teams.a2a";
// import { App } from "@microsoft/teams.apps";
const agentCard: schema.AgentCard = {
    name: 'Weather Agent',
    description: 'An agent that can tell you the weather',
    url: `http://localhost:${PORT}/a2a`,
    provider: {
        organization: 'Weather Co.',
    },
    version: '0.0.1',
    capabilities: {},
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
const myEventHandler = async (userMessage: string): Promise<TaskUpdate | string> => {
    logger.info(`Received message: ${userMessage}`);
    let toolLocation: string | null = null;
    const result = await new ChatPrompt({
        instructions: 'You are a weather agent that can tell you the weather for a given location',
        model: new OpenAIChatModel({
            apiKey: process.env.OPENAI_API_KEY,
            model: 'gpt-4o-mini',
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
            state: 'input-required',
            parts: [{
                type: 'text',
                text: 'Please provide a location'
            }]
        };
    } else {
        return result.content!;
    }
};

// :snippet-start: a2a-server-event-handler-example
app.event('a2a:message', async ({ respond, taskContext }) => {
    logger.info(`Received message: ${taskContext.userMessage}`);
    const textInput = taskContext.userMessage.parts.filter(p => p.type === 'text').at(0)?.text;
    if (!textInput) {
        await respond({
            'state': 'failed',
            'parts': [
                {
                    type: 'text',
                    text: 'My agent currently only supports text input'
                }
            ]
        });
        return;
    }
    const result: string | TaskUpdate = await myEventHandler(textInput);
    await respond(result);
});
// :snippet-end:

(async () => {
    await app.start(PORT);
})();
