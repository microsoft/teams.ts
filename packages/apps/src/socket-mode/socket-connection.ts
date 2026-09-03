import { HubConnection, HubConnectionBuilder, LogLevel, ILogger as ISignalRLogger } from '@microsoft/signalr';
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
 * A `@microsoft/signalr`-backed {@link ISocketConnection}. Negotiates through
 * Teams backend service, opens the Azure SignalR socket, and does not resolve {@link start} until
 * the Teams backend service `SocketReady` readiness frame arrives (or the readiness timeout
 * elapses).
 *
 * Returning a value from the `Activity` handler is what drives SignalR client
 * results: Teams backend service awaits the returned reply frame as the invocation result.
 */
export class SignalRSocketConnection implements ISocketConnection {
  /** Access-token lifetime from the negotiate response; drives proactive refresh. */
  expiresInSeconds?: number;

  private connection?: HubConnection;
  private stopped = false;

  constructor(
    private readonly context: SocketConnectionContext,
    private readonly handlers: SocketConnectionHandlers,
    private readonly log?: ILogger
  ) {}

  async start(signal?: AbortSignal): Promise<void> {
    this.stopped = false;
    this.throwIfAborted(signal);

    const neg = await negotiate({
      negotiateUrl: this.context.negotiateUrl,
      getBotToken: this.context.getBotToken,
      log: this.log,
    });
    this.expiresInSeconds = neg.expiresIn || undefined;
    this.throwIfAborted(signal);

    // Self-driven reconnect: the SocketModeAdapter supervisor owns reconnect (a fresh
    // negotiate + token on every cycle), so SignalR's own auto-reconnect is left
    // OFF here. Explicit heartbeats make a dead connection surface promptly.
    const connection = new HubConnectionBuilder()
      .withUrl(neg.url, { accessTokenFactory: () => neg.accessToken })
      .configureLogging(this.signalRLogger())
      .build();
    connection.keepAliveIntervalInMilliseconds = this.context.keepAliveIntervalMs;
    connection.serverTimeoutInMilliseconds = this.context.serverTimeoutMs;
    this.connection = connection;

    // A readiness gate: the socket is not usable until Teams backend service
    // confirms the connection is registered in the bot's group via `SocketReady`.
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
      this.log?.debug('socket-mode: SocketReady received; readiness satisfied');
      // Complete the internal readiness transition FIRST so a throwing observer
      // can't wedge the connection into a permanent not-ready state (readiness
      // would otherwise time out); only then notify the server, behind an error
      // boundary.
      markReady();
      try {
        this.handlers.onReady(frame ?? {});
      } catch (err) {
        this.log?.warn('socket-mode: onReady observer threw; connection is still ready', err);
      }
    });

    connection.onclose((error) => {
      if (!this.stopped) {
        this.log?.warn('socket-mode: socket closed', error);
      }
      // A close before readiness rejects the gate; after readiness this is a
      // no-op. Either way the connection is terminal — report it once so the
      // supervisor can decide whether to negotiate a fresh connection.
      failReady(error ?? new Error('socket closed before readiness'));
      this.handlers.onClosed(error ?? undefined);
    });

    await connection.start();
    this.throwIfAborted(signal);
    this.log?.debug('socket-mode: socket connected; awaiting SocketReady');

    const timeoutMs = this.context.readinessTimeoutMs;
    const timer = setTimeout(() => {
      this.log?.warn(
        `socket-mode: readiness timed out after ${timeoutMs}ms (no SocketReady frame)`
      );
      failReady(
        new Error(
          `Socket Mode readiness timed out after ${timeoutMs}ms (no SocketReady frame).`
        )
      );
    }, timeoutMs);

    const onAbort = () => failReady(new Error('Socket Mode connect aborted'));
    signal?.addEventListener('abort', onAbort, { once: true });

    try {
      await ready;
    } catch (err) {
      await this.stop();
      throw err;
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener('abort', onAbort);
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

  private throwIfAborted(signal?: AbortSignal): void {
    if (signal?.aborted) {
      throw new Error('Socket Mode connect aborted');
    }
  }

  /**
   * Bridge the SignalR client's internal diagnostics into the app's
   * {@link ILogger} so they surface through the SDK's logging pipeline (and
   * respect its configured level) instead of SignalR's default console logger.
   */
  private signalRLogger(): ISignalRLogger {
    const log = this.log;
    return {
      log: (level, message) => {
        const line = `socket-mode signalr: ${message}`;
        switch (level) {
          case LogLevel.Critical:
          case LogLevel.Error:
            log?.error(line);
            break;
          case LogLevel.Warning:
            log?.warn(line);
            break;
          case LogLevel.Information:
            log?.info(line);
            break;
          case LogLevel.Debug:
          case LogLevel.Trace:
            log?.debug(line);
            break;
          default:
            break;
        }
      },
    };
  }
}
