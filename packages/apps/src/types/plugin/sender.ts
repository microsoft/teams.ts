import { ActivityParams, ConversationReference, DeprecatedInputActivity, SentActivity } from '@microsoft/teams.api';

import { IStreamer } from '../streamer';

/**
 * Interface for activity sending (NOT a plugin)
 * Separates sending concerns from transport concerns
 */
export interface IActivitySender {
  /**
   * Send an activity
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  send(activity: DeprecatedInputActivity, ref: ConversationReference): Promise<SentActivity>;
  /**
   * Send an activity
   */
  send(activity: ActivityParams, ref: ConversationReference): Promise<SentActivity>;
  send(activity: ActivityParams | DeprecatedInputActivity, ref: ConversationReference): Promise<SentActivity>;

  /**
   * Create a new activity stream
   */
  createStream(ref: ConversationReference): IStreamer;
}
