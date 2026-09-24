import type { ILogger } from '../logging/logger';

export type EventHandler<T = any> = (data: T) => void | Promise<void>;
export interface IEventEmitter<EventTypes = Record<string, any>> {
  on<Event extends keyof EventTypes>(
    event: Event,
    handler: EventHandler<EventTypes[Event]>,
  ): number;
  once<Event extends keyof EventTypes>(
    event: Event,
    handler: EventHandler<EventTypes[Event]>,
  ): number;
  off(id: number): void;
  emit<Event extends keyof EventTypes>(
    event: Event,
    value: EventTypes[Event],
  ): void;
}

export class EventEmitter<
  EventTypes = Record<string, any>,
> implements IEventEmitter<EventTypes> {
  protected index: number = -1;
  protected subscriptions: Map<
    keyof EventTypes,
    Array<{
      readonly id: number;
      readonly handler: EventHandler;
    }>
  > = new Map<
    keyof EventTypes,
    Array<{
      readonly id: number;
      readonly handler: EventHandler;
    }>
  >();

  /**
   * @param logger Used to report handler failures from {@link emitAsync}.
   * Defaults to `console` when omitted, so failures are never silent.
   */
  constructor(protected readonly logger?: ILogger | undefined) { }

  on<Event extends keyof EventTypes>(
    event: Event,
    handler: EventHandler<EventTypes[Event]>,
  ): number {
    const id = ++this.index;
    const subs = this.subscriptions.get(event) || [];
    subs.push({ id, handler });
    this.subscriptions.set(event, subs);
    return id;
  }

  once<Event extends keyof EventTypes>(
    event: Event,
    handler: EventHandler<EventTypes[Event]>,
  ): number {
    const id = this.on(event, (value) => {
      this.off(id);
      // Returned so `emitAsync` can await an async one-shot handler.
      return handler(value);
    });

    return id;
  }

  off(id: number): void {
    for (const [_, subs] of this.subscriptions.entries()) {
      const i = subs.findIndex((s) => s.id === id);

      if (i === -1) continue;

      subs.splice(i, 1);
      return;
    }
  }

  emit<Event extends keyof EventTypes>(
    event: Event,
    value: EventTypes[Event],
  ): void {
    const subs = this.subscriptions.get(event) || [];

    for (const sub of subs) {
      sub.handler(value);
    }
  }

  /**
   * Emit an event and wait for every subscribed handler to settle.
   *
   * Handlers are started in subscription order and then awaited together, so
   * async handlers run concurrently. Use this instead of `emit` when the
   * emitter must not continue until async listeners have finished — for
   * example when those listeners touch resources that are torn down once the
   * emitting operation returns.
   *
   * A handler that throws or rejects is logged and does not stop the other
   * handlers; this never rejects.
   */
  async emitAsync<Event extends keyof EventTypes>(
    event: Event,
    value: EventTypes[Event],
  ): Promise<void> {
    // Snapshot so a `once` handler unsubscribing itself mid-emit cannot shift
    // the list out from under the loop.
    const subs = [...(this.subscriptions.get(event) || [])];
    const pending: Array<Promise<void>> = [];

    for (const sub of subs) {
      try {
        const result = sub.handler(value);

        if (result) {
          pending.push(result);
        }
      } catch (err) {
        this.reportHandlerError(event, err);
      }
    }

    const results = await Promise.allSettled(pending);

    for (const result of results) {
      if (result.status === 'rejected') {
        this.reportHandlerError(event, result.reason);
      }
    }
  }

  private reportHandlerError(event: keyof EventTypes, err: unknown): void {
    const message = `event handler failed for "${String(event)}"`;

    if (this.logger) {
      this.logger.error(message, err);
      return;
    }

    console.error(message, err);
  }
}
