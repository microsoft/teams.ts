import { EventHandler } from '@microsoft/teams.common';

import { App } from './app';
import {
  IActivityEvent,
  IActivityResponseEvent,
  IActivitySentEvent,
  IErrorEvent,
  IEvents,
} from './events';
import { ISender } from './types';

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

export async function onError(this: App, event: IErrorEvent) {
  for (const plugin of this.plugins) {
    if (plugin.onError) {
      await plugin.onError(event);
    }
  }

  this.events.emit('error', event);
}

export async function onActivity(this: App, sender: ISender, event: IActivityEvent) {
  this.events.emit('activity', event);
  await this.process(sender, { ...event, sender });
}

export async function onActivitySent(this: App, sender: ISender, event: IActivitySentEvent) {
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

export async function onActivityResponse(
  this: App,
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
