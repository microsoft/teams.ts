import { ActivityParams, ConversationReference, SentActivity } from '@microsoft/teams.api';

import { IStreamer } from '../streamer';

/**
 * Interface for activity sending (NOT a plugin)
 * Separates sending concerns from transport concerns
 */
export interface IActivitySender {
  /**
   * Send an activity
   */
  send(activity: ActivityParams, ref: ConversationReference): Promise<SentActivity>;

  /**
   * Create a new activity stream
   */
  createStream(ref: ConversationReference): IStreamer;
}
