import { CommandActivity } from './command';
import { ConversationActivity } from './conversation';
import { EventActivity } from './event';
import { IHandoffActivity } from './handoff';
import { InstallUpdateActivity } from './install-update';
import { InvokeActivity } from './invoke';
import { $MessageActivity } from './message';
import { ITraceActivity } from './trace';
import { ITypingActivity } from './typing';

export type Activity =
  | $MessageActivity
  | EventActivity
  | InvokeActivity
  | ITraceActivity
  | ITypingActivity
  | IHandoffActivity
  | ConversationActivity
  | CommandActivity
  | InstallUpdateActivity;

export * from './message';
export * from './event';
export * from './invoke';
export * from './trace';
export * from './typing';
export * from './handoff';
export * from './conversation';
export * from './command';
export * from './install-update';
export * from './utils';
export { IActivity, Activity as $Activity } from './activity';
