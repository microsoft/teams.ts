import { ILogger } from '@microsoft/teams.common';

import { App } from '../app';
import { IPlugin } from '../types';

import { Backoff, BackoffOptions, sleep } from './backoff';
import { ISocketActivityEnvelope, isActivityEnvelope } from './envelope';
import {
  NegotiateResult,
  NegotiateRoute,
  NegotiateUnavailableError,
  negotiate,
} from './negotiate';
import { ISocketModeClient, SocketModeClient } from './socket-mode-client';
import { synthesizeToken } from './synthesize-token';

export type SocketModeOptions = {
  /** Cloud route variant. Default `{ kind: 'global' }`. */
  readonly route?: NegotiateRoute;
  /**
   * Number of concurrent WSS connections per process.
   * Default `1`. Range `[1, 10]`.
   *
   * APX dispatches via Azure SignalR group fan-out — every session for the same
   * `botKey` receives every event. So extra connections give active-active redundancy
   * inside a single process, NOT load distribution (see §5.7 of the proposal doc).
   *
   * When > 1, the SDK automatically enables `dedupe` because duplicates are guaranteed.
   */
  readonly connections?: number;
  /** Fraction of `expiresIn` at which to re-negotiate the SignalR token. Default 0.8. */
  readonly renegotiateAt?: number;
  /** Backoff config for negotiate/reconnect retries. */
  readonly backoff?: BackoffOptions;
  /**
   * Deduplicate envelopes by envelopeId across all connections.
   * Auto-enabled when `connections > 1`. Default `false` for a single connection.
   */
  readonly dedupe?: boolean;
  /**
   * Continue running if `/v3/websockets/connect` returns 503 (socket mode unavailable).
   * When true, `start()` resolves without an active socket; the App's HTTP path still works.
   * When false, `start()` rejects. Default true.
   */
  readonly fallbackOn503?: boolean;
  /** Test seam: inject a fake `ISocketModeClient` as slot 0's client (only honored when `connections === 1`). */
  readonly client?: ISocketModeClient;
  /** Test seam: build the `ISocketModeClient` for each slot. Takes precedence over `client`. */
  readonly clientFactory?: (slotIndex: number) => ISocketModeClient;
};

export type SocketModeEvents = {
  connected: (info: { sessionId: string; connectionId?: string; slot: number }) => void;
  reconnecting: (info: { slot: number; err?: Error }) => void;
  reconnected: (info: { slot: number; connectionId?: string }) => void;
  closed: (info: { slot: number; err?: Error }) => void;
  renegotiated: (info: { sessionId: string; expiresIn: number; slot: number }) => void;
  envelope: (env: { envelopeId: string; cv?: string; type: string; slot: number; duplicate: boolean }) => void;
  unavailable: (info: { status: number; message: string; slot: number }) => void;
};

const DEFAULT_RENEGOTIATE_AT = 0.8;
const DEDUPE_MAX = 1024;
const MIN_CONNECTIONS = 1;
const MAX_CONNECTIONS = 10;

type Listener<K extends keyof SocketModeEvents> = SocketModeEvents[K];

/**
 * One concurrent WSS connection. Each slot has its own client, session id, expiry,
 * re-negotiate timer, and reconnect backoff. The parent SocketModeApp coordinates
 * the slots and shares dedup state across them.
 */
type Slot = {
  readonly index: number;
  client: ISocketModeClient;
  sessionId?: string;
  expiry: number;
  renegotiateTimer?: ReturnType<typeof setTimeout>;
  backoff: Backoff;
};

/**
 * Drop-in replacement for `app.start()` that adds Azure SignalR Socket Mode delivery
 * for event-style activities. The App's HTTP server still runs (for invokes, OAuth
 * callbacks, tabs, and remote functions).
 *
 * @example
 *   const app = new App();
 *   app.on('message', async ({ activity, send }) => {
 *     await send({ type: 'message', text: `echo: ${activity.text}` });
 *   });
 *   const sm = new SocketModeApp(app);
 *   await sm.start();
 */
export class SocketModeApp<TPlugin extends IPlugin = IPlugin> {
  readonly app: App<TPlugin>;

