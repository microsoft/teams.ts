import { ActivityParams, AgenticIdentity, ConversationReference, SentActivity } from '@microsoft/teams.api';

import { IStreamer } from '../streamer';

export type ActivitySenderOptions = {
  readonly agenticIdentity?: AgenticIdentity;
};

/**
 * Interface for activity sending (NOT a plugin)
 * Separates sending concerns from transport concerns
 */
export interface IActivitySender {
  /**
   * Send an activity
   */
  send(activity: ActivityParams, ref: ConversationReference, options?: ActivitySenderOptions): Promise<SentActivity>;

  /**
   * Create a new activity stream
   */
  createStream(ref: ConversationReference): IStreamer;
}
