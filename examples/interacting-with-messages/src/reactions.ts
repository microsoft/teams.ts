import { Activity, Client, MessageReactionActivity } from '@microsoft/teams.api';
import { App, IActivityContext } from '@microsoft/teams.apps';

type MessageContext = IActivityContext<Extract<Activity, { type: 'message' }>>;
type ReactionParameter = Parameters<Client['conversations']['addReaction']>[2];

/**
 * Handles the command that adds a reaction to the inbound message.
 * @returns Whether the command matched.
 */
export async function handleAddReaction(
  context: MessageContext,
  text: string
): Promise<boolean> {
  const addMatch = text.match(/^reaction add\s+(\S+)$/);
  if (!addMatch) {
    return false;
  }

  const reactionType = addMatch[1] as ReactionParameter;
  try {
    await context.api.conversations.addReaction(
      context.activity.conversation.id,
      context.activity.id,
      reactionType
    );
    await context.send(`Added a ${reactionType} reaction to your message!`);
    context.log.info(`Added ${reactionType} reaction to message ${context.activity.id}`);
  } catch (error) {
    context.log.error('Failed to add reaction:', error);
    await context.send('Sorry, I had trouble adding that reaction.');
  }
  return true;
}

/**
 * Handles the command that adds, then removes, a reaction from the inbound message.
 * @returns Whether the command matched.
 */
export async function handleRemoveReaction(
  context: MessageContext,
  text: string
): Promise<boolean> {
  const removeMatch = text.match(/^reaction remove\s+(\S+)$/);
  if (!removeMatch) {
    return false;
  }

  const reactionType = removeMatch[1] as ReactionParameter;
  try {
    await context.api.conversations.addReaction(
      context.activity.conversation.id,
      context.activity.id,
      reactionType
    );
    await context.send(`Added a ${reactionType} reaction, removing in 2s...`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await context.api.conversations.deleteReaction(
      context.activity.conversation.id,
      context.activity.id,
      reactionType
    );
    context.log.info(`Cycled ${reactionType} reaction on message ${context.activity.id}`);
  } catch (error) {
    context.log.error('Failed to cycle reaction:', error);
    await context.send('Sorry, I had trouble cycling that reaction.');
  }
  return true;
}

/**
 * Handles the command that sends a bot message and reacts to it using app-level APIs.
 * @returns Whether the command matched.
 */
export async function handleProactiveReaction(
  app: App,
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'reaction proactive') {
    return false;
  }

  const sent = await app.send(
    context.ref.conversation.id,
    'This message was sent and reacted to using app-level APIs.'
  );
  const api = app.api.clone({ serviceUrl: context.ref.serviceUrl });
  await api.conversations.addReaction(
    context.activity.conversation.id,
    sent.id,
    'like'
  );
  return true;
}

/**
 * Registers handlers for reactions users add to or remove from bot messages.
 */
export function registerReactionEvents(app: App): void {
  app.on('messageReaction', async ({ activity, send, log }) => {
    const reactionActivity = activity as MessageReactionActivity;

    for (const reaction of reactionActivity.reactionsAdded || []) {
      const userName = reaction.user?.displayName || 'Someone';
      log.info(`${userName} added a ${reaction.type} reaction`);
      await send(`Thanks for the ${reaction.type} reaction, ${userName}!`);
    }

    for (const reaction of reactionActivity.reactionsRemoved || []) {
      const userName = reaction.user?.displayName || 'Someone';
      log.info(`${userName} removed a ${reaction.type} reaction`);
    }
  });
}
