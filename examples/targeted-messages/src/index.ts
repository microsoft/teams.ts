import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

const app = new App({
  logger: new ConsoleLogger('@examples/targeted-messages', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ send, reply, activity, api }) => {
  await reply({ type: 'typing' });

  const text = activity.text?.toLowerCase() || '';

  // ============================================
  // Test targeted SEND (create)
  // ============================================
  if (text.includes('test send')) {
    const targetedMessage = new MessageActivity(
      '🔒 [SEND] Targeted message - only YOU can see this!'
    ).withRecipient(activity.from, true);

    const result = await send(targetedMessage);
    console.log('Targeted SEND result:', result);
    return;
  }

  // ============================================
  // Test targeted REPLY
  // ============================================
  if (text.includes('test reply')) {
    const targetedReply = new MessageActivity(
      '🔒 [REPLY] Targeted reply - only YOU can see this!'
    ).withRecipient(activity.from, true);

    const result = await reply(targetedReply);
    console.log('Targeted REPLY result:', result);
    return;
  }

  // ============================================
  // Test targeted UPDATE
  // ============================================
  if (text.includes('test update')) {
    // First send a targeted message
    const targetedMessage = new MessageActivity(
      '🔒 [UPDATE] Original targeted message...'
    ).withRecipient(activity.from, true);

    const result = await send(targetedMessage);
    console.log('Initial targeted message ID:', result.id);

    // Wait then update
    setTimeout(async () => {
      try {
        // For updates, we just set isTargeted but don't change the recipient
        // The backend doesn't allow changing the recipient of a targeted message
        const updatedMessage = new MessageActivity(
          '🔒 [UPDATE] ✅ UPDATED targeted message! (only you see this)'
        );
        updatedMessage.id = result.id;
        updatedMessage.isTargeted = true; // Mark as targeted for the API URL

        await send(updatedMessage);
        console.log('Targeted UPDATE completed');
      } catch (err: any) {
        console.error('Targeted UPDATE error:', err?.response?.data || err?.message || err);
      }
    }, 3000);
    return;
  }

  // ============================================
  // Test targeted DELETE
  // ============================================
  if (text.includes('test delete')) {
    // First send a targeted message
    const targetedMessage = new MessageActivity(
      '🔒 [DELETE] This targeted message will be DELETED in 5 seconds...'
    ).withRecipient(activity.from, true);

    const result = await send(targetedMessage);
    console.log('Targeted message to delete, ID:', result.id);

    // Wait then delete using the targeted API
    setTimeout(async () => {
      try {
        await api.conversations
          .activities(activity.conversation.id)
          .deleteTargeted(result.id);
        console.log('Targeted DELETE completed');
      } catch (err: any) {
        console.error('Targeted DELETE error:', err?.response?.data || err?.message || err);
      }
    }, 5000);
    return;
  }

  // ============================================
  // Help / Default
  // ============================================
  if (text.includes('help')) {
    await reply(
      '**Targeted Messages Test Bot**\n\n' +
      '**Commands:**\n' +
      '- `test send` - Send a targeted message\n' +
      '- `test reply` - Reply with a targeted message\n' +
      '- `test update` - Send then update a targeted message\n' +
      '- `test delete` - Send then delete a targeted message\n\n' +
      '💡 *Test in a group chat to verify others don\'t see targeted messages!*'
    );
    return;
  }

  // Default
  await reply('Say "help" for available commands.');
});

app.on('install.add', async ({ send }) => {
  await send(
    '👋 Hi! I demonstrate targeted messages.\n\n' +
    'Say **help** to see available commands.'
  );
});

app.start().catch(console.error);
