import { App } from './app';
import { IPlugin, IPluginEvent, ISender } from './types';

/**
 * add a plugin
 * @param plugin plugin to add
 */
export function plugin(this: App, plugin: IPlugin) {
  if (this.plugins.some((p) => p.name === plugin.name)) {
    return;
  }

  this.plugins.push(plugin);

  if (plugin.onInit) {
    plugin.onInit({
      ...this.createPluginEvent(),
      type: 'init',
      plugins: this.getPluginDependencies(plugin.name),
    });
  }

  plugin.events.on('error', (e) => {
    this.onError({ ...e, sender: plugin });
  });

  if (plugin.send && plugin.createStream) {
    plugin.events.on('activity', (e) => {
      this.onActivity(plugin as ISender, e);
    });
  }

  return this;
}

/**
 * get a plugin
 */
export function getPlugin(this: App, name: string) {
  return this.plugins.find((p) => p.name === name);
}

/**
 * get a plugins dependencies
 */
export function getPluginDependencies(this: App, name: string) {
  const plugin = this.getPlugin(name);

  if (!plugin) return [];

  const plugins: Array<IPlugin> = [];

  for (const packageName of plugin.dependencies || []) {
    const dependency = this.getPlugin(packageName);

    if (!dependency) {
      throw new Error(`plugin "${packageName}" not found, but plugin "${name}" depends on it`);
    }

    plugins.push(dependency);
  }

  return plugins;
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
