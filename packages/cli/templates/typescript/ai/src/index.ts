import { App } from '@microsoft/spark.apps';
import { ChatPrompt, Message } from '@microsoft/spark.ai';
import { LocalStorage } from '@microsoft/spark.common/storage';
import { DevtoolsPlugin } from '@microsoft/spark.dev';
import { OpenAIChatModel } from '@microsoft/spark.openai';

const storage = new LocalStorage<Array<Message>>();
const app = new App({
  storage,
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ stream, activity }) => {
  const prompt = new ChatPrompt({
    messages: storage.get(`${activity.conversation.id}/${activity.from.id}`),
    model: new OpenAIChatModel({
      model: 'gpt-4o',
      apiKey: process.env.OPENAI_API_KEY,
      stream: true,
    }),
  });

  await prompt.chat(activity.text, (chunk) => {
    stream.emit(chunk);
  });
});

(async () => {
  await app.start(+(process.env.PORT || 3000));
})();
