import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { HttpMethod, HttpRouteHandler, IHttpServerAdapter, IHttpServerInitializeDeps } from '../http/adapter';

/**
 * **Experimental / transitional.** An {@link IHttpServerAdapter} that fans out to
 * several child adapters at once, so a single {@link HttpServer} can receive
 * inbound activities over more than one transport — an HTTP messaging endpoint
 * (`ExpressAdapter`) and Socket Mode (`SocketModeAdapter`) — at the same time.
 *
 * Used only during the Socket Mode rollout: the Teams backend service decides
 * which transport delivers each activity, so the SDK just needs to receive on
 * both. There's no fallback logic or health state — route registrations and
 * static-file mounts fan out to every child, and each delivers what it receives
 * into the shared {@link HttpServer} pipeline. The Teams backend service delivers
 * each activity over exactly one transport, so there is no double-processing.
 *
 * Lifecycle: {@link start} starts each child in array order (HTTP first, then the
 * socket) so the messaging endpoint is listening before the socket dials out;
 * each child owns its own connect/retry behavior (the Socket Mode adapter retries
 * internally up to its startup budget), and this adapter adds none. If a child
 * fails to start the error propagates so `App.start()` fails and tears the app
 * down rather than coming up half-started. {@link stop} stops every child with
 * `allSettled` so one failing teardown never skips another's, then re-throws the
 * first failure.
 *
 * Internal, expected to be removed once Socket Mode is the sole transport. It is
 * deliberately **not** exported from the public barrel.
 *
 * @experimental This API is in preview and may change in the future.
 */
export class CompositeAdapter implements IHttpServerAdapter {
  private readonly log: ILogger;

  /**
   * @param adapters child adapters, in start order. Put the always-listening
   *   HTTP adapter first and the Socket Mode adapter after it, so the messaging
   *   endpoint is up before the socket negotiates.
   * @param logger defaults to a `CompositeAdapter`-tagged console logger.
   */
  constructor(
    private readonly adapters: readonly IHttpServerAdapter[],
    logger?: ILogger
  ) {
    this.log = logger ?? new ConsoleLogger('CompositeAdapter');
  }

  /** Forward seam initialization to every child adapter that needs it. */
  async initialize(deps: IHttpServerInitializeDeps): Promise<void> {
    for (const adapter of this.adapters) {
      await adapter.initialize?.(deps);
    }
  }

  /** Register the route on every child adapter. */
  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler): void {
    for (const adapter of this.adapters) {
      adapter.registerRoute(method, path, handler);
    }
  }

  /** Mount the static directory on every child adapter that serves static files. */
  serveStatic(path: string, directory: string): void {
    for (const adapter of this.adapters) {
      adapter.serveStatic?.(path, directory);
    }
  }

  /**
   * Start each child in array order (HTTP first, then the socket). A child's
   * start failure propagates immediately so `App.start()` fails rather than
   * coming up with only some transports live.
   */
  async start(port: number | string): Promise<void> {
    this.log.debug(`socket-mode: starting ${this.adapters.length} composite transport adapter(s)`);
    for (const adapter of this.adapters) {
      if (adapter.start) {
        await adapter.start(port);
      }
    }
  }

  /**
   * Stop every child. Uses `allSettled` so a failure tearing down one transport
   * never skips another's teardown; the first error is re-thrown once all have
   * been stopped.
   */
  async stop(): Promise<void> {
    const results = await Promise.allSettled(
      this.adapters.map((adapter) => adapter.stop?.() ?? Promise.resolve())
    );
    const failure = results.find((r): r is PromiseRejectedResult => r.status === 'rejected');
    if (failure) {
      throw failure.reason;
    }
  }
}
