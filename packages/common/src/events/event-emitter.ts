export type EventHandler<T = any> = (data: T) => void | Promise<void>;

export interface EventEmitter<EventTypes = Record<string, any>> {
  on<Event extends keyof EventTypes>(
    event: Event,
    handler: EventHandler<EventTypes[Event]>
  ): number;
  once<Event extends keyof EventTypes>(
    event: Event,
    handler: EventHandler<EventTypes[Event]>
  ): number;
  off(id: number): void;
  emit<Event extends keyof EventTypes>(event: Event, value: EventTypes[Event]): void;
}

export class EventEmitter<EventTypes = Record<string, any>> {
  protected index = -1;
  protected subscriptions = new Map<
    keyof EventTypes,
    Array<{
      readonly id: number;
      readonly handler: EventHandler;
    }>
  >();

  on<Event extends keyof EventTypes>(event: Event, handler: EventHandler<EventTypes[Event]>) {
    const id = ++this.index;
    const subs = this.subscriptions.get(event) || [];
    subs.push({ id, handler });
    this.subscriptions.set(event, subs);
    return id;
  }

  once<Event extends keyof EventTypes>(event: Event, handler: EventHandler<EventTypes[Event]>) {
    const id = this.on(event, (value) => {
      this.off(id);
      handler(value);
    });

    return id;
  }

  off(id: number) {
    for (const [_, subs] of this.subscriptions.entries()) {
      const i = subs.findIndex((s) => s.id === id);

      if (i === -1) continue;

      subs.splice(i, 1);
      return;
    }
  }

  emit<Event extends keyof EventTypes>(event: Event, value: EventTypes[Event]) {
    const subs = this.subscriptions.get(event) || [];

    for (const sub of subs) {
      sub.handler(value);
    }
  }
}
