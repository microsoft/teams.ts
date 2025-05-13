import { A2AClientPlugin } from "@microsoft/teams.a2a";
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

const prompt = new ChatPrompt(
  {
    logger,
    model: new OpenAIChatModel({
      apiKey: process.env.OPENAI_API_KEY,
      model: "gpt-4o-mini",
    }),
  },
  [new A2AClientPlugin()]
).usePlugin("a2a", {
  key: "my-travel-agent",
  url: "http://localhost:4000/a2a",
});


const handler = async (message: string) => {
  const result = await prompt.send(message);

  return result;
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
