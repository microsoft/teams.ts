/**
 *
 * An interface representing EncryptedChatInfo.
 * The encrypted form of the id of a chat scope.
 *
 */
export type EncryptedChatInfo = {
  /**
   * @member {string} [id] The encrypted id of the chat scope
   */
  readonly id?: string;
};

/**
 *
 * An interface representing ChatInfo.
 * Identifies the chat scope that contains an inbound activity.
 *
 */
export type ChatInfo = {
  /**
   * @member {string} [id] The id of the chat scope, without any reply chain.
   * This is the unencrypted id, and it can differ from `conversation.id`.
   * It is not sent for channels, where `channelData.channel.id` plays this role.
   * Use it as the conversation id to send a top-level message to the chat scope, or to reply in a reply chain.
   */
  readonly id?: string;

  /**
   * @member {EncryptedChatInfo} [encrypted] The encrypted form of the chat scope's id.
   */
  readonly encrypted?: EncryptedChatInfo;
};
