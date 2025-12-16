import { ConversationReference, SentActivity } from '@microsoft/teams.api';

import { IEvent } from '../types';

/**
 * the event emitted by a plugin
 * when an activity is sent
 */
export interface IActivitySentEvent extends IEvent, ConversationReference {
  /**
   * the sent activity
   */
  activity: SentActivity;
}
