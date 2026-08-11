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
 * for its inbound activity delivery, regardless of the underlying transport
 * (HTTP today; other transports may implement this interface). HTTP-specific
 * concerns live on the derived {@link IHttpServer}.
 */
export interface IServer {
  /**
   * Callback the App sets to process an inbound activity and return the invoke
   * response. Set by the App during construction.
   */
  onRequest?: (event: IActivityEvent) => Promise<InvokeResponse>;

  /** Initialize the server with app-level dependencies. Called by App.initialize(). */
  initialize(deps: IServerInitializeDeps): Promise<void>;

  /** Start the server. Called by App.start(). `port` is transport-specific and may be ignored. */
  start(port?: number | string): Promise<void>;

  /** Stop the server. Called by App.stop(). */
  stop(): Promise<void>;
}
