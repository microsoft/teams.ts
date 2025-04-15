import { ConversationReference, SentActivity } from '@microsoft/teams.api';

import { ISender } from './sender';

/**
 * the event emitted by a plugin
 * when an activity is sent
 */
export interface IPluginActivitySentEvent extends ConversationReference {
  /**
   * the sender of the activity
   */
  readonly sender: ISender;

  /**
   * the sent activity
   */
  readonly activity: SentActivity;
}
