/**
 *
 * An interface representing MessageActionsPayloadConversation.
 * Represents a team or channel entity.
 *
 */
export type MessageConversation = {
  /**
   * @member {ConversationIdentityType} [conversationIdentityType] The type of
   * conversation, whether a team or channel. Possible values include: 'team',
   * 'channel'
   */
  conversationIdentityType?: 'team' | 'channel';

  /**
   * @member {string} [id] The id of the team or channel.
   */
  id: string;

  /**
   * @member {string} [displayName] The plaintext display name of the team or
   * channel entity.
   */
  displayName?: string;
};
