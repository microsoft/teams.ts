import '@azure/openai/types';
import { ChatPrompt, Message } from '@microsoft/teams.ai';
import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { LocalStorage } from '@microsoft/teams.common/storage';
import { DevtoolsPlugin } from '@microsoft/teams.dev';
import { OpenAIChatModel } from '@microsoft/teams.openai';

interface IMessageFeedback {
  messageId: string;
  reaction: 'like' | 'dislike';
  feedback?: string;
}

interface IStorageState {
  status: boolean;
  messages: Message[];
  feedback: IMessageFeedback[];
}

const storage = new LocalStorage<IStorageState>();

const app = new App({
  logger: new ConsoleLogger('@tests/lights', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ send, stream, activity }) => {
  let state = storage.get(activity.from.id);

  if (!state) {
    state = {
      status: false,
      messages: [],
      feedback: [],
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

  if (activity.text === '/feedback') {
    if (state.feedback.length === 0) {
      await send({
        type: 'message',
        text: 'No feedback recorded yet.',
      });
      return;
    }

    const feedbackText = state.feedback
      .map(
        (f) => `- Message ${f.messageId}: ${f.reaction}${f.feedback ? ` - "${f.feedback}"` : ''}`
      )
      .join('\n');

    await send({
      type: 'message',
      text: `Feedback history:\n${feedbackText}`,
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

  await prompt.send(activity.text, {
    onChunk: (chunk: string) => {
      stream.emit(new MessageActivity(chunk).addFeedback());
    },
  });
});

app.on('message.submit.feedback', async ({ log, activity }) => {
  log.info('message.submit.feedback', activity);

  const state = storage.get(activity.from.id);
  if (!state) return { status: 404 };

  const feedback = {
    messageId: activity.replyToId || activity.id,
    reaction: activity.value.actionValue.reaction,
    feedback: activity.value.actionValue.feedback,
  };

  state.feedback.push(feedback);
  storage.set(activity.from.id, state);

  return { status: 200 };
});

app.start().catch(console.error);
