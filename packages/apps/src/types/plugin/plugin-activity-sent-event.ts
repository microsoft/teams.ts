import { ConversationReference, SentActivity } from '@microsoft/teams.api';

/**
 * the event emitted by a plugin
 * when an activity is sent
 */
export interface IPluginActivitySentEvent extends ConversationReference {
  /**
   * the sent activity
   */
  readonly activity: SentActivity;
}
