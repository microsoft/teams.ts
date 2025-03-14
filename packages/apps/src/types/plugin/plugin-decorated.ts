import { IEventEmitter } from '@microsoft/spark.common';

import { IPlugin, IPluginEvents } from './plugin';
import { PluginMetadata } from './plugin-decorator';

/**
 * the plugin with its metadata
 *
 * @remake
 * this type is only intended to be used
 * by the `App` internal
 *
 * @private
 */
export interface IPluginDecorated extends IPlugin {
  /**
   * the plugin metadata
   */
  readonly __metadata__: PluginMetadata;

  /**
   * the event emitter of the plugin
   */
  readonly events: Omit<IEventEmitter<IPluginEvents>, 'emit'>;
}
