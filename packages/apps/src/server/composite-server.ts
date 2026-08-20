import { InvokeResponse } from '@microsoft/teams.api';
import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { IActivityEvent } from '../events';

import { IServer, IServerInitializeDeps } from './server';

/**
 * **Experimental / transitional.** An {@link IServer} that runs two inbound
 * transports concurrently — a primary (Socket Mode) server and a secondary
 * (HTTP messaging endpoint) server — and presents them to the App as a single
 * server.
 *
 * This exists only during the Socket Mode rollout: the **service (APX)** decides
 * which transport delivers a given inbound activity, so the SDK simply needs to
 * be ready to receive on both. There is no SDK-side fallback logic, health
 * monitoring, or "degraded" state — each child server just forwards whatever
 * activities it receives into the shared app pipeline via {@link onRequest}.
 * APX delivers a given activity over exactly one transport, so there is no
 * double-processing to guard against.
 *
 * Lifecycle notes:
 * - {@link initialize} and {@link stop} fan out to both children.
 * - {@link start} starts the secondary (HTTP) server first so the messaging
 *   endpoint is listening, then starts the primary (socket) server. A failure
 *   starting the **primary** is **non-fatal**: it is logged and swallowed so the
 *   HTTP endpoint keeps serving inbound activities. A failure starting the
 *   **secondary** propagates (the HTTP endpoint is the reliable baseline).
 * - {@link onRequest} is fanned out to both children, so each transport feeds the
 *   same {@link IActivityEvent} into the app pipeline.
 *
 * This class is internal and is expected to be removed once Socket Mode becomes
 * the sole inbound transport. It intentionally does **not** implement
 * {@link IHttpServer}, so browser-dependent features (`app.tab()`,
 * `app.function()`, OAuth redirect callbacks) stay disabled exactly as they are
 * in socket-only mode — the inner HTTP server is a messaging-inbound sink only.
 */
export class CompositeServer implements IServer {
  /** Transport discriminant identifying this as the composite server. */
  readonly transport = 'composite' as const;

  private readonly log: ILogger;
  private _onRequest?: (event: IActivityEvent) => Promise<InvokeResponse>;

  /**
   * @param primary the primary inbound transport (Socket Mode). A failure to
   *   start it is non-fatal — the composite keeps serving over {@link secondary}.
   * @param secondary the secondary inbound transport (HTTP messaging endpoint),
   *   used as the always-listening baseline the service can deliver to.
   * @param logger logger to use; defaults to a `CompositeServer`-tagged console
   *   logger.
   */
  constructor(
    private readonly primary: IServer,
    private readonly secondary: IServer,
    logger?: ILogger
  ) {
    this.log = logger ?? new ConsoleLogger('CompositeServer');
  }

  /**
   * The callback the App sets to process an inbound activity. Setting it here
   * fans the same callback out to both child servers so either transport can
   * drive the shared pipeline.
   */
  get onRequest(): ((event: IActivityEvent) => Promise<InvokeResponse>) | undefined {
    return this._onRequest;
  }

  set onRequest(value: ((event: IActivityEvent) => Promise<InvokeResponse>) | undefined) {
    this._onRequest = value;
    this.primary.onRequest = value;
    this.secondary.onRequest = value;
  }

  /** Initialize both child servers with the app-level dependencies. */
  async initialize(deps: IServerInitializeDeps): Promise<void> {
    await this.secondary.initialize(deps);
    await this.primary.initialize(deps);
  }

  /**
   * Start the secondary (HTTP) server first so the messaging endpoint is
   * listening, then start the primary (socket) server. A primary start failure
   * is non-fatal — logged and swallowed so the HTTP endpoint keeps serving.
   */
  async start(port?: number | string): Promise<void> {
    await this.secondary.start(port);

    try {
      await this.primary.start(port);
    } catch (error: any) {
      this.log.warn(
        'Primary inbound transport failed to start; continuing with the HTTP ' +
        'messaging endpoint. The service can still deliver inbound activities ' +
        'over HTTP.',
        error
      );
    }
  }

  /** Stop both child servers. */
  async stop(): Promise<void> {
    await Promise.all([this.primary.stop(), this.secondary.stop()]);
  }
}
