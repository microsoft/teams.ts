import { A2AClientPlugin, AgentManager } from "@microsoft/teams.a2a";
import { ChatPrompt } from "@microsoft/teams.ai";
import { App } from "@microsoft/teams.apps";
import { ConsoleLogger } from '@microsoft/teams.common';
import { DevtoolsPlugin } from "@microsoft/teams.dev";
import { OpenAIChatModel } from "@microsoft/teams.openai";

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
      apiKey: process.env.OPENAI_API_KEY,
      model: "gpt-4o-mini",
    }),
  },
  // Add the A2AClientPlugin to the prompt
  [new A2AClientPlugin()]
)
  // Provide the agent's server URL
  .usePlugin("a2a", {
    key: "my-weather-agent",
    url: "http://localhost:4000/a2a",
  });
// :snippet-end:

// :snippet-start: a2a-client-directly-use-agent-manager-example
// import { AgentManager } from "@microsoft/teams.a2a";
// :remove-start:
// @ts-expect-error noUnusedLocals
// :remove-end:
const directlyUserAgentManager = async (message: string) => {
  const agentManager = new AgentManager();
  agentManager.use("my-agent", "https://my-agent.com/a2a");

  const taskId = "my-task-id"; // Generated or reused from previous task
  await agentManager.sendTask("my-agent", {
    id: taskId,
    message: {
      role: 'user',
      parts: [{ type: 'text' as const, text: message }],
    },
  });
}
// :snippet-end:

const handler = async (message: string) => {
  // :snippet-start: a2a-client-use-with-chat-prompt-example-send
  // Now we can send the message to the prompt and it will decide if
  // the a2a agent should be used or not and also manages contacting the agent
  const result = await prompt.send(message);
  return result;
  // :snippet-end:
};

app.on("message", async ({ send, activity }) => {
  await send({ type: "typing" });
  const result = await handler(activity.text);
  if (result.content) {
    await send(result.content);
  }
});

(async () => {
  await app.start(+(process.env.PORT || 3000));
})();
