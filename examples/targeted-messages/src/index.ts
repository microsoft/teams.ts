import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

const app = new App({
  logger: new ConsoleLogger('@examples/targeted-messages', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ send, activity, api }) => {
  const text = activity.text?.toLowerCase() || '';

  if (text.includes('test update')) {
    const conversationId = activity.conversation?.id ?? '';
    const result = await send(
      new MessageActivity('📝 This message will be **updated** in 3 seconds...')
        .withRecipient(activity.from, true)
    );

    setTimeout(async () => {
      try {
        const updatedMessage = new MessageActivity(
          `✏️ **Updated!** This message was modified at ${new Date().toISOString().slice(11, 19)}`
        );
        await api.conversations
          .activities(conversationId)
          .updateTargeted(result.id, updatedMessage);
      } catch (err: any) {
        console.error('[UPDATE] Error:', err?.message || err);
      }
    }, 3000);
  } else if (text.includes('test delete')) {
    const conversationId = activity.conversation?.id ?? '';
    const result = await send(
      new MessageActivity('🗑️ This message will be **deleted** in 3 seconds...')
        .withRecipient(activity.from, true)
    );

    setTimeout(async () => {
      try {
        await api.conversations
          .activities(conversationId)
          .deleteTargeted(result.id);
      } catch (err: any) {
        console.error('[DELETE] Error:', err?.message || err);
      }
    }, 3000);
  } else if (text.includes('test public')) {
    await send(
      new MessageActivity('📋 Here is the public result — everyone can see this!')
    );
  } else if (text.includes('test send')) {
    await send(
      new MessageActivity('👋 This is a **targeted message** — only YOU can see this!')
        .withRecipient(activity.from, true)
    );
  } else if (text.includes('help')) {
    await send(
      '**🎯 Targeted Messages Demo**\n\n' +
      '**Commands:**\n' +
      '- `test send` - Send a targeted message (only visible to you)\n' +
      '- `test update` - Send a targeted message, then update it after 3 seconds\n' +
      '- `test delete` - Send a targeted message, then delete it after 3 seconds\n' +
      '- `test public` - Send a public reply (visible to all)\n\n' +
      '_Targeted messages are only visible to you, even in group chats!_'
    );
  } else {
    await send(`You said: '${activity.text}'\n\nType \`help\` to see available commands.`);
  }
});

app.start().catch(console.error);
