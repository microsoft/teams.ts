import { MessageReactionType, $MessageActivity, MessageUser } from '@microsoft/spark.api';

export type MessageActionType = Exclude<$MessageActivity['type'], 'message'>;
// TODO: Add more?
// https://github.com/microsoft/spark.js/issues/88

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
