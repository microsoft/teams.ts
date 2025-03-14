import { IPlugin } from './plugin';
import { IPluginEvent } from './plugin-event';

/**
 * the event emitted when a plugin
 * is stopped
 */
export interface IPluginStopEvent extends IPluginEvent<'stop'> {
  /**
   * the injected plugin dependencies
   */
  readonly plugins: Array<IPlugin>;
}
