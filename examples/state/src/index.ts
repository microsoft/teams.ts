import { MessageActivityInput } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';

const app = new App({
  state: true,
  activity: {
    mentions: {
      stripText: true,
    },
  },
});

const markdown = (text: string) =>
  new MessageActivityInput(text).withTextFormat('markdown');

app.on('message', async ({ activity, log, reply, state }) => {
  if (!state) {
    throw new Error('Turn state is not enabled.');
  }

  const text = activity.text?.trim() ?? '';
  const command = text.toLowerCase();

  if (command === 'help') {
    await reply(markdown([
      '**State sample commands**',
      '- `count` - increment the conversation counter',
      '- `my name is <name>` - store your name in user state',
      '- `who am i` - read your name from user state',
      '- `show completed` - demonstrate sealed state after the turn',
      '- `reset counter` - clear this conversation\'s state',
      '- `help` - show this message',
    ].join('\n')));
    return;
  }

  if (command === 'count') {
    const count = (state.conversation.get<number>('count') ?? 0) + 1;
    state.conversation.set('count', count);
    await reply(markdown(`This conversation's counter is now **${count}**.`));
    return;
  }

  if (command.startsWith('my name is ')) {
    const name = text.slice('my name is '.length).trim();
    if (!name) {
      await reply('Please send `my name is <name>`.');
      return;
    }

    state.user?.set('name', name);
    await reply(markdown(`Got it. I'll remember you as **${name}**.`));
    return;
  }

  if (command === 'who am i') {
    const name = state.user?.get<string>('name');
    if (!name) {
      await reply('I don\'t know yet. Tell me with `my name is <name>`.');
      return;
    }

    await reply(markdown(`You are **${name}**.`));
    return;
  }

  if (command === 'show completed') {
    setTimeout(() => {
      if (!state.conversation.isSealed) {
        return;
      }

      try {
        state.user?.get<string>('name');
      } catch (error) {
        log.warn(
          `Expected - state is sealed after the turn: ${(error as Error).message}`
        );
      }
    }, 2_000);

    await reply('Started completion demo. Check logs in about 2 seconds.');
    return;
  }

  if (command === 'reset counter') {
    state.conversation.clear();
    await reply('Cleared this conversation\'s state. The counter is back to zero.');
    return;
  }

  await reply('Send `help` to see the available state commands.');
});

app.start().catch(console.error);
