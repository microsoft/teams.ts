/**
 * Constructs a threaded conversation ID by appending `;messageid={messageId}`
 * to the conversation ID. This is the format APX uses to route messages
 * to a specific thread.
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

  // Strip any existing ;messageid= suffix (mirrors APX's NormalizeConversationId)
  const baseId = conversationId.split(';')[0];
  return `${baseId};messageid=${messageId}`;
}
