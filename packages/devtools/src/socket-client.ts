import io, { Socket } from 'socket.io-client';

import {
  ActivityErrorEvent,
  ActivityEvent,
  ActivityReceivedEvent,
  ActivitySendingEvent,
  ActivitySentEvent,
} from './types/Event';

interface SocketEventTypes {
  readonly activity: ActivityEvent;
  readonly 'activity.received': ActivityReceivedEvent;
  readonly 'activity.sending': ActivitySendingEvent;
  readonly 'activity.sent': ActivitySentEvent;
  readonly 'activity.error': ActivityErrorEvent;
  readonly 'disconnect': void;
}

export class SocketClient {
  private readonly _socket: Socket;

  constructor() {
    this._socket = io({
      autoConnect: false,
      path: '/devtools/sockets',
    });
  }

  connect(callback?: (...args: any[]) => void | Promise<void>) {
    if (callback) {
      this._socket.on('connect', callback);
    }

    this._socket.connect();
  }

  disconnect(callback: (...args: any[]) => void | Promise<void>) {
    this._socket.on('disconnect', callback);
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
