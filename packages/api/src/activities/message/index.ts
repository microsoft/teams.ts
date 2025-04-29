import { IMessageActivity } from './message';
import { IMessageDeleteActivity } from './message-delete';
import { IMessageReactionActivity } from './message-reaction';
import { IMessageUpdateActivity } from './message-update';

export type $MessageActivity =
  | IMessageActivity
  | IMessageUpdateActivity
  | IMessageDeleteActivity
  | IMessageReactionActivity;

export * from './message-delete';
export * from './message';
export * from './message-update';
export * from './message-reaction';
