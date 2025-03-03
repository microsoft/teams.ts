import { MessageDeleteActivity } from './message-delete';
import { MessageReactionActivity } from './message-reaction';
import { MessageSendActivity } from './message-send';
import { MessageUpdateActivity } from './message-update';

export type MessageActivity =
  | MessageSendActivity
  | MessageUpdateActivity
  | MessageDeleteActivity
  | MessageReactionActivity;

export * from './message-delete';
export * from './message-send';
export * from './message-update';
export * from './message-reaction';
