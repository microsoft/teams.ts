import { Activity } from '@microsoft/spark.api';

import { IPlugin } from './plugin';

/**
 * the event emitted when an
 * error occurs
 */
export interface IPluginErrorEvent {
  /**
   * the sender
   */
  readonly sender?: IPlugin;

  /**
   * the error
   */
  readonly error: Error;

  /**
   * the activity
   */
  readonly activity?: Activity;
}
