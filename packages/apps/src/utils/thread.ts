/**
 * Constructs a threaded conversation ID by appending `;messageid={messageId}`
 * to the conversation ID.
 *
 * @param conversationId the conversation to thread into (e.g. `19:abc@thread.skype`)
 * @param messageId the thread root message ID (must be a non-zero numeric string)
 * @returns the threaded conversation ID (e.g. `19:abc@thread.skype;messageid=123`)
 * @deprecated Thread placement is endpoint-based, and this function will be removed in a future release. Use `App.reply()` with the chat or channel id and the reply chain id from the inbound channelData instead.
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
