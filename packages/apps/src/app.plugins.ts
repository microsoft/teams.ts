import { App } from './app';
import { IPlugin } from './types';

/**
 * add a plugin
 * @param plugin plugin to add
 */
export function plugin(this: App, plugin: IPlugin) {
  if (this.plugins.some((p) => p.name === plugin.name)) {
    return;
  }

  plugin.onInit(this);
  plugin.on('error', this.onError.bind(this));
  plugin.on('activity.received', (e) =>
    this.onActivityReceived({
      ...e,
      plugin: plugin.name,
    })
  );

  plugin.on('activity.sent', (e) =>
    this.onActivitySent({
      ...e,
      plugin: plugin.name,
    })
  );

  plugin.on('activity.before.sent', (e) =>
    this.onBeforeActivitySent({
      ...e,
      plugin: plugin.name,
    })
  );

  this.plugins.push(plugin);
  return this;
}

/**
 * get a plugin
 */
export function getPlugin(this: App, name: string) {
  return this.plugins.find((p) => p.name === name);
}
