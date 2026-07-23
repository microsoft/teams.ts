import { ActivityParams, AgenticUser, ConversationReference, DeprecatedInputActivity, SentActivity } from '@microsoft/teams.api';

import { IStreamer } from '../streamer';

/**
 * Options for low-level activity sender operations.
 */
export type ActivitySenderOptions = {
  /**
   * Agentic User identity to use when acquiring tokens for this send.
   */
  readonly agenticUser?: AgenticUser;
};

/**
 * Interface for activity sending (NOT a plugin)
 * Separates sending concerns from transport concerns
 */
export interface IActivitySender {
  /**
   * Send an activity
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  send(activity: DeprecatedInputActivity, ref: ConversationReference, options?: ActivitySenderOptions): Promise<SentActivity>;
  /**
   * Send an activity
   */
  send(activity: ActivityParams, ref: ConversationReference, options?: ActivitySenderOptions): Promise<SentActivity>;
  send(activity: ActivityParams | DeprecatedInputActivity, ref: ConversationReference, options?: ActivitySenderOptions): Promise<SentActivity>;

  /**
   * Create a new activity stream
   */
  createStream(ref: ConversationReference): IStreamer;
}
