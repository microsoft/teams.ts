import { MessageReactionType, $MessageActivity, MessageUser } from '@microsoft/teams.api';

export type MessageActionType = Exclude<$MessageActivity['type'], 'message'>;
// TODO: Add more?
// https://github.com/microsoft/teams.ts/issues/88

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
