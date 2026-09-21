import { ILogger } from '@microsoft/teams.common';

import {
  ISocketConnection,
  ReplyFrame,
  SocketActivityEnvelope,
  SocketConnectionHandlers,
  SocketModeStatus,
  SocketReadyFrame,
} from './types';

/**
 * Distinguishes expected token rotation from an unexpected connection drop.
 */
type CloseReason = { planned: true } | { planned: false; error?: Error };

/** Keep a superseded socket alive while APX connection-ID caches expire. */
const CONNECTION_HANDOFF_MS = 5_000;

type ActiveConnection = {
  readonly gen: number;
  readonly connection: ISocketConnection;
};

/** Internal callbacks and settings required by one geo supervisor. */
export type GeoSocketDeps = {
  readonly isAccepting: () => boolean;
  readonly getAbortSignal: () => AbortSignal | undefined;
  readonly createConnection: (
    negotiateUrl: string,
    handlers: SocketConnectionHandlers
  ) => ISocketConnection;
  readonly dispatch: (
    envelope: SocketActivityEnvelope
  ) => Promise<ReplyFrame | undefined>;
  readonly retryAfterOf: (error: unknown) => number | undefined;
  readonly backoffDelay: (attempt: number) => number;
  readonly sleep: (ms: number) => Promise<boolean>;
  readonly onReady: (frame: SocketReadyFrame) => void;
  readonly onDisconnected: (error?: Error) => void;
  readonly onReconnected: () => void;
  readonly startupTimeoutMs: number;
  readonly tokenRefreshMarginMs: number;
};

/**
 * Supervises one Socket Mode connection for a single geo, including readiness,
 * reconnection, and proactive token refresh.
 */
export class GeoSocket {
  /** Monotonic connection generation. */
  private generation = 0;
  /** The ready generation receiving new backend traffic. */
  private active?: ActiveConnection;
  /** Prior generations kept alive during APX's connection-ID cache window. */
  private readonly retiring = new Map<number, ISocketConnection>();
  private supervisorLoop?: Promise<void>;
  private refreshTimer?: ReturnType<typeof setTimeout>;
  private _status: SocketModeStatus = 'idle';
  /** Settles when the current connection terminates and drives the supervisor. */
  private closed: Promise<CloseReason> = Promise.resolve({ planned: false });

  constructor(
    private readonly deps: GeoSocketDeps,
    readonly geo: string,
    private readonly negotiateUrl: string,
    private readonly log: ILogger
  ) {}

  get status(): SocketModeStatus {
    return this._status;
  }

  /** Accept frames from the active socket and its briefly overlapping predecessors. */
  canDispatch(gen: number): boolean {
    return (
      this.deps.isAccepting() &&
      (this.active?.gen === gen || this.retiring.has(gen))
    );
  }

  /**
   * Establish the initial connection within the configured startup budget.
   */
  async startInitial(): Promise<void> {
    this._status = 'connecting';
    const deadline = Date.now() + this.deps.startupTimeoutMs;
    let attempt = 0;
    let lastError: Error | undefined;

    this.log.debug(
      `socket-mode[${this.geo}]: starting initial connection with a ${this.deps.startupTimeoutMs}ms startup budget`
    );
    while (this.deps.isAccepting()) {
      const gen = ++this.generation;
      try {
        this.closed = (await this.connectCycle(gen)).closed;
        this._status = 'ready';
        this.log.debug(`socket-mode[${this.geo}]: initial connection is ready`);
        return;
      } catch (err: any) {
        lastError = err;
        if (!this.deps.isAccepting()) break;
        const delay = this.deps.retryAfterOf(err) ?? this.deps.backoffDelay(attempt);
        attempt++;
        if (Date.now() + delay >= deadline) break;
        this.log.warn(
          `socket-mode[${this.geo}]: initial connect attempt ${attempt} failed; retrying in ${delay}ms`,
          err
        );
        const slept = await this.deps.sleep(delay);
        if (!slept) break;
      }
    }
    this.log.debug(
      `socket-mode[${this.geo}]: initial connection did not become ready within the startup budget`,
      lastError
    );
    throw lastError ?? new Error(`Socket Mode failed to establish the initial connection for geo '${this.geo}'.`);
  }

  superviseInBackground(): void {
    this.supervisorLoop = this.supervise().catch((err) => {
      this.log.error(`socket-mode[${this.geo}]: reconnect supervisor stopped unexpectedly`, err);
    });
  }

  /** Stop token refresh, every owned connection, and the reconnect supervisor. */
  async stop(): Promise<void> {
    this.clearRefreshTimer();
    const connections = [
      this.active?.connection,
      ...this.retiring.values(),
    ].filter(
      (connection): connection is ISocketConnection => connection !== undefined
    );
    this.active = undefined;
    this.retiring.clear();
    await Promise.all(
      connections.map((connection) => connection.stop().catch(() => undefined))
    );
    await this.supervisorLoop?.catch(() => undefined);
    this._status = 'stopped';
  }

