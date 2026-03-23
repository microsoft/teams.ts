import { Activity } from '@microsoft/teams.api';

import { IPlugin } from '../types';

/**
 * the event emitted by a plugin
 * when an error occurs
 */
export interface IErrorEvent {
  /**
   * the sender
   */
  readonly sender?: IPlugin;

  /**
   * the error
   */
  error: Error;

  /**
   * inbound request activity payload
   */
  activity?: Activity;
}
