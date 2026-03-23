import { ConversationReference, SentActivity } from '@microsoft/teams.api';

/**
 * the event emitted by a plugin
 * when an activity is sent
 */
export interface IActivitySentEvent extends ConversationReference {
  /**
   * the sent activity
   */
  activity: SentActivity;
}