  private async connectCycle(gen: number): Promise<{ closed: Promise<CloseReason> }> {
    let settled = false;
    let settle!: (reason: CloseReason) => void;
    const closed = new Promise<CloseReason>((resolve) => {
      settle = (reason) => {
        if (!settled) {
          settled = true;
          resolve(reason);
        }
      };
    });

    const handlers: SocketConnectionHandlers = {
      onActivity: (envelope) => {
        if (!this.canDispatch(gen)) {
          this.log.debug(
            'socket-mode: dropping activity received outside the active connection state'
          );
          return Promise.resolve(undefined);
        }
        return this.deps.dispatch(envelope);
      },
      onReady: (frame) => {
        if (this.active && this.active.gen !== gen) {
          this.retiring.set(this.active.gen, this.active.connection);
        }
        this.active = { gen, connection };
        // Observers reading aggregate status from the ready event must see the
        // settled value rather than the previous connecting state.
        this._status = 'ready';
        this.deps.onReady(frame);
      },
      onClosed: (error) => {
        if (this.active?.gen === gen) {
          this.clearRefreshTimer();
          if (settled && this.deps.isAccepting()) {
            // A planned refresh already advanced the supervisor. If the active
            // predecessor dies before its replacement is ready, surface the
            // resulting delivery outage.
            this.active = undefined;
            this.reportDisconnected(error);
          }
        }
        this.retiring.delete(gen);
        settle({ planned: false, error });
      },
    };

    const connection = this.deps.createConnection(this.negotiateUrl, handlers);

    await connection.start(this.deps.getAbortSignal());
    this.scheduleTokenRefresh(gen, connection.expiresInSeconds, () =>
      settle({ planned: true })
    );
    return { closed };
  }

  private async supervise(): Promise<void> {
    let closed = this.closed;
    while (this.deps.isAccepting()) {
      const aborted = this.whenAborted();
      let reason: CloseReason;
      try {
        reason = (await Promise.race([closed, aborted.promise])) ?? { planned: false };
      } finally {
        // Avoid accumulating one abort listener per reconnect generation.
        aborted.dispose();
      }
      if (!this.deps.isAccepting()) return;

      const planned = reason.planned === true;
      const error = reason.planned ? undefined : reason.error;

      if (planned) {
        // Keep the active generation serving while its replacement negotiates
        // and waits for SocketReady.
        this.log.info(
          `socket-mode[${this.geo}]: proactively rotating token; renegotiating a fresh connection`
        );
      } else {
        this.reportDisconnected(error);
      }

      if (!planned) {
        const dropped = this.active;
        this.active = undefined;
        await dropped?.connection.stop().catch(() => undefined);
      }

      const previous = planned ? this.active : undefined;
      const next = await this.reconnect({ keepServing: planned }, error);
      if (!next) return; // stopped while backing off

      closed = next.closed;
      this._status = 'ready';
      if (planned) {
        if (
          previous &&
          this.retiring.get(previous.gen) === previous.connection
        ) {
          void this.retire(previous);
          this.log.info(
            `socket-mode[${this.geo}]: token rotated; inbound delivery continues for this geo`
          );
        } else {
          this.log.info(
            `socket-mode[${this.geo}]: reconnected; inbound delivery resumed for this geo`
          );
          this.deps.onReconnected();
        }
      } else {
        this.log.info(`socket-mode[${this.geo}]: reconnected; inbound delivery resumed for this geo`);
        this.deps.onReconnected();
      }
    }
  }

  private whenAborted(): { promise: Promise<undefined>; dispose: () => void } {
    const signal = this.deps.getAbortSignal();
    if (!signal || signal.aborted) {
      return { promise: Promise.resolve(undefined), dispose: () => undefined };
    }
    let onAbort!: () => void;
    const promise = new Promise<undefined>((resolve) => {
      onAbort = () => resolve(undefined);
      signal.addEventListener('abort', onAbort, { once: true });
    });
    return { promise, dispose: () => signal.removeEventListener('abort', onAbort) };
  }

  private async reconnect(
    options: { keepServing: boolean },
    prevError?: Error
  ): Promise<{ closed: Promise<CloseReason> } | undefined> {
    let attempt = 0;
    let retryAfterMs = this.deps.retryAfterOf(prevError);

    while (this.deps.isAccepting()) {
      const delay = retryAfterMs ?? this.deps.backoffDelay(attempt);
      attempt++;
      const slept = await this.deps.sleep(delay);
      if (!slept || !this.deps.isAccepting()) return undefined;

      if (!options.keepServing) {
        this._status = 'connecting';
      }
      const gen = ++this.generation;
      try {
        return await this.connectCycle(gen);
      } catch (err: any) {
        retryAfterMs = this.deps.retryAfterOf(err);
        this.log.warn(`socket-mode[${this.geo}]: reconnect attempt ${attempt} failed; will retry`, err);
      }
    }
    return undefined;
  }

  private reportDisconnected(error?: Error): void {
    this._status = 'disconnected';
    if (error) {
      this.log.warn(
        `socket-mode[${this.geo}]: disconnected; inbound delivery paused for this geo`,
        error
      );
    } else {
      this.log.warn(
        `socket-mode[${this.geo}]: disconnected; inbound delivery paused for this geo`
      );
    }
    this.deps.onDisconnected(error);
  }

  /** Retire a superseded socket after APX's cached IDs have aged out. */
  private async retire(previous: ActiveConnection): Promise<void> {
    const slept = await this.deps.sleep(CONNECTION_HANDOFF_MS);
    if (
      !slept ||
      this.retiring.get(previous.gen) !== previous.connection
    ) {
      return;
    }
    this.retiring.delete(previous.gen);
    await previous.connection.stop().catch(() => undefined);
  }

  private scheduleTokenRefresh(
    gen: number,
    expiresInSeconds: number | undefined,
    triggerRefresh: () => void
  ): void {
    this.clearRefreshTimer();
    if (!expiresInSeconds || expiresInSeconds <= 0) return;

    const delay = Math.max(expiresInSeconds * 1000 - this.deps.tokenRefreshMarginMs, 1_000);
    this.refreshTimer = setTimeout(() => {
      if (!this.deps.isAccepting() || gen !== this.active?.gen) return;
      this.log.info(`socket-mode[${this.geo}]: proactively renegotiating before token expiry`);
      triggerRefresh();
    }, delay);
    this.refreshTimer.unref?.();
  }

  private clearRefreshTimer(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = undefined;
    }
  }
}
