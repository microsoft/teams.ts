import { ILogger } from '@microsoft/spark.common';

import { App } from './app';
import { IPlugin, IPluginActivityEvent, IPluginErrorEvent, IPluginEvent, ISender, PluginName } from './types';
import { DependencyMetadata, PLUGIN_DEPENDENCIES_METADATA_KEY } from './types/plugin/decorators/dependency';
import { PLUGIN_METADATA_KEY, PluginOptions } from './types/plugin/decorators/plugin';
import { EventMetadata, PLUGIN_EVENTS_METADATA_KEY } from './types/plugin/decorators/event';

/**
 * add a plugin
 * @param plugin plugin to add
 */
export function plugin(this: App, plugin: IPlugin) {
  const { name } = getMetadata(plugin);

  if (!!this.getPlugin(name)) {
    throw new Error(`duplicate plugin "${name}" found`);
  }

  this.plugins.push(plugin);
  this.container.register(plugin.constructor.name, { useValue: plugin });
  return this;
}

/**
 * get a plugin
 */
export function getPlugin(this: App, name: PluginName): IPlugin | undefined {
  return this.plugins.find((plugin) => {
    const metadata = getMetadata(plugin);
    return metadata.name === name;
  });
}

/**
 * create plugin event
 */
export function createPluginEvent(this: App): IPluginEvent {
  return {
    type: '',
    id: this.id,
    name: this.name,
    client: this.client,
    logger: this.log,
    storage: this.storage,
    manifest: this.manifest,
    credentials: this.credentials,
    botToken: this.tokens.bot,
    graphToken: this.tokens.graph,
  };
}

/**
 * inject fields/events into a plugin
 */
export function inject(this: App, plugin: IPlugin) {
  const { name, dependencies, events } = getMetadata(plugin);

  for (const { key, type, optional } of dependencies) {
    let dependency = this.container.resolve(type);

    if (!dependency) {
      dependency = this.container.resolve(key);
    }

    if (!dependency) {
      if (optional) continue;
      throw new Error(`dependency "${type}" of property "${key}" not found, but plugin "${name}" depends on it`);
    }

    if (type === 'ILogger') {
      dependency = (dependency as ILogger).child(name);
    }

    Object.defineProperty(plugin, key, {
      value: dependency,
      writable: true,
      enumerable: false,
      configurable: false,
    });
  }

  for (const { key, name } of events) {
    let handler = (..._: any[]) => {};

    if (name === 'error') {
      handler = (event: IPluginErrorEvent) => {
        this.onError({ ...event, sender: plugin });
      };
    } else if (name === 'activity') {
      handler = (event: IPluginActivityEvent) => {
        this.onActivity(plugin as ISender, event);
      };
    }

    Object.defineProperty(plugin, key, {
      value: handler,
      writable: false,
      enumerable: false,
      configurable: false,
    });
  }
}

//
// PLUGIN HELPERS
//

export function getMetadata(plugin: IPlugin) {
  if (!Reflect.hasMetadata(PLUGIN_METADATA_KEY, plugin.constructor)) {
    throw new Error(`type "${plugin.constructor.name}" is not a valid plugin`);
  }

  const metadata: PluginOptions = Reflect.getMetadata(PLUGIN_METADATA_KEY, plugin.constructor);
  const dependencies: Array<DependencyMetadata> =
    Reflect.getMetadata(PLUGIN_DEPENDENCIES_METADATA_KEY, plugin.constructor) || [];
  const events: Array<EventMetadata> =
    Reflect.getMetadata(PLUGIN_EVENTS_METADATA_KEY, plugin.constructor) || [];

  return {
    ...metadata,
    dependencies,
    events,
  };
}
