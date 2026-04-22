import { App, toThreadedConversationId } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

const app = new App({
  logger: new ConsoleLogger('@examples/threading', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ reply, send, activity, ref }) => {
  await reply({ type: 'typing' });

  const text = activity.text?.toLowerCase() || '';
  const conversationId = ref.conversation.id;
  const messageId = activity.id!;

  // When inside a thread, conversationId contains ;messageid=<rootId>.
  // Extract the root ID for threading; for top-level messages, use activity.id.
  const threadParts = conversationId.split(';messageid=');
  const threadRootId = threadParts.length > 1 ? threadParts[1] : messageId;

  // ============================================
  // context.reply() — reactive threaded reply
  // ============================================
  if (text.includes('test reply')) {
    await reply('This is a threaded reply to your message.');
    return;
  }

  // ============================================
  // context.send() — reactive send to same thread
  // ============================================
  if (text.includes('test send')) {
    await send('This is sent to the same thread, without quoting.');
    return;
  }

  // ============================================
  // app.reply() — proactive threaded reply
  // ============================================
  if (text.includes('test proactive')) {
    await app.reply(conversationId, threadRootId, 'This is a proactive threaded reply using app.reply().');
    return;
  }

  // ============================================
  // toThreadedConversationId() + app.send() — advanced manual control
  // ============================================
  if (text.includes('test manual')) {
    const threadId = toThreadedConversationId(conversationId, threadRootId);
    await app.send(threadId, 'This was sent using toThreadedConversationId() + app.send() for manual control.');
    return;
  }

  // ============================================
  // Help / Default
  // ============================================
  if (text.includes('help')) {
    await reply(
      '**Threading Test Bot**\n\n' +
      '**Commands:**\n' +
      '- `test reply` - context.reply() reactive threaded reply\n' +
      '- `test send` - context.send() to same thread without quoting\n' +
      '- `test proactive` - app.reply() proactive threaded reply\n' +
      '- `test manual` - toThreadedConversationId() + app.send() for advanced control'
    );
    return;
  }

  await send('Say "help" for available commands.');
});

app.start().catch(console.error);
