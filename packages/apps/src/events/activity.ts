import { Activity, ConversationReference, IToken } from '@microsoft/spark.api';

import { IEvent, ISender } from '../types';

/**
 * the event emitted by a plugin
 * when an activity is received
 */
export interface IActivityEvent extends IEvent {
  /**
   * the sender of the event
   */
  sender: ISender;

  /**
   * inbound request token
   */
  token: IToken;

  /**
   * inbound request activity payload
   */
  activity: Activity;

  /**
   * the conversation reference
   */
  ref: ConversationReference;
}
