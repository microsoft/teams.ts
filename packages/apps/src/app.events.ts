import { EventHandler } from '@microsoft/spark.common';

import {
  IAppActivityBeforeSentEvent,
  IAppActivityErrorEvent,
  IAppActivityReceivedEvent,
  IAppActivitySentEvent,
  IEvents,
} from './events';
import { App } from './app';
import { ISenderPlugin } from './types';

/**
 * subscribe to an event
 * @param name the event to subscribe to
 * @param cb the callback to invoke
 */
export function event<Name extends keyof IEvents>(
  this: App,
  name: Name,
  cb: EventHandler<IEvents[Name]>
) {
  this.events.on(name, cb);
  return this;
}

export function onError(this: App, err: any) {
  this.events.emit('error', { err, log: this.log });
}

export function onActivityError(this: App, event: IAppActivityErrorEvent) {
  this.onError(event.err);
  this.events.emit('activity.error', event);
}

export async function onActivityReceived(this: App, event: IAppActivityReceivedEvent) {
  this.events.emit('activity.received', event);

  const plugin = this.getPlugin(event.plugin);

  if (!plugin) {
    throw new Error(`plugin "${event.plugin}" not found`);
  }

  if (!plugin.onSend) {
    throw new Error(`plugin "${event.plugin}" cannot send activities`);
  }

  await this.process(plugin as ISenderPlugin, event);
}

export function onActivitySent(this: App, event: IAppActivitySentEvent) {
  this.events.emit('activity.sent', event);
}

export function onBeforeActivitySent(this: App, event: IAppActivityBeforeSentEvent) {
  this.events.emit('activity.before.sent', event);
}
