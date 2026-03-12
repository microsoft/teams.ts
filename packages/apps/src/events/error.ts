import { Activity } from '@microsoft/teams.api';

/**
 * the event emitted by a plugin
 * when an error occurs
 */
export interface IErrorEvent {
  /**
   * the error
   */
  error: Error;

  /**
   * inbound request activity payload
   */
  activity?: Activity;
}
