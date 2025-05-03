import { EventHandler } from '@microsoft/teams.common';

import { App } from './app';
import {
  IActivityEvent,
  IActivityResponseEvent,
  IActivitySentEvent,
  IErrorEvent,
  IEvents,
} from './events';
import { IPlugin, IPluginWithEvents, ISender } from './types';

type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type PluginEvents<T> =
  T extends IPluginWithEvents<infer Events> ? Events : {};

type MergePluginEventMaps<TPlugins> =
  UnionToIntersection<
    TPlugins extends readonly unknown[] ? PluginEvents<TPlugins[number]> : PluginEvents<TPlugins>
  >;

// Prioritizes the keys of IEvents, and merges all the Events for the Plugins
export type AppEvents<TPlugins> = {
  [K in keyof IEvents | keyof MergePluginEventMaps<TPlugins>]:
  K extends keyof IEvents
  ? IEvents[K]
  : K extends keyof MergePluginEventMaps<TPlugins>
  ? MergePluginEventMaps<TPlugins>[K]
  : never;
};

/**
 * subscribe to an event
 * @param name the event to subscribe to
 * @param cb the callback to invoke
 */
export function event<
  TPlugin extends IPlugin,
  Name extends keyof AppEvents<TPlugin>,
>(
  this: App<TPlugin>,
  name: Name,
  cb: EventHandler<AppEvents<TPlugin>[Name]>
) {
  this.events.on(name, cb);
  return this;
}

export type PluginConstructor = { new(...args: any[]): IPlugin & PluginEvents<any> };
export type PluginInstance = InstanceType<PluginConstructor>;
// type PluginInstance = IPlugin & PluginEvents<any>;

export async function onError<TPlugin extends IPlugin>(this: App<TPlugin>, event: IErrorEvent) {
  for (const plugin of this.plugins) {
    if (plugin.onError) {
      await plugin.onError(event);
    }
  }

  this.events.emit('error', event);
}

export async function onActivity<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  sender: ISender,
  event: IActivityEvent
) {
  this.events.emit('activity', event);
  await this.process(sender, { ...event, sender });
}

export async function onActivitySent<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  sender: ISender,
  event: IActivitySentEvent
) {
  for (const plugin of this.plugins) {
    if (plugin.onActivitySent) {
      await plugin.onActivitySent({
        ...event,
        sender,
      });
    }
  }

  this.events.emit('activity.sent', { ...event, sender });
}

export async function onActivityResponse<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  sender: ISender,
  event: IActivityResponseEvent
) {
  for (const plugin of this.plugins) {
    if (plugin.onActivityResponse) {
      await plugin.onActivityResponse({
        ...event,
        sender,
      });
    }
  }

  this.events.emit('activity.response', { ...event, sender });
}
