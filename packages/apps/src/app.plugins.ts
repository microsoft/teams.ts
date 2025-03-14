import { App } from './app';
import { IPlugin, IPluginEvent, ISender, PluginName } from './types';
import { IPluginDecorated } from './types/plugin/plugin-decorated';

/**
 * add a plugin
 * @param plugin plugin to add
 */
export function plugin(this: App, plugin: IPlugin) {
  if (!('__metadata__' in plugin)) {
    throw new Error('invalid plugin');
  }

  const decorated = plugin as IPluginDecorated;

  if (this.plugins.some((p) => p.__metadata__.name === decorated.__metadata__.name)) {
    throw new Error(`duplicate plugin "${decorated.__metadata__.name}" found`);
  }

  this.plugins.push(decorated);

  if (plugin.onInit) {
    plugin.onInit({
      ...this.createPluginEvent(),
      type: 'init',
      plugins: this.getPluginDependencies(decorated.__metadata__.name),
    });
  }

  decorated.events.on('error', (e) => {
    this.onError({ ...e, sender: plugin });
  });

  if (plugin.send && plugin.createStream) {
    decorated.events.on('activity', (e) => {
      this.onActivity(plugin as ISender, e);
    });
  }

  return this;
}

/**
 * get a plugin
 */
export function getPlugin(this: App, name: PluginName): IPlugin | undefined {
  return this.plugins.find((p) => p.__metadata__.name === name);
}

/**
 * get a plugins dependencies
 */
export function getPluginDependencies(this: App, name: string): Array<IPlugin> {
  const plugin = this.plugins.find((p) => p.__metadata__.name === name);

  if (!plugin) return [];

  const plugins: Array<IPlugin> = [];

  for (const packageName of plugin.__metadata__.dependencies || []) {
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
