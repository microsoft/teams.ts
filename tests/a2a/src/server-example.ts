import { A2APlugin, schema } from "@microsoft/teams.a2a";
import { ChatPrompt } from "@microsoft/teams.ai";
import { App } from "@microsoft/teams.apps";
import { ConsoleLogger } from '@microsoft/teams.common';
import { OpenAIChatModel } from "@microsoft/teams.openai";

const logger = new ConsoleLogger('a2a-server', { level: 'debug' });

const PORT = +(process.env.PORT || 4000)

const agentCard: schema.AgentCard = {
    name: "Weather Agent",
    description: "An agent that can tell you the weather",
    url: `http://localhost:${PORT}/a2a`,
    provider: {
        organization: "Weather Co.",
    },
    version: "0.0.1",
    capabilities: {
    },
    skills: [
        {
            id: "get_weather",
            name: "Get Weather",
            description: "Get the weather for a given location",
            tags: ["weather", "get", "location"],
            examples: [
                "Get the weather for London",
                "What's the weather in Tokyo?",
                "How is the current temperature in San Francisco?",
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

const handler = async (userMessage: string) => {
    logger.info(`Received message: ${userMessage}`);
    let toolLocation: string | null = null;
    const result = await new ChatPrompt({
        instructions: 'You are a weather agent that can tell you the weather for a given location',
        model: new OpenAIChatModel({
            apiKey: process.env.OPENAI_API_KEY,
            model: "gpt-4o-mini",
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
            result: 'input-required' as const,
            content: 'Please provide a location'
        }
    } else {
        return {
            result: 'weather' as const,
            content: result.content!
        }
    }
}

app.event('a2a:message', async ({ respond, taskContext }) => {
    const textInput = taskContext.userMessage.parts.filter(p => p.type === 'text').at(0)?.text;
    if (!textInput) {
        await respond({
            'state': 'failed',
            'parts': [
                {
                    type: 'text',
                    text: 'Only text input is currentl supported'
                }
            ]
        })
        return;
    }
    const result = await handler(textInput);
    if (result.result === 'weather') {
        await respond(result.content);
    } else {
        await respond({
            'state': 'input-required',
            'parts': [
                {
                    type: 'text',
                    text: result.content
                }
            ]
        })
    }
});

(async () => {
    await app.start(PORT);
})();
