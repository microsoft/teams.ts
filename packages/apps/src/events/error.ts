import { Activity } from '@microsoft/teams.api';

import { IEvent } from '../types';

/**
 * the event emitted by a plugin
 * when an error occurs
 */
export interface IErrorEvent extends IEvent {
  /**
   * the error
   */
  error: Error;

  /**
   * inbound request activity payload
   */
  activity?: Activity;
}
