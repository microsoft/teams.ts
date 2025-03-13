import { Activity, IToken } from '@microsoft/spark.api';

import { IEvent } from '../types';

/**
 * the event emitted by a plugin
 * when an activity is received
 */
export interface IActivityReceivedEvent extends IEvent {
  /**
   * inbound request token
   */
  token: IToken;

  /**
   * inbound request activity payload
   */
  activity: Activity;
}
