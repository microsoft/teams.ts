import { MessageUser } from './message-user';

/**
 * Defines values for ReactionType.
 * Possible values include: 'like', 'heart', '1f440_eyes', '2705_whiteheavycheckmark', 'launch', '1f4cc_pushpin'
 *
 * @readonly
 * @enum {string}
 */
export type MessageReactionType = 'like' | 'heart' | '1f440_eyes' | '2705_whiteheavycheckmark' | 'launch' | '1f4cc_pushpin' | (string & {});
 

export type MessageReaction = {
  /**
   * @member {ReactionType} [reactionType] The type of reaction given to the
   * message. Possible values include: 'like', 'heart', 'laugh', 'surprised',
   * 'sad', 'angry', 'plusOne'
   */
  type: MessageReactionType;

  /**
   * @member {string} [createdDateTime] Timestamp of when the user reacted to
   * the message.
   */
  createdDateTime?: string;

  /**
   * @member {MessageActionsPayloadFrom} [user] The user with which the
   * reaction is associated.
   */
  user?: MessageUser;
};
