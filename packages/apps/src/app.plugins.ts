import 'reflect-metadata';

import { App } from './app';
import {
  InjectMetadata,
  IPlugin,
  IPluginEvent,
  ISender,
  PluginMetadata,
  PluginName,
} from './types';

/**
 * add a plugin
 * @param plugin plugin to add
 */
export function plugin(this: App, plugin: IPlugin) {
  const metadata: PluginMetadata | undefined = Reflect.getOwnMetadata(
    '__teams_plugin__',
    plugin.constructor
  );

  if (!metadata) {
    throw new Error(`type "${plugin.constructor.name}" is not a valid plugin`);
  }

  const fields: Array<InjectMetadata> =
    Reflect.getOwnMetadata('__teams_plugin_inject__', plugin.constructor) || [];

  for (const { key, type } of fields) {
    const dependencyMetadata: PluginMetadata = Reflect.getOwnMetadata('__teams_plugin__', type);
    const dependency = this.getPlugin(dependencyMetadata.name);

    if (!dependency) {
      throw new Error(
        `plugin "${dependencyMetadata.name}" not found, but plugin "${metadata.name}" depends on it`
      );
    }

    Object.defineProperty(plugin, key, {
      value: dependency,
      writable: true,
      enumerable: false,
      configurable: false,
    });
  }

  if (!!this.getPlugin(metadata.name)) {
    throw new Error(`duplicate plugin "${metadata.name}" found`);
  }

  this.plugins.push(plugin);

  if (plugin.onInit) {
    plugin.onInit({
      ...this.createPluginEvent(),
      type: 'init',
    });
  }

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
  return this.plugins.find((p) => {
    const metadata: PluginMetadata = Reflect.getOwnMetadata('__teams_plugin__', p);
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
