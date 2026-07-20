import { ActivityParams, ConversationReference, DeprecatedInputActivity, RequestOptions, SentActivity } from '@microsoft/teams.api';

import { IStreamer } from '../streamer';

/**
 * Options for low-level activity sender operations.
 *
 * The sender always uses the service URL from the conversation reference. The
 * `serviceUrl` field is accepted for `RequestOptions` compatibility but is not
 * used by this low-level interface.
 */
export type ActivitySenderOptions = RequestOptions;

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
