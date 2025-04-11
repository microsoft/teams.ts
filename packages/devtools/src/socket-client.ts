import {
  Event,
  ActivityErrorEvent,
  ActivityEvent,
  ActivityReceivedEvent,
  ActivitySendingEvent,
  ActivitySentEvent,
} from './types/Event';
import { Metadata } from './types/Metadata';

interface SocketEventTypes {
  readonly metadata: Event<Metadata>;
  readonly activity: ActivityEvent;
  readonly 'activity.received': ActivityReceivedEvent;
  readonly 'activity.sending': ActivitySendingEvent;
  readonly 'activity.sent': ActivitySentEvent;
  readonly 'activity.error': ActivityErrorEvent;
  readonly connect: void;
  readonly disconnect: void;
}

export class SocketClient {
  get connected() {
    return this._connected;
  }
  private _connected = false;

  private _socket?: WebSocket;
  private readonly _events: Map<keyof SocketEventTypes, (value: any) => void | Promise<void>>;

  constructor() {
    this._events = new Map();
  }

  connect() {
    this._socket = new WebSocket('/devtools/sockets');
    this._socket.addEventListener('message', this._onMessage.bind(this));
    this._socket.addEventListener('open', this._onConnect.bind(this));
    this._socket.addEventListener('close', this._onDisconnect.bind(this));
  }

  disconnect() {
    this._socket?.close();
  }

  on<Event extends keyof SocketEventTypes>(
    event: Event,
    handler: (value: SocketEventTypes[Event]) => void | Promise<void>
  ) {
    this._events.set(event, handler);
  }

  off<Event extends keyof SocketEventTypes>(event: Event) {
    this._events.delete(event);
  }

  private async _onConnect() {
    this._connected = true;
    const handler = this._events.get('connect');
    if (!handler) return;
    await handler(null);
  }

  private async _onDisconnect() {
    this._connected = false;
    this._events.clear();
    const handler = this._events.get('disconnect');
    if (!handler) return;
    await handler(null);
  }

  private async _onMessage(event: MessageEvent<any>) {
    const ev: ActivityEvent = JSON.parse(event.data);

    if (ev.type.startsWith('activity.')) {
      const handler = this._events.get('activity');

      if (handler) {
        await handler(ev);
      }
    }

    const handler = this._events.get(ev.type);

    if (!handler) return;

    await handler(ev);
  }
}
