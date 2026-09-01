import { Activity, MessageActivityInput } from '@microsoft/teams.api';
import { App, IActivityContext } from '@microsoft/teams.apps';

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

  await context.send(
    new MessageActivityInput('This is a threaded reply to your message.')
      .prependQuote(context.activity.id)
  );
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

function getThreadReference(context: MessageContext): {
  conversationId: string;
  threadRootId: string;
} {
  const conversationId = context.ref.conversation.id;
  const legacyThreadRootId = conversationId.split(';messageid=')[1];
  const threadRootId = context.activity.channelData?.thread?.id
    ?? legacyThreadRootId
    ?? context.activity.id;
  return { conversationId, threadRootId };
}
