import { stripMentionsText } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

import {
  handleQuoteBatch,
  handleQuotedMessage,
  handleQuoteMessage,
  handleQuoteReply,
} from './quoting';
import {
  handleAddReaction,
  handleProactiveReaction,
  handleRemoveReaction,
  registerReactionEvents,
} from './reactions';
import {
  handleDefaultSend,
  handleProactiveTargetedThread,
  handleProactiveTargetedThreadQuote,
  handleProactiveThread,
  handleProactiveThreadQuote,
} from './threading';

const app = new App({
  logger: new ConsoleLogger('@examples/interacting-with-messages', { level: 'debug' }),
});

app.on('message', async (context) => {
  await context.send({ type: 'typing' });

  const text = stripMentionsText(context.activity)?.toLowerCase() || '';

  if (text === 'help') {
    await context.send(
      '**Interacting with Messages**\n\n' +
      '**Quoting:**\n' +
      '- `quote reply` - quote your incoming message\n' +
      '- `quote message` - quote a previously sent message\n' +
      '- `quote batch` - combine multiple quotes\n\n' +
      '**Threading:**\n' +
      '- `default send` - send to the same thread without quoting\n' +
      '- `thread proactive` - send a proactive threaded reply\n' +
      '- `thread proactive quote` - send a quoted proactive threaded reply\n' +
      '- `thread proactive targeted` - send a proactive targeted threaded reply\n' +
      '- `thread proactive targeted quote` - send a quoted proactive targeted threaded reply\n' +
      '\n' +
      '**Reactions:**\n' +
      '- `reaction add <type>` - add a reaction to your message\n' +
      '- `reaction remove <type>` - add, then remove, a reaction\n' +
      '- `reaction proactive` - send a bot message and react to it using app-level APIs\n\n' +
      'Quote or react to one of my messages to see the corresponding inbound event.'
    );
    return;
  }

  const handledQuotedMessage = await handleQuotedMessage(context);

  if (await handleQuoteReply(context, text)) {
    return;
  }

  if (await handleQuoteMessage(context, text)) {
    return;
  }

  if (await handleQuoteBatch(context, text)) {
    return;
  }

  if (await handleDefaultSend(context, text)) {
    return;
  }

  if (await handleProactiveThread(app, context, text)) {
    return;
  }

  if (await handleProactiveThreadQuote(app, context, text)) {
    return;
  }

  if (await handleProactiveTargetedThread(app, context, text)) {
    return;
  }

  if (await handleProactiveTargetedThreadQuote(app, context, text)) {
    return;
  }

  if (await handleAddReaction(context, text)) {
    return;
  }

  if (await handleRemoveReaction(context, text)) {
    return;
  }

  if (await handleProactiveReaction(app, context, text)) {
    return;
  }

  if (handledQuotedMessage) {
    return;
  }

  await context.send('Say "help" for available commands.');
});

registerReactionEvents(app);

app.on('install.add', async ({ send }) => {
  await send(
    'Hi! I demonstrate quoting, threading, and reactions.\n\n' +
    'Say **help** to see available commands.'
  );
});

app.start().catch(console.error);
