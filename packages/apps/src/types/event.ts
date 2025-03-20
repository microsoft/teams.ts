import { IPlugin } from './plugin';

/**
 * some event emitted from
 * either the App or a Plugin
 */
export interface IEvent {
  /**
   * the sender of the event
   */
  sender?: IPlugin;
}
