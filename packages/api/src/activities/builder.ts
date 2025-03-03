import { ActivityBaseBuilder } from './base';
import {
  MessageDeleteActivityBuilder,
  MessageReactionActivityBuilder,
  MessageSendActivityBuilder,
  MessageUpdateActivityBuilder,
} from './message';
import { TypingActivityBuilder } from './typing';

/**
 * A builder for an activity.
 */
export type ActivityBuilder =
  | MessageDeleteActivityBuilder
  | MessageReactionActivityBuilder
  | MessageSendActivityBuilder
  | MessageUpdateActivityBuilder
  | TypingActivityBuilder;

/**
 * @hidden
 * @internal
 */
export function isActivityBuilder(value: any): value is ActivityBuilder {
  return value instanceof ActivityBaseBuilder;
}
