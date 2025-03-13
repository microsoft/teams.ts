import { ActivityParams, ConversationReference } from '@microsoft/spark.api';

import { IEvent } from '../types';

/**
 * the event emitted by a plugin
 * before an activity is sent
 */
export interface IActivityBeforeSentEvent extends IEvent, ConversationReference {
  /**
   * the activity that will be sent
   */
  activity: ActivityParams;
}