  /**
   * The most recently negotiated session id (slot 0 in single-connection mode).
   * For multi-connection mode, see `sessionIds`.
   */
  sessionId?: string;
  /** Session ids indexed by slot. Mirrors `sessionId` for slot 0. */
  sessionIds: Array<string | undefined> = [];
  /** Last `cv` (correlation vector) observed on any inbound envelope. */
  lastCv?: string;

  private readonly opts: {
    readonly route: NegotiateRoute;
    readonly connections: number;
    readonly renegotiateAt: number;
    readonly backoff?: BackoffOptions;
    readonly dedupe: boolean;
    readonly fallbackOn503: boolean;
  };
  private readonly log: ILogger;
  private readonly clientFactory: (slotIndex: number) => ISocketModeClient;
  private slots: Slot[] = [];
  private started = false;
  private stopping = false;
  private seenEnvelopeIds = new Set<string>();
  private envelopeOrder: string[] = [];
  private listeners: { [K in keyof SocketModeEvents]?: Array<Listener<K>> } = {};

  constructor(app: App<TPlugin>, options: SocketModeOptions = {}) {
    this.app = app;
    this.log = app.log.child('SocketMode');

    const connections = options.connections ?? 1;
    if (
      !Number.isInteger(connections) ||
      connections < MIN_CONNECTIONS ||
      connections > MAX_CONNECTIONS
    ) {
      throw new Error(
        `SocketModeApp: connections must be an integer in [${MIN_CONNECTIONS}, ${MAX_CONNECTIONS}], got ${String(connections)}`,
      );
    }

    this.opts = {
      route: options.route ?? { kind: 'global' },
      connections,
      renegotiateAt: options.renegotiateAt ?? DEFAULT_RENEGOTIATE_AT,
      backoff: options.backoff,
      // Auto-enable dedup when running multiple sockets — APX fan-out delivers each
      // envelope to every session, so duplicates are guaranteed.
      dedupe: options.dedupe ?? (connections > 1),
      fallbackOn503: options.fallbackOn503 ?? true,
    };

    // Resolve client factory. `client` is honored only for the single-connection case
    // to preserve back-compat with existing tests; `clientFactory` is the multi-conn path.
    if (options.clientFactory) {
      this.clientFactory = options.clientFactory;
    } else if (options.client && connections === 1) {
      const injected = options.client;
      let used = false;
      this.clientFactory = () => {
        if (!used) {
          used = true;
          return injected;
        }
        return new SocketModeClient();
      };
    } else {
      this.clientFactory = () => new SocketModeClient();
    }
  }

  on<K extends keyof SocketModeEvents>(name: K, cb: Listener<K>): this {
    const list = (this.listeners[name] ?? []) as Array<Listener<K>>;
    list.push(cb);
    (this.listeners as Record<string, unknown>)[name as string] = list;
    return this;
  }

  /**
   * Boot the App (initialize plugins, start HTTP server) AND open the Socket Mode WebSocket(s).
   * Drop-in replacement for `app.start()` — do NOT also call `app.start()`.
   */
  async start(port?: number | string): Promise<void> {
    if (this.started) return;
    this.started = true;
    this.stopping = false;

    // Boot the App: plugin onInit, plugin onStart, HTTP server bind.
    // The HTTP server keeps handling invokes / OAuth callbacks / tabs / remote functions.
    await this.app.start(port);

    // Create slots up front so handlers can reference them.
    this.slots = [];
    this.sessionIds = new Array<string | undefined>(this.opts.connections);
    for (let i = 0; i < this.opts.connections; i++) {
      const slot: Slot = {
        index: i,
        client: this.clientFactory(i),
        expiry: 0,
        backoff: new Backoff(this.opts.backoff),
      };
      this.wireClient(slot);
      this.slots.push(slot);
    }

    // Open all slots in parallel. We don't rethrow per-slot failures here — each slot's
    // own reconnect/backoff loop handles transient errors. If `fallbackOn503` is false
    // and ALL slots get a 503, surface that to the caller.
    const results = await Promise.allSettled(
      this.slots.map((s) => this.negotiateAndConnect(s)),
    );

    if (!this.opts.fallbackOn503) {
      const allUnavailable =
        results.length > 0 &&
        results.every(
          (r) =>
            r.status === 'rejected' && r.reason instanceof NegotiateUnavailableError,
        );
      if (allUnavailable) {
        const firstReason = (results[0] as PromiseRejectedResult).reason as NegotiateUnavailableError;
        throw firstReason;
      }
    }
  }

