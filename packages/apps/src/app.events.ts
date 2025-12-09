import { EventHandler } from '@microsoft/teams.common';

import { App } from './app';
import {
  IActivityResponseEvent,
  IActivitySentEvent,
  IErrorEvent,
} from './events';
import { AppEvents, IPlugin, ISender } from './types';

/**
 * subscribe to an event
 * @param name the event to subscribe to
 * @param cb the callback to invoke
 */
export function event<
  TPlugin extends IPlugin,
  Name extends keyof AppEvents<TPlugin>
>(this: App<TPlugin>, name: Name, cb: EventHandler<AppEvents<TPlugin>[Name]>) {
  this.events.on(name, cb);
  return this;
}

export async function onError<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  event: IErrorEvent
) {
  for (const plugin of this.plugins) {
    if (plugin.onError) {
      await plugin.onError(event);
    }
  }

  this.events.emit('error', event);
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
