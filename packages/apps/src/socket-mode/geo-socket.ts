import { ILogger } from '@microsoft/teams.common';

import { readField } from './envelope';
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

type SocketGeneration = {
  readonly gen: number;
  readonly connection: ISocketConnection;
  readonly inFlight: Set<{ readonly deadline: number }>;
  graceEndsAt?: number;
  drainTimer?: ReturnType<typeof setTimeout>;
};

/** Internal callbacks and settings required by one geo supervisor. */
export type GeoSocketDeps = {
  readonly isAccepting: () => boolean;
  readonly getAbortSignal: () => AbortSignal | undefined;
  readonly createConnection: (
    negotiateUrl: string,
    handlers: SocketConnectionHandlers,
    /** Live predecessor ID lookup for planned refreshes only. */
    getConnectionIdToReplace?: () => string | undefined
  ) => ISocketConnection;
  readonly dispatch: (
    envelope: SocketActivityEnvelope
  ) => Promise<ReplyFrame | undefined>;
  readonly retryAfterOf: (error: unknown) => number | undefined;
  /** `true` for errors (negotiate 401/403) that retrying cannot fix. */
  readonly isNonRetryable: (error: unknown) => boolean;
  readonly backoffDelay: (attempt: number) => number;
  readonly sleep: (ms: number) => Promise<boolean>;
  readonly onReady: (frame: SocketReadyFrame) => void;
  readonly onDisconnected: (error: Error | undefined, terminal: boolean) => void;
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
  private active?: SocketGeneration;
  /** Prior generations serving cached deliveries and draining SDK replies. */
  private readonly retiring = new Map<number, SocketGeneration>();
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

  /** Accept frames from the active socket and its draining predecessors. */
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
        if (this.deps.isNonRetryable(err)) {
          // Thrown to App.start(), which reports it through the app `error` event.
          this.log.debug(
            `socket-mode[${this.geo}]: initial connection rejected with a non-retryable error; not retrying`
          );
          throw err;
        }
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
    const connections = this.releaseConnections();
    await Promise.all(
      connections.map((connection) => connection.stop().catch(() => undefined))
    );
    await this.supervisorLoop?.catch(() => undefined);
    this._status = 'stopped';
  }

  private async connectCycle(
    gen: number,
    replaces?: SocketGeneration
  ): Promise<{ closed: Promise<CloseReason> }> {
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
      onActivity: async (envelope) => {
        const arrivedAt = Date.now();
        if (!this.canDispatch(gen)) {
          this.log.debug(
            'socket-mode: dropping activity received outside the active connection state'
          );
          return undefined;
        }
        const deadlineMs = readField(envelope, 'deadlineMs');
        let deadline = arrivedAt;
        if (deadlineMs !== undefined) {
          if (typeof deadlineMs === 'number' && Number.isFinite(deadlineMs) && deadlineMs >= 0) {
            deadline += deadlineMs;
          } else {
            this.log.warn('socket-mode: invalid deadlineMs; no drain budget beyond the cache grace');
          }
        }
        const activity = { deadline };
        current.inFlight.add(activity);
        this.scheduleDrain(current);
        try {
          return await this.deps.dispatch(envelope);
        } finally {
          current.inFlight.delete(activity);
          this.scheduleDrain(current);
        }
      },
      onReady: (frame) => {
        if (this.active && this.active.gen !== gen) {
          this.retire(this.active);
        }
        this.active = current;
        // Observers reading aggregate status from the ready event must see the
        // settled value rather than the previous connecting state.
        this._status = 'ready';
        this.deps.onReady(frame);
      },
      onClosed: (error) => {
        this.clearDrain(current);
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

    const connection = this.deps.createConnection(
      this.negotiateUrl,
      handlers,
      replaces
        ? () => {
          if (!this.deps.isAccepting() || this.active !== replaces || !replaces.connection.isOpen) {
            return undefined;
          }
          const expiresAtMs = replaces.connection.expiresAtMs;
          if (expiresAtMs !== undefined && Date.now() >= expiresAtMs) {
            return undefined;
          }
          return replaces.connection.connectionId;
        }
        : undefined
    );

    const current: SocketGeneration = { gen, connection, inFlight: new Set() };
    await connection.start(this.deps.getAbortSignal());
    this.scheduleTokenRefresh(gen, connection, () =>
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
      const next = await this.reconnect({ keepServing: planned, replaces: previous }, error);
      if (!next) return; // stopped while backing off

      closed = next.closed;
      this._status = 'ready';
      if (planned) {
        if (previous?.graceEndsAt !== undefined) {
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
    options: { keepServing: boolean; replaces?: SocketGeneration },
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
        return await this.connectCycle(gen, options.replaces);
      } catch (err: any) {
        // Negotiate isn't abortable, so a rejection can land after stop().
        if (!this.deps.isAccepting()) return undefined;
        if (this.deps.isNonRetryable(err)) {
          await this.stopAfterNonRetryable(err);
          return undefined;
        }
        retryAfterMs = this.deps.retryAfterOf(err);
        this.log.warn(`socket-mode[${this.geo}]: reconnect attempt ${attempt} failed; will retry`, err);
      }
    }
    return undefined;
  }

  /**
   * Stop reconnecting after a 401/403: close every connection this geo owns
   * (including a predecessor still serving during a planned rotation and any
   * sockets in their handoff window), then report the outage with the auth
   * error so listeners can see why delivery stopped.
   */
  private async stopAfterNonRetryable(error: Error): Promise<void> {
    this.log.error(
      `socket-mode[${this.geo}]: reconnect rejected with a non-retryable error; ` +
      'inbound delivery for this geo has stopped until the app is restarted',
      error
    );
    this.clearRefreshTimer();
    // Clear before stopping so their onClosed callbacks do not report again.
    const connections = this.releaseConnections();
    await Promise.all(
      connections.map((connection) => connection.stop().catch(() => undefined))
    );
    // stop() may have landed while the connections were closing.
    if (!this.deps.isAccepting()) return;
    this.reportDisconnected(error);
  }

  /**
   * Mark this geo disconnected and emit the event. A non-retryable error means
   * the geo has stopped for good; it skips the "paused" warning because
   * {@link stopAfterNonRetryable} already logged the permanent stop.
   */
  private reportDisconnected(error?: Error): void {
    this._status = 'disconnected';
    const terminal = error !== undefined && this.deps.isNonRetryable(error);
    if (!terminal) {
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
    }
    this.deps.onDisconnected(error, terminal);
  }

  private retire(previous: SocketGeneration): void {
    previous.graceEndsAt = Date.now() + CONNECTION_HANDOFF_MS;
    this.retiring.set(previous.gen, previous);
    this.scheduleDrain(previous);
  }

  private scheduleDrain(previous: SocketGeneration): void {
    if (this.retiring.get(previous.gen) !== previous || previous.graceEndsAt === undefined) return;
    clearTimeout(previous.drainTimer);
    let closeAt = previous.graceEndsAt;
    for (const activity of previous.inFlight) {
      closeAt = Math.max(closeAt, activity.deadline);
    }
    // Even an empty drain closes on a timer, outside the SDK reply callback.
    // Clamp the timer's range, not the message's deadline.
    const delay = Math.min(Math.max(0, closeAt - Date.now()), 2_147_483_647);
    previous.drainTimer = setTimeout(() => {
      previous.drainTimer = undefined;
      if (!this.deps.isAccepting() || this.retiring.get(previous.gen) !== previous) return;
      if (Date.now() < closeAt) {
        this.scheduleDrain(previous);
        return;
      }
      this.retiring.delete(previous.gen);
      this.clearDrain(previous);
      void previous.connection.stop().catch((error) => {
        this.log.warn(`socket-mode[${this.geo}]: failed to stop a retired socket`, error);
      });
    }, delay);
    previous.drainTimer.unref?.();
  }

  private clearDrain(current: SocketGeneration): void {
    clearTimeout(current.drainTimer);
    current.drainTimer = undefined;
    current.inFlight.clear();
  }

  private releaseConnections(): ISocketConnection[] {
    const connections = [this.active, ...this.retiring.values()].filter(
      (current): current is SocketGeneration => current !== undefined
    );
    this.active = undefined;
    this.retiring.clear();
    for (const current of connections) this.clearDrain(current);
    return connections.map((current) => current.connection);
  }

  private scheduleTokenRefresh(
    gen: number,
    connection: ISocketConnection,
    triggerRefresh: () => void
  ): void {
    this.clearRefreshTimer();
    const { expiresInSeconds, expiresAtMs } = connection;
    if (!expiresInSeconds || expiresInSeconds <= 0) return;

    const remainingMs = expiresAtMs === undefined ? expiresInSeconds * 1000 : expiresAtMs - Date.now();
    const delay = Math.max(remainingMs - this.deps.tokenRefreshMarginMs, 1_000);
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
