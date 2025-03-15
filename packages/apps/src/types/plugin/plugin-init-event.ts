import { IPluginEvent } from './plugin-event';

/**
 * the event emitted when a plugin
 * is initialized, before it is started
 */
export interface IPluginInitEvent extends IPluginEvent<'init'> {}
