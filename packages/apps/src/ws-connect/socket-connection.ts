import { ILogger } from '@microsoft/teams.common';

import { negotiate } from './negotiate';
import {
  ISocketConnection,
  SocketActivityEnvelope,
  SocketConnectionContext,
  SocketConnectionHandlers,
  SocketReadyFrame,
} from './types';

/**
 * The subset of a `@microsoft/signalr` `HubConnection` this module uses. Kept
 * as a local structural type so the file type-checks without a hard compile
 * time import and so tests can substitute a stub.
 */
type HubConnectionLike = {
  on(methodName: string, handler: (...args: any[]) => any): void;
  onreconnecting(handler: (error?: Error) => void): void;
  onreconnected(handler: (connectionId?: string) => void): void;
  onclose(handler: (error?: Error) => void): void;
  start(): Promise<void>;
  stop(): Promise<void>;
};

/**
 * A `@microsoft/signalr`-backed {@link ISocketConnection}. Negotiates through
 * APX, opens the Azure SignalR socket, and does not resolve {@link start} until
 * the APX `SocketReady` readiness frame arrives (or the readiness timeout
 * elapses).
 *
 * Returning a value from the `Activity` handler is what drives SignalR client
 * results: APX awaits the returned reply frame as the invocation result.
 */
export class SignalRSocketConnection implements ISocketConnection {
  private connection?: HubConnectionLike;
  private stopped = false;

  constructor(
    private readonly context: SocketConnectionContext,
    private readonly handlers: SocketConnectionHandlers,
    private readonly log?: ILogger
  ) {}

  async start(): Promise<void> {
    this.stopped = false;
    const neg = await negotiate({
      negotiateUrl: this.context.negotiateUrl,
      getBotToken: this.context.getBotToken,
      log: this.log,
    });

    const signalr = await loadSignalR();
    const builder = new signalr.HubConnectionBuilder()
      .withUrl(neg.url, { accessTokenFactory: () => neg.accessToken })
      .configureLogging(signalr.LogLevel.Warning);

    if (this.context.reconnectDelaysMs.length > 0) {
      builder.withAutomaticReconnect([...this.context.reconnectDelaysMs]);
    }

    const connection = builder.build() as HubConnectionLike;
    this.connection = connection;

    // A readiness gate: the socket is not usable until APX confirms the
    // connection is registered in the bot's group via `SocketReady`.
    let markReady!: () => void;
    let failReady!: (err: Error) => void;
    const ready = new Promise<void>((resolve, reject) => {
      markReady = resolve;
      failReady = reject;
    });

    connection.on('Activity', (envelope: SocketActivityEnvelope) =>
      this.handlers.onActivity(envelope)
    );

    connection.on('SocketReady', (frame: SocketReadyFrame) => {
      this.log?.debug('ws-connect SocketReady << readiness satisfied');
      this.handlers.onReady(frame ?? {});
      markReady();
    });

    connection.onreconnecting((error) => {
      this.log?.warn(`ws-connect socket reconnecting: ${error?.message ?? ''}`);
      this.handlers.onDisconnected(error);
    });

    connection.onreconnected(() => {
      this.log?.debug('ws-connect socket reconnected');
      this.handlers.onReconnected();
    });

    connection.onclose((error) => {
      this.handlers.onDisconnected(error);
      if (!this.stopped) {
        this.log?.warn(`ws-connect socket closed: ${error?.message ?? ''}`);
      }
    });

    await connection.start();
    this.log?.debug('ws-connect socket connected; awaiting SocketReady');

    const timeoutMs = this.context.readinessTimeoutMs;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const timeout = new Promise<void>(() => {
      timer = setTimeout(() => {
        failReady(
          new Error(
            `Socket Mode readiness timed out after ${timeoutMs}ms (no SocketReady frame).`
          )
        );
      }, timeoutMs);
    });

    try {
      await Promise.race([ready, timeout]);
    } catch (err) {
      await this.stop();
      throw err;
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  async stop(): Promise<void> {
    this.stopped = true;
    const connection = this.connection;
    this.connection = undefined;
    if (connection) {
      await connection.stop();
    }
  }
}

/**
 * Lazily import `@microsoft/signalr` so environments that never enable Socket
 * Mode don't pay the module cost, and so unit tests that inject their own
 * connection factory don't require the package at all.
 */
async function loadSignalR(): Promise<typeof import('@microsoft/signalr')> {
  try {
    return await import('@microsoft/signalr');
  } catch (err) {
    throw new Error(
      'Socket Mode requires the "@microsoft/signalr" package. Install it to use ' +
      `new App({ wsConnect: true }). Original error: ${(err as Error).message}`
    );
  }
}
