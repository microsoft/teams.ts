import { MessageActivityInput } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

const app = new App({
  logger: new ConsoleLogger('@examples/targeted-messages', { level: 'debug' }),
});

app.on('message', async ({ send, activity, api }) => {
  const text = activity.text?.toLowerCase() || '';

  if (text.includes('test update')) {
    const conversationId = activity.conversation?.id ?? '';
    const result = await send(
      new MessageActivityInput('📝 This message will be **updated** in 3 seconds...')
        .withRecipient(activity.from, true)
    );

    setTimeout(async () => {
      try {
        const updatedMessage = new MessageActivityInput(
          `✏️ **Updated!** This message was modified at ${new Date().toISOString().slice(11, 19)}`
        );
        await api.conversations.updateTargetedActivity(
          conversationId,
          result.id,
          updatedMessage
        );
      } catch (err: any) {
        console.error('[UPDATE] Error:', err?.message || err);
      }
    }, 3000);
  } else if (text.includes('test delete')) {
    const conversationId = activity.conversation?.id ?? '';
    const result = await send(
      new MessageActivityInput('🗑️ This message will be **deleted** in 3 seconds...')
        .withRecipient(activity.from, true)
    );

    setTimeout(async () => {
      try {
        await api.conversations.deleteTargetedActivity(conversationId, result.id);
      } catch (err: any) {
        console.error('[DELETE] Error:', err?.message || err);
      }
    }, 3000);
  } else if (text.includes('test public')) {
    await send(
      new MessageActivityInput('📋 Here is the public result — everyone can see this!')
    );
  } else if (text.includes('send public')) {
    const isTargeted = activity.recipient?.isTargeted === true;

    if (!isTargeted) {
      await send('Send it to me privately first!');
    } else {
      // Passing a recipient opts out of the auto-targeting default.
      await send(
        new MessageActivityInput('🌍 This is a **public message** — everyone can see this!')
          .withRecipient(activity.from)
      );
    }
  } else if (text.includes('test send')) {
    await send(
      new MessageActivityInput('👋 This is a **targeted message** — only YOU can see this!')
        .withRecipient(activity.from, true)
    );
  } else if (text.includes('send private')) {
    const isTargeted = activity.recipient?.isTargeted === true;

    if (!isTargeted) {
      await send('Send it to me privately first!');
    } else {
      await send(
        new MessageActivityInput('🔒 This is a **private message** — only YOU can see this!')
      );
    }
  } else if (text.includes('test inbound')) {
    // Detect whether the inbound message was itself targeted at the bot
    // (i.e. delivered as a slash command). Slash commands arrive as message
    // activities with `activity.recipient.isTargeted === true`.
    const wasTargeted = activity.recipient?.isTargeted === true;
    await send(
      wasTargeted
        ? '✅ Your message was delivered to me as a targeted message.'
        : 'ℹ️ Your message was delivered to me as a regular (broadcast) message.'
    );
  } else if (text.includes('help')) {
    await send(
      '**🎯 Targeted Messages Demo**\n\n' +
      '**Commands:**\n' +
      '- `test send` - Send a targeted message (only visible to you)\n' +
      '- `test update` - Send a targeted message, then update it after 3 seconds\n' +
      '- `test delete` - Send a targeted message, then delete it after 3 seconds\n' +
      '- `test public` - Send a public reply (visible to all)\n' +
      '- `send public` - Only send a public message if the incoming message is targeted\n' +
      '- `send private` - Only send a private message if the incoming message is targeted\n' +
      '- `test inbound` - Show whether the inbound message was targeted at the bot\n\n' +
      '_Targeted messages are only visible to you, even in group chats!_'
    );
  } else {
    await send(`You said: '${activity.text}'\n\nType \`help\` to see available commands.`);
  }
});

app.start().catch(console.error);
