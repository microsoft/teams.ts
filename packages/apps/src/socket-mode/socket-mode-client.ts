import {
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
  IRetryPolicy,
} from '@microsoft/signalr';

export type ConnectionState = 'disconnected' | 'connecting' | 'connected' | 'reconnecting';

/**
 * Thin abstraction over `@microsoft/signalr.HubConnection` so SocketModeApp can be unit-tested
 * with a fake client.
 */
export interface ISocketModeClient {
  /** Connect to the given Azure SignalR URL using the provided client access token. */
  connect(url: string, accessToken: string): Promise<void>;
  /** Stop the connection. Safe to call multiple times. */
  disconnect(): Promise<void>;

  onActivity(handler: (envelope: unknown) => void | Promise<void>): void;
  onClose(handler: (err?: Error) => void): void;
  onReconnecting(handler: (err?: Error) => void): void;
  onReconnected(handler: (connectionId?: string) => void): void;

  readonly connectionId?: string;
  readonly state: ConnectionState;
}

const DEFAULT_RETRY_POLICY: IRetryPolicy = {
  // Reconnect attempts at 0s, 2s, 10s, 30s. Matches @microsoft/signalr defaults
  // but exposed here so we can tune later without changing call sites.
  nextRetryDelayInMilliseconds: (ctx) => {
    if (ctx.previousRetryCount === 0) return 0;
    if (ctx.previousRetryCount === 1) return 2_000;
    if (ctx.previousRetryCount === 2) return 10_000;
    return 30_000;
  },
};

/**
 * Production implementation backed by `@microsoft/signalr`.
 */
export class SocketModeClient implements ISocketModeClient {
  private connection?: HubConnection;
  private activityHandler?: (envelope: unknown) => void | Promise<void>;
  private closeHandler?: (err?: Error) => void;
  private reconnectingHandler?: (err?: Error) => void;
  private reconnectedHandler?: (connectionId?: string) => void;

  get connectionId(): string | undefined {
    return this.connection?.connectionId ?? undefined;
  }

  get state(): ConnectionState {
    switch (this.connection?.state) {
      case HubConnectionState.Connected: return 'connected';
      case HubConnectionState.Connecting: return 'connecting';
      case HubConnectionState.Reconnecting: return 'reconnecting';
      default: return 'disconnected';
    }
  }

  async connect(url: string, accessToken: string): Promise<void> {
    const conn = new HubConnectionBuilder()
      .withUrl(url, { accessTokenFactory: () => accessToken })
      .withAutomaticReconnect(DEFAULT_RETRY_POLICY)
      .build();

    if (this.activityHandler) {
      conn.on('activity', this.activityHandler);
    }
    if (this.closeHandler) {
      conn.onclose(this.closeHandler);
    }
    if (this.reconnectingHandler) {
      conn.onreconnecting(this.reconnectingHandler);
    }
    if (this.reconnectedHandler) {
      conn.onreconnected(this.reconnectedHandler);
    }

    await conn.start();
    this.connection = conn;
  }

  async disconnect(): Promise<void> {
    const conn = this.connection;
    this.connection = undefined;
    if (conn) {
      try {
        await conn.stop();
      } catch {
        // signalr.stop() can throw if the transport is already torn down — that's fine.
      }
    }
  }

  onActivity(handler: (envelope: unknown) => void | Promise<void>): void {
    this.activityHandler = handler;
    if (this.connection) {
      this.connection.off('activity');
      this.connection.on('activity', handler);
    }
  }

  onClose(handler: (err?: Error) => void): void {
    this.closeHandler = handler;
    if (this.connection) {
      this.connection.onclose(handler);
    }
  }

  onReconnecting(handler: (err?: Error) => void): void {
    this.reconnectingHandler = handler;
    if (this.connection) {
      this.connection.onreconnecting(handler);
    }
  }

  onReconnected(handler: (connectionId?: string) => void): void {
    this.reconnectedHandler = handler;
    if (this.connection) {
      this.connection.onreconnected(handler);
    }
  }
}
