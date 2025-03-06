import { EventActivity } from './event';
import { InvokeActivity } from './invoke';
import { ConversationActivity } from './conversation';
import { MessageActivity } from './message';
import { CommandActivity } from './command';
import { InstallUpdateActivity } from './install-update';
import { ITraceActivity } from './trace';
import { ITypingActivity } from './typing';
import { IHandoffActivity } from './handoff';

export type Activity =
  | MessageActivity
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
export * from './builder';
