import { ActivityParams, ConversationReference } from '@microsoft/spark.api';

import { IEvent } from '../types';

/**
 * the event emitted by a plugin
 * when an activity is sent
 */
export interface IActivitySentEvent extends IEvent, ConversationReference {
  /**
   * the sent activity
   */
  activity: { id: string } & ActivityParams;
}
