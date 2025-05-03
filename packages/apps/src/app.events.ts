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

// type PluginEvents<TPlugin extends IPlugin, TPluginEvents extends PluginEvents<TPlugin>> = {

// }

/**
 * Combines Plugin events with default events
 * Prioritizes default IEvents
 */
export type AppEvents<TPlugin extends IPlugin> = {
  [key in keyof IEvents | keyof PluginEvents<TPlugin>]: key extends keyof IEvents
  ? IEvents[key]
  : key extends keyof PluginEvents<TPlugin>
  ? PluginEvents<TPlugin>[key]
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

export type PluginEvents<TPlugin extends IPlugin> =
  TPlugin extends IPluginWithEvents<infer TEvents> ? TEvents : {};

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
