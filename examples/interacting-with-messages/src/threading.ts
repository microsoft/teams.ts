import { Activity } from '@microsoft/teams.api';
import { App, IActivityContext, toThreadedConversationId } from '@microsoft/teams.apps';

type MessageContext = IActivityContext<Extract<Activity, { type: 'message' }>>;

/**
 * Handles the command that sends a reactive threaded reply.
 * @returns Whether the command matched.
 */
export async function handleThreadReply(
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'thread reply') {
    return false;
  }

  await context.reply('This is a threaded reply to your message.');
  return true;
}

/**
 * Handles the command that sends to the current thread without quoting.
 * @returns Whether the command matched.
 */
export async function handleThreadSend(
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'thread send') {
    return false;
  }

  await context.send('This is sent to the same thread, without quoting.');
  return true;
}

/**
 * Handles the command that sends a proactive threaded reply.
 * @returns Whether the command matched.
 */
export async function handleProactiveThread(
  app: App,
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'thread proactive') {
    return false;
  }

  const { conversationId, threadRootId } = getThreadReference(context);
  await app.reply(
    conversationId,
    threadRootId,
    'This is a proactive threaded reply using `app.reply()`.'
  );
  return true;
}

/**
 * Handles the command that manually constructs a threaded conversation ID.
 * @returns Whether the command matched.
 */
export async function handleManualThread(
  app: App,
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'thread manual') {
    return false;
  }

  const { conversationId, threadRootId } = getThreadReference(context);
  const threadId = toThreadedConversationId(conversationId, threadRootId);
  await app.send(
    threadId,
    'This was sent using `toThreadedConversationId()` + `app.send()` for manual control.'
  );
  return true;
}

function getThreadReference(context: MessageContext): {
  conversationId: string;
  threadRootId: string;
} {
  const conversationId = context.ref.conversation.id;
  const threadParts = conversationId.split(';messageid=');
  const threadRootId = threadParts.length > 1 ? threadParts[1] : context.activity.id;
  return { conversationId, threadRootId };
}
