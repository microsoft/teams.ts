import { MessageReactionType, $MessageActivity, MessageUser } from '@microsoft/spark.api';

// TODO: Add more?
// https://github.com/microsoft/spark.js/issues/88
export type MessageActionType = Exclude<$MessageActivity['type'], 'message'>;

export interface MessageActionUIPayload {
  id: string;
  type: MessageActionType;
  // Required for MessageReaction
  reactionType?: MessageReactionType;
  // Required for MessageUpdate
  user?: MessageUser;
  // Required for MessageUpdate
  eventType?: 'undeleteMessage' | 'editMessage';
}
