import { Client, MessageReactionActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

const app = new App({
  logger: new ConsoleLogger('@examples/reactions', { level: 'debug' })
});

// Reaction verbs live on the conversation client: conversations.addReaction / deleteReaction

type ReactionParameter = Parameters<Client['conversations']['addReaction']>[2];

// Handle incoming messages
app.on('message', async ({ reply, activity, log, api }) => {
  // Save the service URL from the first message

  const userMessage = activity.text?.toLowerCase() || '';

  if (userMessage.includes('help')) {
    await reply({
      type: 'message',
      text: '**Reactions Bot Help**\n\n' +
        'I demonstrate how to use the reaction API!\n\n' +
        '**Commands:**\n' +
        '- Type "add [reaction]" - I\'ll add that reaction to your message\n' +
        '- Type "remove [reaction]" - I\'ll add that reaction and then remove it 2s later\n' +
        '- Add any reaction to my messages and I\'ll tell you about it!',
    });
    return;
  }

  // Handle commands to add reactions
  const addMatch = userMessage.match(/add\s+(\S+)/);
  if (addMatch && api) {
    const reactionType = addMatch[1] as ReactionParameter;
    try {
      await api.conversations.addReaction(
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

  // Handle commands to remove reactions. To make this demo-able on an
  // incoming message that doesn't already carry the reaction, we add it
  // first, then delete it after a short delay so the user sees the cycle.
  const removeMatch = userMessage.match(/remove\s+(\S+)/);
  if (removeMatch && api) {
    const reactionType = removeMatch[1] as ReactionParameter;
    try {
      await api.conversations.addReaction(
        activity.conversation.id,
        activity.id,
        reactionType
      );
      await reply(`Added a ${reactionType} reaction, removing in 2s...`);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await api.conversations.deleteReaction(
        activity.conversation.id,
        activity.id,
        reactionType
      );
      log.info(`Cycled ${reactionType} reaction on message ${activity.id}`);
    } catch (error) {
      log.error('Failed to cycle reaction:', error);
      await reply('Sorry, I had trouble cycling that reaction.');
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
      'I demonstrate how to use the reaction API to manage message reactions.\n\n' +
      'Type "help" to see what I can do!',
  });
});

app.start().catch(console.error);
