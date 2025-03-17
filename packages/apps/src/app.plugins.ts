import { ILogger } from '@microsoft/spark.common';

import { App } from './app';
import { IContainer } from './container';
import { IPlugin, IPluginEvent, ISender, PluginName } from './types';
import { InjectMetadata, PLUGIN_FIELDS_METADATA_KEY } from './types/plugin/decorators/inject';
import { PLUGIN_METADATA_KEY, PluginOptions } from './types/plugin/decorators/plugin';

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

  plugin.events?.on('error', (e) => {
    this.onError({ ...e, sender: plugin });
  });

  if (plugin.send && plugin.createStream) {
    plugin.events?.on('activity', (e) => {
      this.onActivity(plugin as ISender, e);
    });
  }

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

//
// PLUGIN HELPERS
//

export function getMetadata(plugin: IPlugin) {
  if (!Reflect.hasMetadata(PLUGIN_METADATA_KEY, plugin.constructor)) {
    throw new Error(`type "${plugin.constructor.name}" is not a valid plugin`);
  }

  const metadata: PluginOptions = Reflect.getMetadata(PLUGIN_METADATA_KEY, plugin.constructor);
  const fields: InjectMetadata =
    Reflect.getMetadata(PLUGIN_FIELDS_METADATA_KEY, plugin.constructor) || [];

  return {
    ...metadata,
    fields,
  };
}

export function inject(container: IContainer, plugin: IPlugin) {
  const { name, fields } = getMetadata(plugin);

  for (const { key, type, optional } of fields) {
    let dependency = container.resolve(type);

    if (!dependency) {
      dependency = container.resolve(key);
    }

    if (!dependency) {
      if (optional) continue;
      throw new Error(`dependency "${type}" not found, but plugin "${name}" depends on it`);
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
}
