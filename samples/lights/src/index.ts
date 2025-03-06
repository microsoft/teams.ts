import { App } from '@microsoft/spark.apps';
import { ChatPrompt, Message } from '@microsoft/spark.ai';
import { ConsoleLogger } from '@microsoft/spark.common/logging';
import { OpenAIChatModel } from '@microsoft/spark.openai';
import { LocalStorage } from '@microsoft/spark.common/storage';
import { DevtoolsPlugin } from '@microsoft/spark.dev';
import { MessageActivity } from '@microsoft/spark.api';

const storage = new LocalStorage<{
  status: boolean;
  messages: Message[];
}>();

const app = new App({
  logger: new ConsoleLogger('@samples/lights', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ send, stream, activity }) => {
  let state = storage.get(activity.from.id);

  if (!state) {
    state = {
      status: false,
      messages: [],
    };

    storage.set(activity.from.id, state);
  }

  if (activity.text === '/history') {
    await send({
      type: 'message',
      text: state.messages.map((m) => `- ${m.role}: ${JSON.stringify(m.content)}`).join('\n'),
    });

    return;
  }

  const prompt = new ChatPrompt({
    messages: storage.get(activity.from.id)?.messages,
    instructions: `The following is a conversation with an AI assistant.
  The assistant can turn a light on or off.
  The lights are currently off.`,
    model: new OpenAIChatModel({
      model: 'gpt-4o-mini',
      apiKey: process.env.OPENAI_API_KEY,
      stream: true,
    }),
  })
    .function('get_light_status', 'get the current light status', () => {
      return state.status;
    })
    .function('lights_on', 'turn the lights on', () => {
      state.status = true;
      storage.set(activity.from.id, state);
    })
    .function('lights_off', 'turn the lights off', () => {
      state.status = false;
      storage.set(activity.from.id, state);
    });

  await prompt.chat(activity.text, (chunk) => {
    stream.emit(new MessageActivity(chunk).addFeedback());
  });
});

(async () => {
  await app.start();
})();
