import { IPluginEvent } from './plugin-event';

/**
 * the event emitted when a plugin
 * is stopped
 */
export interface IPluginStopEvent extends IPluginEvent<'stop'> {}
