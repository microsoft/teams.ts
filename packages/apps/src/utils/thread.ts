/**
 * Constructs a threaded conversation ID by appending `;messageid={messageId}`
 * to the conversation ID.
 *
 * In a channel, sending to the result posts a thread reply to the message `messageId`.
 * `App.reply()` does not use this form: it posts through the `replyChains` endpoint and throws when the service rejects it.
 *
 * @param conversationId the conversation to thread into (e.g. `19:abc@thread.skype`)
 * @param messageId the thread root message ID (must be a non-zero numeric string)
 * @returns the threaded conversation ID (e.g. `19:abc@thread.skype;messageid=123`)
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