  /** Close all sockets and stop the underlying App. */
  async stop(): Promise<void> {
    if (!this.started) return;
    this.stopping = true;
    this.started = false;

    for (const slot of this.slots) {
      if (slot.renegotiateTimer) {
        clearTimeout(slot.renegotiateTimer);
        slot.renegotiateTimer = undefined;
      }
    }

    await Promise.allSettled(
      this.slots.map(async (s) => {
        try {
          await s.client.disconnect();
        } catch (err) {
          this.log.warn(`socket disconnect failed (slot ${s.index})`, err);
        }
      }),
    );

    this.slots = [];
    await this.app.stop();
  }

  // -----------------------------------------------------------------------------------------
  // Internals
  // -----------------------------------------------------------------------------------------

  private wireClient(slot: Slot): void {
    slot.client.onActivity((env) => this.handleEnvelope(slot, env));
    slot.client.onClose((err) => this.handleClose(slot, err));
    slot.client.onReconnecting((err) => this.emit('reconnecting', { slot: slot.index, err }));
    slot.client.onReconnected((id) => this.emit('reconnected', { slot: slot.index, connectionId: id }));
  }

  private async negotiateAndConnect(slot: Slot): Promise<void> {
    while (!this.stopping) {
      try {
        const result = await this.negotiateOnce();
        await slot.client.connect(result.url, result.accessToken);
        slot.sessionId = result.sessionId;
        slot.expiry = Date.now() + result.expiresIn * 1000;
        slot.backoff.reset();
        this.sessionIds[slot.index] = result.sessionId;
        if (slot.index === 0) this.sessionId = result.sessionId;
        this.emit('connected', {
          sessionId: result.sessionId,
          connectionId: slot.client.connectionId,
          slot: slot.index,
        });
        this.scheduleRenegotiate(slot, result.expiresIn);
        return;
      } catch (err: unknown) {
        if (err instanceof NegotiateUnavailableError) {
          this.log.warn(`socket mode unavailable (slot ${slot.index}): ${err.message}`);
          this.emit('unavailable', { status: err.status, message: err.message, slot: slot.index });
          if (this.opts.fallbackOn503) return;
          throw err;
        }
        const delayMs = slot.backoff.next();
        this.log.warn(
          `negotiate failed (slot ${slot.index}), retrying in ${delayMs}ms`,
          (err as Error)?.message ?? err,
        );
        await sleep(delayMs);
      }
    }
  }

  private async negotiateOnce(): Promise<NegotiateResult> {
    const tokenObj = await this.app.tokenManager.getBotToken();
    if (!tokenObj) {
      throw new Error('SocketModeApp: App has no credentials configured');
    }
    return negotiate({
      client: this.app.client,
      serviceUrl: this.app.api.serviceUrl,
      route: this.opts.route,
      bearerToken: tokenObj.toString(),
    });
  }

  private scheduleRenegotiate(slot: Slot, expiresInSec: number): void {
    if (slot.renegotiateTimer) clearTimeout(slot.renegotiateTimer);
    const delayMs = Math.max(
      1000,
      Math.floor(expiresInSec * 1000 * this.opts.renegotiateAt),
    );
    slot.renegotiateTimer = setTimeout(() => {
      void this.renegotiate(slot);
    }, delayMs);
    // Don't hold the event loop open just for the timer.
    (slot.renegotiateTimer as unknown as { unref?: () => void }).unref?.();
  }

  private async renegotiate(slot: Slot): Promise<void> {
    if (this.stopping) return;
    try {
      const result = await this.negotiateOnce();
      // Make-before-break: bring up the new connection, then tear down the old one.
      const oldClient = slot.client;
      const newClient = this.clientFactory(slot.index);
      slot.client = newClient;
      this.wireClient(slot);
      await newClient.connect(result.url, result.accessToken);
      slot.sessionId = result.sessionId;
      slot.expiry = Date.now() + result.expiresIn * 1000;
      this.sessionIds[slot.index] = result.sessionId;
      if (slot.index === 0) this.sessionId = result.sessionId;
      this.emit('renegotiated', {
        sessionId: result.sessionId,
        expiresIn: result.expiresIn,
        slot: slot.index,
      });
      this.scheduleRenegotiate(slot, result.expiresIn);
      try {
        await oldClient.disconnect();
      } catch (err) {
        this.log.debug(`old socket disconnect failed (slot ${slot.index})`, err);
      }
    } catch (err: unknown) {
      this.log.warn(
        `renegotiate failed (slot ${slot.index}); will retry via close handler`,
        (err as Error)?.message ?? err,
      );
      // The existing connection will drop on token expiry; handleClose triggers full reconnect.
    }
  }

