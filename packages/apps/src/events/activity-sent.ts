import { ConversationReference, SentActivity } from '@microsoft/spark.api';

import { IEvent, ISender } from '../types';

/**
 * the event emitted by a plugin
 * when an activity is sent
 */
export interface IActivitySentEvent extends IEvent, ConversationReference {
  /**
   * the sender of the event
   */
  sender: ISender;

  /**
   * the sent activity
   */
  activity: SentActivity;
}
