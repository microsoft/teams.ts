import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

const app = new App({
  logger: new ConsoleLogger('@examples/targeted-messages', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ send, activity, api, log }) => {
  const text = activity.text?.toLowerCase() || '';

  log.info(`[MESSAGE] Received: ${text}`);

  if (text.includes('update')) {
    const conversationId = activity.conversation?.id ?? '';
    const result = await send(
      new MessageActivity('🔒 Original targeted message - updating in 3s...')
        .withRecipient(activity.from, true)
    );
    log.info(`[UPDATE] Sent targeted message: ${result.id}`);

    setTimeout(async () => {
      try {
        await api.conversations
          .activities(conversationId)
          .updateTargeted(result.id, new MessageActivity('🔒 ✅ UPDATED targeted message!'));
        log.info('[UPDATE] Updated successfully');
      } catch (err: any) {
        log.error('[UPDATE] Error:', err?.message || err);
      }
    }, 3000);
  } else if (text.includes('delete')) {
    const conversationId = activity.conversation?.id ?? '';
    const result = await send(
      new MessageActivity('🔒 This targeted message will be deleted in 3s...')
        .withRecipient(activity.from, true)
    );
    log.info(`[DELETE] Sent targeted message: ${result.id}`);

    setTimeout(async () => {
      try {
        await api.conversations
          .activities(conversationId)
          .deleteTargeted(result.id);
        log.info('[DELETE] Deleted successfully');
      } catch (err: any) {
        log.error('[DELETE] Error:', err?.message || err);
      }
    }, 3000);
  } else if (text.includes('public')) {
    // Public message — everyone in the chat sees the reply.
    await send(
      new MessageActivity('📋 Here is the public result - everyone can see this!')
    );
    log.info('[PUBLIC] Sent public message');
  } else if (text.includes('send')) {
    // Targeted message — the SDK auto-populates the targetedMessageInfo entity.
    await send(
      new MessageActivity('👋 This is a **targeted message** - only YOU can see this!')
        .withRecipient(activity.from, true)
    );
    log.info('[SEND] Sent targeted message');
  } else if (text.includes('help')) {
    await send(
      '**🎯 Targeted Messages Demo**\n\n' +
      '**Commands:**\n' +
      '- `send` - Send a targeted message (only you see it)\n' +
      '- `update` - Send a targeted message, then update it after 3 seconds\n' +
      '- `delete` - Send a targeted message, then delete it after 3 seconds\n' +
      '- `public` - Send a public message (visible to all)\n\n' +
      '_Targeted messages are only visible to you, even in group chats!_'
    );
  } else {
    await send('Say **help** for available commands.');
  }
});

app.start().catch(console.error);
