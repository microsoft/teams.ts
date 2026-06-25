import { ActivityParams, ConversationReference, RequestOptions, SentActivity } from '@microsoft/teams.api';

import { IStreamer } from '../streamer';

/**
 * Interface for activity sending (NOT a plugin)
 * Separates sending concerns from transport concerns
 */
export interface IActivitySender {
  /**
   * Send an activity
   */
  send(activity: ActivityParams, ref: ConversationReference, options?: RequestOptions): Promise<SentActivity>;

  /**
   * Create a new activity stream
   */
  createStream(ref: ConversationReference): IStreamer;
}
