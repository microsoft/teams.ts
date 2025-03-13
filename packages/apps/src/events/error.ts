import { Activity } from '@microsoft/spark.api';

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
}

/**
 * the event emitted by a plugin
 * when an error occurs as the result
 * of an activity
 */
export interface IActivityErrorEvent extends IErrorEvent {
  /**
   * inbound request activity payload
   */
  activity: Activity;
}
