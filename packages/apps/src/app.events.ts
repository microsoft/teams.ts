import { EventEmitter, ILogger } from '@microsoft/teams.common';

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
    private readonly plugins: ReadonlyArray<TPlugin>,
    private readonly log?: ILogger
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

  /**
   * Notifies each plugin, then the `activity.sent` listeners, of a sent activity.
   * A failing plugin hook is logged and the remaining plugins and listeners still run.
   * Listener failures, including rejected async listeners, are logged by the emitter, so this never rejects.
   */
  async onActivitySent(event: IActivitySentEvent) {
    for (const plugin of this.plugins) {
      if (plugin.onActivitySent) {
        try {
          await plugin.onActivitySent(event);
        } catch (err) {
          this.log?.error('plugin onActivitySent failed', err);
        }
      }
    }

    await this.events.emitAsync('activity.sent', event);
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
