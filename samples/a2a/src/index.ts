import { ChatPrompt } from '@microsoft/spark.ai';
import { App } from '@microsoft/spark.apps';
import { ConsoleLogger } from '@microsoft/spark.common/logging';
import { DevtoolsPlugin } from '@microsoft/spark.dev';
import { A2APlugin } from '@microsoft/spark.a2a';
import { OpenAIChatModel } from '@microsoft/spark.openai';

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
