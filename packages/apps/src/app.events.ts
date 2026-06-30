import { EventEmitter } from '@microsoft/teams.common';

import {
  IActivityEvent,
  IActivityResponseEvent,
  IActivitySentEvent,
  IErrorEvent,
} from './events';
import { AppEvents, IPlugin } from './types';

/**
 * Owns the app event emitter and fans inbound/outbound activity events out to
 * plugins before re-emitting them on the app's public event emitter.
 *
 * This used to live as a set of `this: App`-bound free functions; it is now a
 * collaborator the {@link App} constructs and owns.
 */
export class EventManager<TPlugin extends IPlugin = IPlugin> {
  constructor(
    private readonly events: EventEmitter<AppEvents<TPlugin>>,
    private readonly plugins: ReadonlyArray<TPlugin>
  ) { }

  async onError(event: IErrorEvent) {
    for (const plugin of this.plugins) {
      if (plugin.onError) {
        await plugin.onError(event);
      }
    }

    this.events.emit('error', event);
  }

  onActivity(event: IActivityEvent) {
    this.events.emit('activity', event);
  }

  async onActivitySent(event: IActivitySentEvent) {
    for (const plugin of this.plugins) {
      if (plugin.onActivitySent) {
        await plugin.onActivitySent(event);
      }
    }

    this.events.emit('activity.sent', event);
  }

  async onActivityResponse(event: IActivityResponseEvent) {
    for (const plugin of this.plugins) {
      if (plugin.onActivityResponse) {
        await plugin.onActivityResponse(event);
      }
    }

    this.events.emit('activity.response', event);
  }
}