  private async handleEnvelope(slot: Slot, env: unknown): Promise<void> {
    if (!isActivityEnvelope(env)) {
      this.log.warn(`discarding non-activity envelope (slot ${slot.index})`, env);
      return;
    }
    const envelope: ISocketActivityEnvelope = env;
    this.lastCv = envelope.cv;

    const duplicate = this.opts.dedupe && this.envelopeAlreadySeen(envelope.envelopeId);
    this.emit('envelope', {
      envelopeId: envelope.envelopeId,
      cv: envelope.cv,
      type: envelope.type,
      slot: slot.index,
      duplicate,
    });

    if (duplicate) {
      this.log.debug(`dedup: dropping duplicate envelope ${envelope.envelopeId} (slot ${slot.index})`);
      return;
    }

    const activity = envelope.payload as Record<string, unknown>;
    if (!activity || typeof activity !== 'object') {
      this.log.warn(
        `envelope payload missing or non-object; discarding ${envelope.envelopeId} (slot ${slot.index})`,
      );
      return;
    }

    if (activity.type === 'invoke') {
      // Per platform v1, invokes always arrive on HTTPS — this branch shouldn't fire.
      // If it does (future platform change, mis-flighted dispatcher), route it anyway;
      // the response can't be sent back over the socket in v1, so it's just discarded.
      this.log.warn(
        `invoke received over socket mode (envelopeId=${envelope.envelopeId}). ` +
        'Invokes should arrive on HTTP. Routing anyway; response will be discarded.',
      );
    }

    const conv = activity.conversation as { tenantId?: string } | undefined;
    const serviceUrl =
      typeof activity.serviceUrl === 'string'
        ? activity.serviceUrl
        : this.app.api.serviceUrl;

    const token = synthesizeToken({
      clientId: this.app.credentials?.clientId,
      tenantId: conv?.tenantId ?? this.app.credentials?.tenantId,
      appDisplayName: this.app.name,
      serviceUrl,
      expirationMs: slot.expiry || Date.now() + 60 * 60 * 1000,
    });

    try {
      await this.app.onActivity({
        body: activity as { type?: string; id?: string; serviceUrl?: string },
        token,
      });
    } catch (err) {
      this.log.error(
        `error routing socket-delivered activity (envelopeId=${envelope.envelopeId})`,
        err,
      );
    }
  }

  private envelopeAlreadySeen(id: string): boolean {
    if (this.seenEnvelopeIds.has(id)) return true;
    this.seenEnvelopeIds.add(id);
    this.envelopeOrder.push(id);
    if (this.envelopeOrder.length > DEDUPE_MAX) {
      const evict = this.envelopeOrder.shift();
      if (evict) this.seenEnvelopeIds.delete(evict);
    }
    return false;
  }

  private handleClose(slot: Slot, err?: Error): void {
    this.emit('closed', { slot: slot.index, err });
    if (this.stopping) return;
    // Close after SignalR's automatic-reconnect attempts have exhausted, or
    // immediately on a 1008 (token expired). Negotiate fresh and reconnect just this slot.
    void this.fullReconnect(slot);
  }

  private async fullReconnect(slot: Slot): Promise<void> {
    if (slot.renegotiateTimer) {
      clearTimeout(slot.renegotiateTimer);
      slot.renegotiateTimer = undefined;
    }
    await this.negotiateAndConnect(slot);
  }

  private emit<K extends keyof SocketModeEvents>(
    name: K,
    ...args: Parameters<Listener<K>>
  ): void {
    const list = this.listeners[name];
    if (!list) return;
    for (const cb of list) {
      try {
        (cb as (...a: unknown[]) => void)(...(args as unknown[]));
      } catch (err) {
        this.log.error(`event listener for "${String(name)}" threw`, err);
      }
    }
  }
}
