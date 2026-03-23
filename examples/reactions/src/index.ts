import { Client, MessageReactionActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common/logging';

const app = new App({
  logger: new ConsoleLogger('@examples/reactions', { level: 'debug' })
});

// Store the service URL and conversation reference to use with ReactionClient

type ReactionParameter = Parameters<Client['reactions']['add']>[2];

// Handle incoming messages
app.on('message', async ({ reply, activity, log, api }) => {
  // Save the service URL from the first message

  const userMessage = activity.text?.toLowerCase() || '';

  if (userMessage.includes('help')) {
    await reply({
      type: 'message',
      text: '**Reactions Bot Help**\n\n' +
        'I demonstrate how to use the ReactionClient API!\n\n' +
        '**Commands:**\n' +
        '- Type "add [reaction]" - I\'ll add that reaction to your message\n' +
        '- Type "remove [reaction]" - I\'ll remove a reaction from your message\n' +
        '- Add any reaction to my messages and I\'ll tell you about it!',
    });
    return;
  }

  // Handle commands to add reactions
  const addMatch = userMessage.match(/add\s+(\S+)/);
  if (addMatch && api) {
    const reactionType = addMatch[1] as ReactionParameter;
    try {
      await api.reactions.add(
        activity.conversation.id,
        activity.id,
        reactionType
      );
      await reply(`Added a ${reactionType} reaction to your message!`);
      log.info(`Added ${reactionType} reaction to message ${activity.id}`);
    } catch (error) {
      log.error('Failed to add reaction:', error);
      await reply('Sorry, I had trouble adding that reaction.');
    }
    return;
  }

  // Handle commands to remove reactions
  const removeMatch = userMessage.match(/remove\s+(\S+)/);
  if (removeMatch && api) {
    const reactionType = removeMatch[1] as ReactionParameter;
    try {
      await api.reactions.remove(
        activity.conversation.id,
        activity.id,
        reactionType
      );
      await reply(`Removed the ${reactionType} reaction from your message!`);
      log.info(`Removed ${reactionType} reaction from message ${activity.id}`);
    } catch (error) {
      log.error('Failed to remove reaction:', error);
      await reply('Sorry, I had trouble removing that reaction.');
    }
    return;
  }

  // Default response
  await reply({
    type: 'message',
    text: `You said: "${activity.text}"\n\nType "help" to see what I can do!`,
  });
});

// Handle reaction events
app.on('messageReaction', async ({ activity, send, log }) => {
  const reactionActivity = activity as MessageReactionActivity;

  // Log added reactions
  if (reactionActivity.reactionsAdded && reactionActivity.reactionsAdded.length > 0) {
    for (const reaction of reactionActivity.reactionsAdded) {
      const userName = reaction.user?.displayName || 'Someone';
      const reactionEmoji = reaction.type;
      log.info(`${userName} added a ${reaction.type} reaction (${reactionEmoji})`);

      // Send a message acknowledging the reaction
      await send(
        `Thanks for the ${reactionEmoji} reaction, ${userName}!`
      );
    }
  }

  // Log removed reactions
  if (reactionActivity.reactionsRemoved && reactionActivity.reactionsRemoved.length > 0) {
    for (const reaction of reactionActivity.reactionsRemoved) {
      const userName = reaction.user?.displayName || 'Someone';
      const reactionEmoji = reaction.type;
      log.info(`${userName} removed a ${reaction.type} reaction (${reactionEmoji})`);
    }
  }
});

// Welcome message on installation
app.on('install.add', async ({ send }) => {
  await send({
    type: 'message',
    text: '👋 **Welcome to the Reactions Bot!**\n\n' +
      'I demonstrate how to use the ReactionClient to manage message reactions.\n\n' +
      'Type "help" to see what I can do!',
  });
});

app.start().catch(console.error);
