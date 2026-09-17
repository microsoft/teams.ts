import { ILogger } from '@microsoft/teams.common';

import type { SocketModeAdapter } from './socket-mode-adapter';
import {
  ISocketConnection,
  SocketConnectionHandlers,
  SocketModeStatus,
} from './types';

/**
 * Distinguishes expected token rotation from an unexpected connection drop.
 */
type CloseReason = { planned: true } | { planned: false; error?: Error };

/**
 * Supervises one Socket Mode connection for a single geo, including readiness,
 * reconnection, and proactive token refresh.
 */
export class GeoSocket {
  /** Monotonic connection generation that fences out superseded connections. */
  private generation = 0;
  private currentGen = 0;
  /** The generation that has satisfied `SocketReady`; `-1` when none is ready. */
  private readyGen = -1;
  private connection?: ISocketConnection;
  private supervisorLoop?: Promise<void>;
  private refreshTimer?: ReturnType<typeof setTimeout>;
  private _status: SocketModeStatus = 'idle';
  /** Settles when the current connection terminates and drives the supervisor. */
  private closed: Promise<CloseReason> = Promise.resolve({ planned: false });

  constructor(
    private readonly adapter: SocketModeAdapter,
    readonly geo: string,
    private readonly negotiateUrl: string,
    private readonly log: ILogger
  ) {}

  get status(): SocketModeStatus {
    return this._status;
  }

  /** The dispatch fence: current generation, ready, and the adapter is accepting. */
  canDispatch(gen: number): boolean {
    return this.adapter.accepting && gen === this.currentGen && this.readyGen === gen;
  }

  /**
   * Establish the initial connection within the configured startup budget.
   */
  async startInitial(): Promise<void> {
    this._status = 'connecting';
    const deadline = Date.now() + this.adapter.startupTimeoutMs;
    let attempt = 0;
    let lastError: Error | undefined;

    this.log.debug(
      `socket-mode[${this.geo}]: starting initial connection with a ${this.adapter.startupTimeoutMs}ms startup budget`
    );
    while (this.adapter.accepting) {
      const gen = ++this.generation;
      this.currentGen = gen;
      try {
        this.closed = (await this.connectCycle(gen)).closed;
        this._status = 'ready';
        this.log.debug(`socket-mode[${this.geo}]: initial connection is ready`);
        return;
      } catch (err: any) {
        lastError = err;
        if (!this.adapter.accepting) break;
        const delay = this.adapter.retryAfterOf(err) ?? this.adapter.backoffDelay(attempt);
        attempt++;
        if (Date.now() + delay >= deadline) break;
        this.log.warn(
          `socket-mode[${this.geo}]: initial connect attempt ${attempt} failed; retrying in ${delay}ms`,
          err
        );
        const slept = await this.adapter.sleep(delay);
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

  /** Stop token refresh, the current connection, and the reconnect supervisor. */
  async stop(): Promise<void> {
    this.clearRefreshTimer();
    const connection = this.connection;
    this.connection = undefined;
    if (connection) {
      await connection.stop().catch(() => undefined);
    }
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
      onActivity: (envelope) => this.adapter.dispatch(this, gen, envelope),
      onReady: (frame) => {
        this.readyGen = gen;
        // Observers reading aggregate status from the ready event must see the
        // settled value rather than the previous connecting state.
        this._status = 'ready';
        this.adapter.emit('ready', { geo: this.geo, frame });
      },
      onClosed: (error) => {
        this.clearRefreshTimer();
        settle({ planned: false, error });
      },
    };

    const connection = this.adapter.createConnection(this.negotiateUrl, handlers);
    this.connection = connection;

    await connection.start(this.adapter.abortSignal);
    this.scheduleTokenRefresh(gen, connection.expiresInSeconds, () =>
      settle({ planned: true })
    );
    return { closed };
  }

  private async supervise(): Promise<void> {
    let closed = this.closed;
    while (this.adapter.accepting) {
      const aborted = this.whenAborted();
      let reason: CloseReason;
      try {
        reason = (await Promise.race([closed, aborted.promise])) ?? { planned: false };
      } finally {
        // Avoid accumulating one abort listener per reconnect generation.
        aborted.dispose();
      }
      if (!this.adapter.accepting) return;

      const planned = reason.planned === true;
      const error = reason.planned ? undefined : reason.error;

      this.readyGen = -1;
      if (planned) {
        // Token rotation is expected, so it does not emit a false disconnect.
        this._status = 'connecting';
        this.log.info(
          `socket-mode[${this.geo}]: proactively rotating token; renegotiating a fresh connection`
        );
      } else {
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
        this.adapter.emit('disconnected', { geo: this.geo, error });
      }

      await this.connection?.stop().catch(() => undefined);

      const next = await this.reconnect(error);
      if (!next) return; // stopped while backing off

      closed = next.closed;
      this._status = 'ready';
      if (planned) {
        this.log.info(`socket-mode[${this.geo}]: token rotated; inbound delivery continues for this geo`);
      } else {
        this.log.info(`socket-mode[${this.geo}]: reconnected; inbound delivery resumed for this geo`);
        this.adapter.emit('reconnected', { geo: this.geo });
      }
    }
  }

  private whenAborted(): { promise: Promise<undefined>; dispose: () => void } {
    const signal = this.adapter.abortSignal;
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

  private async reconnect(prevError?: Error): Promise<{ closed: Promise<CloseReason> } | undefined> {
    let attempt = 0;
    let retryAfterMs = this.adapter.retryAfterOf(prevError);

    while (this.adapter.accepting) {
      const delay = retryAfterMs ?? this.adapter.backoffDelay(attempt);
      attempt++;
      const slept = await this.adapter.sleep(delay);
      if (!slept || !this.adapter.accepting) return undefined;

      this._status = 'connecting';
      const gen = ++this.generation;
      this.currentGen = gen;
      try {
        return await this.connectCycle(gen);
      } catch (err: any) {
        retryAfterMs = this.adapter.retryAfterOf(err);
        this.log.warn(`socket-mode[${this.geo}]: reconnect attempt ${attempt} failed; will retry`, err);
      }
    }
    return undefined;
  }

  private scheduleTokenRefresh(
    gen: number,
    expiresInSeconds: number | undefined,
    triggerRefresh: () => void
  ): void {
    this.clearRefreshTimer();
    if (!expiresInSeconds || expiresInSeconds <= 0) return;

    const delay = Math.max(expiresInSeconds * 1000 - this.adapter.tokenRefreshMarginMs, 1_000);
    this.refreshTimer = setTimeout(() => {
      if (!this.adapter.accepting || gen !== this.currentGen) return;
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
