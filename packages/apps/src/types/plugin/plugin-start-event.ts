import { IPluginEvent } from './plugin-event';

/**
 * the event emitted when a plugin
 * is started
 */
export interface IPluginStartEvent extends IPluginEvent<'start'> {
  /**
   * the port given to the
   * `app.start()` method
   */
  readonly port: number;
}
