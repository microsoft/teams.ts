import { Activity, getAgenticIdentity } from '@microsoft/teams.api';
import { App, IActivityContext, ReplyMode } from '@microsoft/teams.apps';

type MessageContext = IActivityContext<Extract<Activity, { type: 'message' }>>;

const REPLY_COMMANDS = new Map<string, { replyMode?: ReplyMode; text: string }>([
  ['thread reply', {
    text: 'This reply uses the default reply mode, `combined`. In a chat it starts a thread under your top-level message, or stays in your thread, and quotes your message.',
  }],
  ['thread reply unquoted', {
    replyMode: 'thread',
    text: 'This reply uses `replyMode: \'thread\'`. It lands in a thread like `combined`, without a quote.',
  }],
]);

/**
 * Handles the commands that reply to the inbound message in a thread.
 * `thread reply` uses the app's reply mode, `combined` by default: in a chat, a reply to a top-level message starts a thread under it, a reply inside a thread stays in that thread, and the inbound message is quoted.
 * `thread reply unquoted` passes `{ replyMode: 'thread' }`: the same placement, without the quote.
 * The `quote` mode is shown by the `quote reply` command.
 * In a channel every reply goes in the thread of the inbound message, so the mode only decides the quote.
 * The app-wide default is set with `new App({ activity: { replyMode } })`.
 * @returns Whether the command matched.
 */
export async function handleThreadReply(
  context: MessageContext,
  text: string
): Promise<boolean> {
  const command = REPLY_COMMANDS.get(text);
  if (!command) {
    return false;
  }

  await context.reply(command.text, { replyMode: command.replyMode });
  return true;
}

/**
 * Handles the command that sends reactively without quoting.
 * In a channel, the message is sent in the same thread.
 * In a chat, it matches the level of the inbound message: in the thread when the inbound message is in one, otherwise at top level.
 * In a chat, unlike `reply`, `send` never starts a new thread.
 * @returns Whether the command matched.
 */
export async function handleThreadSend(
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'thread send') {
    return false;
  }

  await context.send('This is sent without quoting. In a channel it goes in the same thread. In a chat it matches the level of your message.');
  return true;
}

/**
 * Handles the command that sends a proactive reply in the reply chain (thread) of the inbound message.
 * The reply chain is taken from `channelData.replyChain.id`.
 * A proactive send runs without the inbound activity, so an agentic user must be named explicitly.
 * `getAgenticIdentity` returns undefined when the inbound recipient is not an agentic user.
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

  const { conversationId, replyChainId } = getThreadReference(context);
  if (!conversationId || !replyChainId) {
    await context.send(INSUFFICIENT_METADATA);
    return true;
  }

  await app.reply(
    conversationId,
    replyChainId,
    'This is a proactive reply in a thread, using `app.reply()`.',
    { agenticIdentity: getAgenticIdentity(context.activity.recipient) }
  );
  return true;
}

/**
 * Handles the command that sends a new top-level message to the chat or channel, outside any reply chain (thread).
 * @returns Whether the command matched.
 */
export async function handleTopLevelThread(
  app: App,
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'thread top-level') {
    return false;
  }

  const { conversationId } = getThreadReference(context);
  if (!conversationId) {
    await context.send(INSUFFICIENT_METADATA);
    return true;
  }

  await app.send(
    conversationId,
    'This is a new top-level message, sent with `app.send()` to the id of the chat or channel.',
    { agenticIdentity: getAgenticIdentity(context.activity.recipient) }
  );
  return true;
}

const INSUFFICIENT_METADATA =
  'Not enough thread metadata on this message for the sample to address a thread: it reads `channelData.chat.id` or `channelData.channel.id` for the conversation id and `channelData.replyChain.id` for the root.';

/**
 * The ids come from the payload.
 * `chat.id` identifies the chat and `channel.id` the channel.
 * `replyChain.id` is the root of the reply chain (thread).
 * A top-level post in a channel carries a `replyChain.id` equal to its own id.
 * A payload without `replyChain.id` does not establish a root, so the sample does not infer one from the channel or the activity id.
 * An id the payload does not carry is left undefined.
 */
function getThreadReference(context: MessageContext): {
  conversationId?: string;
  replyChainId?: string;
} {
  const channelData = context.activity.channelData;
  return {
    conversationId: channelData?.chat?.id ?? channelData?.channel?.id,
    replyChainId: channelData?.replyChain?.id,
  };
}
