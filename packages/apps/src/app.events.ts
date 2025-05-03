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

/**
 * Combines Plugin events with default events
 * Prioritizes default IEvents
 */
export type AppEvents<TPlugin extends IPlugin, TPluginEvents extends PluginEvents<TPlugin>> = {
  [key in keyof IEvents | keyof TPluginEvents]: key extends keyof IEvents
  ? IEvents[key]
  : key extends keyof TPluginEvents
  ? TPluginEvents[key]
  : never;
};

/**
 * subscribe to an event
 * @param name the event to subscribe to
 * @param cb the callback to invoke
 */
export function event<
  TPlugin extends IPlugin,
  Name extends keyof AppEvents<TPlugin, PluginEvents<TPlugin>>,
>(
  this: App<TPlugin>,
  name: Name,
  cb: EventHandler<AppEvents<TPlugin, PluginEvents<TPlugin>>[Name]>
) {
  this.events.on(name, cb);
  return this;
}

export type PluginEvents<TPlugin extends IPlugin> =
  TPlugin extends IPluginWithEvents<infer TEvents> ? TEvents : {};

type PluginConstructor = { new(...args: any[]): IPlugin & PluginEvents<any> };
type PluginInstance = IPlugin & PluginEvents<any>;

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
