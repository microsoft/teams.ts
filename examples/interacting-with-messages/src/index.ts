import { stripMentionsText } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

import {
  handleAddQuote,
  handleQuoteBatch,
  handleQuotedMessage,
  handleQuoteManual,
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
  handleManualThread,
  handleProactiveThread,
  handleThreadReply,
  handleThreadSend,
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
      '- `quote reply` - auto-quote your message\n' +
      '- `quote message` - quote a previously sent message\n' +
      '- `quote add` - compose a quote with the message builder\n' +
      '- `quote batch` - combine multiple quotes\n' +
      '- `quote manual` - combine a quote and text manually\n\n' +
      '**Threading:**\n' +
      '- `thread reply` - send a reactive threaded reply\n' +
      '- `thread send` - send to the same thread without quoting\n' +
      '- `thread proactive` - send a proactive threaded reply\n' +
      '- `thread manual` - use a legacy threaded conversation ID with `app.send()`\n' +
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

  if (await handleAddQuote(context, text)) {
    return;
  }

  if (await handleQuoteBatch(context, text)) {
    return;
  }

  if (await handleQuoteManual(context, text)) {
    return;
  }

  if (await handleThreadReply(context, text)) {
    return;
  }

  if (await handleThreadSend(context, text)) {
    return;
  }

  if (await handleProactiveThread(app, context, text)) {
    return;
  }

  if (await handleManualThread(app, context, text)) {
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
