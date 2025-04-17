import { A2APlugin } from '@microsoft/teams.a2a';
import { ChatPrompt } from '@microsoft/teams.ai';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';
import { OpenAIChatModel } from '@microsoft/teams.openai';

import pkg from '../package.json';

const prompt = new ChatPrompt({
  model: new OpenAIChatModel({
    model: 'gpt-4o-mini',
    apiKey: process.env.OPENAI_API_KEY,
  }),
});

const app = new App({
  logger: new ConsoleLogger(pkg.name, { level: 'debug' }),
  plugins: [
    new DevtoolsPlugin(),
    new A2APlugin({
      name: pkg.name,
      version: pkg.version,
      url: 'http://localhost:3000',
      capabilities: { streaming: true },
      skills: [],
    }),
  ],
});

app.on('message', async ({ stream, activity }) => {
  // const res = await prompt.send(activity.text);
  // await send(res.content!);

  await prompt.send(activity.text, {
    onChunk: (chunk) => stream.emit(chunk),
  });
});

(async () => {
  await app.start();
})();
