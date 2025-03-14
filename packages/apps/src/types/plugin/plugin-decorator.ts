import { EventEmitter } from '@microsoft/spark.common';

import { IPluginEvents, PluginName } from './plugin';
import { IPluginDecorated } from './plugin-decorated';

/**
 * metadata for the plugin
 */
export type PluginMetadata = {
  /**
   * the unique plugin name
   */
  readonly name: string;

  /**
   * the plugin version
   */
  readonly version?: string;

  /**
   * the plugins this plugin depends on
   *
   * @remark
   * dependencies will be injected into the plugin
   * on lifecycle events (init, start, stop) in the
   * `plugins` array in the same order as provided here
   */
  readonly dependencies?: Array<PluginName>;
};

/**
 * turn any class into a plugin via
 * `@Plugin({ ... })`
 */
export function Plugin(metadata: PluginMetadata) {
  return <T extends { new (...args: any[]): {} }>(Base: T) => {
    return class extends Base implements IPluginDecorated {
      /**
       * the plugin metadata
       */
      readonly __metadata__ = metadata;

      /**
       * the event emitter of the plugin
       */
      readonly events = new EventEmitter<IPluginEvents>();

      /**
       * default toString implementation
       */
      toString() {
        return this.__metadata__.name;
      }
    };
  };
}
