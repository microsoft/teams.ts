import { MessageUser } from './message-user';

/**
 * The type of emoji reaction that can be applied to a message.
 * Possible values include: 'like', 'heart', '1f440_eyes', '2705_whiteheavycheckmark', 'launch', '1f4cc_pushpin'
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsReactions
 */
export type MessageReactionType = 'like' | 'heart' | '1f440_eyes' | '2705_whiteheavycheckmark' | 'launch' | '1f4cc_pushpin' | (string & {});


/**
 * Represents a reaction on a message, including the reaction type, timestamp, and user.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsReactions
 */
export type MessageReaction = {
  /** The emoji reaction type applied to the message. */
  type: MessageReactionType;

  /** Timestamp of when the user reacted to the message. */
  createdDateTime?: string;

  /** The user who applied the reaction. */
  user?: MessageUser;
};
