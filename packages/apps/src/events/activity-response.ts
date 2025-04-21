import { Activity, ConversationReference, InvokeResponse } from '@microsoft/teams.api';

import { IEvent } from '../types';

/**
 * the event emitted by a plugin
 * before an invoke response is returned
 */
export interface IActivityResponseEvent extends IEvent, ConversationReference {
  /**
   * inbound request activity payload
   */
  activity: Activity;

  /**
   * the response
   */
  response: InvokeResponse;
}
