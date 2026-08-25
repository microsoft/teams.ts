import { CloudEnvironment, Credentials, InvokeResponse } from '@microsoft/teams.api';

import { IActivityEvent } from '../events';

/**
 * Dependencies supplied to a server when the App initializes it. Transport-agnostic.
 */
export type IServerInitializeDeps = {
  readonly credentials?: Credentials;
  readonly cloud?: CloudEnvironment;
};

/**
 * Transport-agnostic inbound server contract. An App drives exactly one IServer
 * for inbound activity delivery; HTTP-specific concerns live on {@link IHttpServer}.
 */
export interface IServer {
  /**
   * Literal tag identifying the concrete transport (HTTP uses `'http'`).
   * Enables constant-time narrowing to a specific server interface instead of
   * brittle structural checks.
   */
  readonly transport: string;

  /** Callback the App sets to process an inbound activity and return its response. */
  onRequest?: (event: IActivityEvent) => Promise<InvokeResponse>;

  /** Initialize the server with app-level dependencies. Called by App.initialize(). */
  initialize(deps: IServerInitializeDeps): Promise<void>;

  /** Start the server. Called by App.start(). `port` is transport-specific and may be ignored. */
  start(port?: number | string): Promise<void>;

  /** Stop the server. Called by App.stop(). */
  stop(): Promise<void>;
}
