import { ILogger } from '@microsoft/teams.common';

import { IContainer } from './container';
import { allIEventKeys, IActivityEvent, IEvents } from './events';
import {
  IPlugin,
  IPluginErrorEvent,
  IPluginStartEvent,
  PluginName,
} from './types';
import {
  DependencyMetadata,
  PLUGIN_DEPENDENCIES_METADATA_KEY,
} from './types/plugin/decorators/dependency';
import { EventMetadata, PLUGIN_EVENTS_METADATA_KEY } from './types/plugin/decorators/event';
import { PLUGIN_METADATA_KEY, PluginOptions } from './types/plugin/decorators/plugin';

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

/**
 * Hooks the {@link PluginManager} uses to reach back into the owning {@link App}
 * when wiring plugin `@Event` handlers. Passing these in (rather than handing the
 * manager a reference to `App`) keeps the manager decoupled from the app's
 * private internals while preserving the existing event behavior.
 */
export interface IPluginManagerHandlers {
  /** route a plugin `@Event('error')` emission into the app's error pipeline */
  readonly onError: (event: IPluginErrorEvent) => void | Promise<void>;
  /** route a plugin `@Event('activity')` emission into the app's activity pipeline */
  readonly onActivity: (event: IActivityEvent) => unknown;
  /** emit a plugin `@Event('custom')` event on the app's public event emitter */
  readonly emit: (name: string, event: unknown) => void;
}

export interface IPluginManagerOptions {
  readonly container: IContainer;
  readonly log: ILogger;
  readonly handlers: IPluginManagerHandlers;
}

/**
 * Owns every plugin concern that used to be scattered across {@link App}:
 * the plugin registry, duplicate-name validation, container registration,
 * dependency/event injection, and the `onInit`/`onStart`/`onStop` lifecycle.
 *
 * `App` constructs a `PluginManager`, shares its {@link PluginManager.plugins}
 * array with the other collaborators (e.g. `EventManager`, `ActivityProcessor`),
 * and delegates lifecycle to it from `initialize`/`start`/`stop`.
 */
export class PluginManager<TPlugin extends IPlugin = IPlugin> {
  private readonly _plugins: Array<TPlugin> = [];
  private readonly container: IContainer;
  private readonly log: ILogger;
  private readonly handlers: IPluginManagerHandlers;

  constructor(options: IPluginManagerOptions) {
    this.container = options.container;
    this.log = options.log;
    this.handlers = options.handlers;
  }

  /**
   * the registered plugins. Returned as the live array so collaborators that
   * capture it (e.g. {@link EventManager}) observe plugins added later.
   */
  get plugins(): ReadonlyArray<TPlugin> {
    return this._plugins;
  }

  /**
   * find the `http` plugin in a raw plugins list, if present. Used during app
   * construction to support the deprecated `plugins: [new HttpPlugin()]` path.
   */
  static findHttpPlugin<TPlugin extends IPlugin>(plugins: ReadonlyArray<TPlugin>) {
    return plugins.find((plugin) => getMetadata(plugin).name === 'http');
  }

  /**
   * register a plugin and make it injectable via the container
   * @param plugin plugin to add
   */
  add(plugin: TPlugin) {
    const { name } = getMetadata(plugin);

    if (this.get(name)) {
      throw new Error(`duplicate plugin "${name}" found`);
    }

    this._plugins.push(plugin);
    this.container.register(name, { useValue: plugin });
    if (plugin.constructor.name !== name) {
      this.container.register(plugin.constructor.name, { useValue: plugin });
    }
  }

  /**
   * get a registered plugin by name
   */
  get(name: PluginName): TPlugin | undefined {
    return this._plugins.find((plugin) => getMetadata(plugin).name === name);
  }

  /**
   * initialize every plugin: inject its dependencies/events then call `onInit`
   */
  async init() {
    for (const plugin of this._plugins) {
      this.inject(plugin);

      if (plugin.onInit) {
        await plugin.onInit();
      }
    }
  }

  /**
   * start every plugin via `onStart`
   */
  async start(event: IPluginStartEvent) {
    for (const plugin of this._plugins) {
      if (plugin.onStart) {
        await plugin.onStart(event);
      }
    }
  }

  /**
   * stop every plugin via `onStop`
   */
  async stop() {
    for (const plugin of this._plugins) {
      if (plugin.onStop) {
        await plugin.onStop();
      }
    }
  }

  /**
   * inject fields/events into a plugin
   */
  private inject(plugin: TPlugin) {
    const { name, dependencies, events } = getMetadata(plugin);

    // inject dependencies
    for (const { key, type, optional } of dependencies) {
      let dependency = this.container.resolve(type);

      if (!dependency) {
        dependency = this.container.resolve(key);
      }

      if (!dependency) {
        if (optional) continue;
        throw new Error(
          `dependency "${type}" of property "${key}" not found, but plugin "${name}" depends on it`
        );
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

    // inject event handlers
    for (const { key, name: eventName } of events) {
      let handler = (..._: any[]) => { };

      if (eventName === 'error') {
        handler = (event: IPluginErrorEvent) => {
          this.handlers.onError(event);
        };
      } else if (eventName === 'activity') {
        handler = (event: IActivityEvent) => {
          return this.handlers.onActivity(event);
        };
      } else if (eventName === 'custom') {
        handler = (customName: string, event: unknown) => {
          if (allIEventKeys.includes(customName as keyof IEvents)) {
            this.log.warn(`event "${customName}" is reserved by core app-events but an plugin is trying to emit it`);
            return;
          }
          this.handlers.emit(customName, event);
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
}
