import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

const app = new App({
  logger: new ConsoleLogger('@examples/quoted-replies', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ send, reply, quoteReply, activity }) => {
  await reply({ type: 'typing' });

  const text = activity.text?.toLowerCase() || '';

  // ============================================
  // Read inbound quoted replies
  // ============================================
  const quotes = activity.getQuotedMessages();
  if (quotes.length > 0) {
    const quote = quotes[0].quotedReply;
    const info = [
      `Quoted message ID: ${quote.messageId}`,
      quote.senderName ? `From: ${quote.senderName}` : null,
      quote.preview ? `Preview: "${quote.preview}"` : null,
      quote.isReplyDeleted ? '(deleted)' : null,
      quote.validatedMessageReference ? '(validated)' : null,
    ].filter(Boolean).join('\n');

    await send(`You sent a message with a quoted reply:\n\n${info}`);
  }

  // ============================================
  // reply() — auto-quotes the inbound message
  // ============================================
  if (text.includes('test reply')) {
    await reply('This reply auto-quotes your message using reply()');
    return;
  }

  // ============================================
  // quoteReply() — quote a previously sent message by ID
  // ============================================
  if (text.includes('test quote')) {
    const sent = await send('This message will be quoted next...');
    await quoteReply(sent.id, 'This quotes the message above using quoteReply()');
    return;
  }

  // ============================================
  // addQuotedReply() — builder with response
  // ============================================
  if (text.includes('test add')) {
    const sent = await send('This message will be quoted next...');
    const msg = new MessageActivity()
      .addQuotedReply(sent.id, 'This uses addQuotedReply() with a response');
    await send(msg);
    return;
  }

  // ============================================
  // Multi-quote interleaved
  // ============================================
  if (text.includes('test multi')) {
    const sentA = await send('Message A — will be quoted');
    const sentB = await send('Message B — will be quoted');
    const msg = new MessageActivity()
      .addQuotedReply(sentA.id, 'Response to A')
      .addQuotedReply(sentB.id, 'Response to B');
    await send(msg);
    return;
  }

  // ============================================
  // addQuotedReply() + addText() — manual control
  // ============================================
  if (text.includes('test manual')) {
    const sent = await send('This message will be quoted next...');
    const msg = new MessageActivity()
      .addQuotedReply(sent.id)
      .addText(' Custom text after the quote placeholder');
    await send(msg);
    return;
  }

  // ============================================
  // Help / Default
  // ============================================
  if (text.includes('help')) {
    await reply(
      '**Quoted Replies Test Bot**\n\n' +
      '**Commands:**\n' +
      '- `test reply` - reply() auto-quotes your message\n' +
      '- `test quote` - quoteReply() quotes a previously sent message\n' +
      '- `test add` - addQuotedReply() builder with response\n' +
      '- `test multi` - Multi-quote interleaved (quotes two separate messages)\n' +
      '- `test manual` - addQuotedReply() + addText() manual control\n\n' +
      'Quote any message to me to see the parsed metadata!'
    );
    return;
  }

  await reply('Say "help" for available commands.');
});

app.on('install.add', async ({ send }) => {
  await send(
    'Hi! I demonstrate quoted replies.\n\n' +
    'Say **help** to see available commands.'
  );
});

app.start().catch(console.error);
