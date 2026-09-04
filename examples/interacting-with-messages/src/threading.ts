import { Activity, MessageActivityInput } from '@microsoft/teams.api';
import { App, IActivityContext } from '@microsoft/teams.apps';

type MessageContext = IActivityContext<Extract<Activity, { type: 'message' }>>;

/**
 * Handles the command that sends to the current thread without quoting.
 * @returns Whether the command matched.
 */
export async function handleDefaultSend(
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'default send') {
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
 * Handles the command that sends a quoted proactive threaded reply.
 * @returns Whether the command matched.
 */
export async function handleProactiveThreadQuote(
  app: App,
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'thread proactive quote') {
    return false;
  }

  const { conversationId, threadRootId } = getThreadReference(context);
  await app.reply(
    conversationId,
    threadRootId,
    new MessageActivityInput(
      'This is explicitly placed in the thread and quotes your message.'
    ).prependQuote(context.activity.id)
  );
  return true;
}

/**
 * Handles the command that sends a proactive targeted threaded reply.
 * @returns Whether the command matched.
 */
export async function handleProactiveTargetedThread(
  app: App,
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'thread proactive targeted') {
    return false;
  }

  const { conversationId, threadRootId } = getThreadReference(context);
  await app.reply(
    conversationId,
    threadRootId,
    new MessageActivityInput(
      'This proactive targeted message uses the explicit reply endpoint.'
    ).withRecipient(context.activity.from, true)
  );
  return true;
}

/**
 * Handles the command that sends a quoted proactive targeted threaded reply.
 * @returns Whether the command matched.
 */
export async function handleProactiveTargetedThreadQuote(
  app: App,
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'thread proactive targeted quote') {
    return false;
  }

  const { conversationId, threadRootId } = getThreadReference(context);
  await app.reply(
    conversationId,
    threadRootId,
    new MessageActivityInput('This proactive targeted reply quotes your message.')
      .prependQuote(context.activity.id)
      .withRecipient(context.activity.from, true)
  );
  return true;
}

function getThreadReference(context: MessageContext): {
  conversationId: string;
  threadRootId: string;
} {
  const [conversationId, legacyThreadRootId] =
    context.ref.conversation.id.split(';messageid=');
  const threadRootId = context.activity.channelData?.thread?.id
    ?? legacyThreadRootId
    ?? context.activity.id;
  return { conversationId, threadRootId };
}
