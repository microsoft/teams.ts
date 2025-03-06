import { ActivityBaseBuilder } from './activity';
import {
  MessageDeleteActivityBuilder,
  MessageReactionActivityBuilder,
  MessageActivityBuilder,
  MessageUpdateActivityBuilder,
} from './message';
import { TypingActivityBuilder } from './typing';

/**
 * A builder for an activity.
 */
export type ActivityBuilder =
  | MessageDeleteActivityBuilder
  | MessageReactionActivityBuilder
  | MessageActivityBuilder
  | MessageUpdateActivityBuilder
  | TypingActivityBuilder;

/**
 * @hidden
 * @internal
 */
export function isActivityBuilder(value: any): value is ActivityBuilder {
  return value instanceof ActivityBaseBuilder;
}
