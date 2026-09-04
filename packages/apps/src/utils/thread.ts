import type { IMessageActivity } from '@microsoft/teams.api';

/**
 * Constructs a threaded conversation ID by appending `;messageid={messageId}`
 * to the conversation ID.
 *
 * @param conversationId the conversation to thread into (e.g. `19:abc@thread.skype`)
 * @param messageId the thread root message ID (must be a non-zero numeric string)
 * @returns the threaded conversation ID (e.g. `19:abc@thread.skype;messageid=123`)
 * @deprecated Thread placement is endpoint-based. Use the base conversation ID with
 * `App.reply()` or `ConversationClient.replyToActivity()` instead.
 */
export function toThreadedConversationId(conversationId: string, messageId: string): string {
  if (!conversationId) {
    throw new Error('conversationId must be a non-empty string');
  }

  if (!messageId || !/^\d+$/.test(messageId) || messageId === '0') {
    throw new Error(
      `Invalid messageId "${messageId}": must be a non-zero numeric value`
    );
  }

  // Strip any existing ;messageid= suffix (mirrors the Teams service's conversation-ID normalization)
  const baseId = conversationId.split(';')[0];
  return `${baseId};messageid=${messageId}`;
}

/**
 * Parsed form of a valid legacy threaded conversation ID.
 * @internal
 */
export type LegacyThreadedConversation = {
  readonly conversationId: string;
  readonly threadRootId: string;
};

/**
 * Base conversation and root activity used for an explicit proactive threaded reply.
 */
export type ProactiveThreadReference = {
  /**
   * Base conversation ID without a valid legacy `;messageid=` suffix.
   */
  readonly conversationId: string;

  /**
   * Root activity ID that identifies the destination thread.
   */
  readonly threadRootId: string;
};

/**
 * Parses a valid legacy `;messageid=` conversation suffix.
 * @internal
 */
export function parseLegacyThreadedConversationId(
  conversationId: string
): LegacyThreadedConversation | undefined {
  const match = /^([^;]+);messageid=(\d+)$/.exec(conversationId);
  if (!match || !match[1] || match[2] === '0') {
    return undefined;
  }

  return {
    conversationId: match[1],
    threadRootId: match[2],
  };
}

/**
 * Resolve the explicit conversation and thread root for a proactive reply to an
 * inbound message.
 *
 * Typed `channelData.thread.id` metadata takes precedence over a valid legacy
 * `;messageid=` suffix. A root inbound message uses its activity ID as the
 * proactive thread root.
 *
 * @param activity Inbound message whose thread should receive the proactive reply.
 * @returns Base conversation ID and explicit thread root for `App.reply()`.
 */
export function getProactiveThreadReference(
  activity: IMessageActivity
): ProactiveThreadReference {
  const legacyThread = parseLegacyThreadedConversationId(activity.conversation.id);
  return {
    conversationId: legacyThread?.conversationId ?? activity.conversation.id,
    threadRootId: activity.channelData?.thread?.id
      ?? legacyThread?.threadRootId
      ?? activity.id,
  };
}

/**
 * Resolve the default thread root for a reactive send in an inbound message's
 * conversation scope.
 *
 * Typed `channelData.thread.id` metadata takes precedence over a valid legacy
 * `;messageid=` suffix. A channel root message uses its activity ID. Group-chat
 * and personal root messages return `undefined` so the send creates another root
 * message.
 *
 * @param activity Inbound message that establishes the reactive send scope.
 * @returns Thread root ID for reply placement, or `undefined` for root placement.
 */
export function getDefaultThreadId(
  activity: IMessageActivity
): string | undefined {
  const threadRootId = activity.channelData?.thread?.id;
  if (threadRootId) {
    return threadRootId;
  }

  const legacyThread = parseLegacyThreadedConversationId(activity.conversation.id);
  if (legacyThread) {
    return legacyThread.threadRootId;
  }

  return activity.conversation.conversationType === 'channel'
    ? activity.id
    : undefined;
}
