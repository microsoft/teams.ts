import io, { Socket } from 'socket.io-client';

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
  private readonly _socket: Socket;

  constructor() {
    this._socket = io({
      autoConnect: false,
      path: '/devtools/sockets',
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
    });
  }

  get connected() {
    return this._socket.connected;
  }

  connect() {
    if (!this._socket.connected) {
      this._socket.connect();
    }
  }

  disconnect() {
    this._socket.disconnect();
  }

  on<Event extends keyof SocketEventTypes>(
    event: Event,
    handler: (value: SocketEventTypes[Event]) => void | Promise<void>
  ) {
    this._socket.on(event as string, handler);
  }

  off<Event extends keyof SocketEventTypes>(event: Event) {
    this._socket.off(event);
  }
}
