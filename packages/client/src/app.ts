import * as msal from '@azure/msal-browser';
import * as http from '@microsoft/spark.common/http';
import { ILogger, ConsoleLogger } from '@microsoft/spark.common/logging';
import * as teamsJs from '@microsoft/teams-js';

import { acquireMsalAccessToken, buildMsalConfig } from './msal-utils';

export type MsalOptions = {
  /**
   * Optional MSAL configuration. This parameter is used to construct an MSAL instance in order
   * to make authenticated function calls. If omitted, a default configuration is created.
   */
  readonly configuration?: msal.Configuration;
  /**
   * Default token request options used when acquiring a token.
   */
  readonly defaultSilentRequest?: msal.SilentRequest;
};

export type AppOptions = {
  /**
   * The app base url.
   */
  readonly baseUrl?: string;

  /** App tenant ID */
  readonly tenantId?: string;

  /**
   * Logger instance to use.
   */
  readonly logger?: ILogger;

  /**
   * Options to control how MSAL is initialized and used.
   */
  readonly msalOptions?: MsalOptions;
};

type AppState =
  | {
      phase: 'stopped' | 'starting';
      startedAt?: never;
      msalInstance?: never;
      context?: never;
    }
  | {
      phase: 'started';
      startedAt: Date;
      msalInstance: msal.IPublicClientApplication;
      context: teamsJs.app.Context;
    };

export class App {
  readonly options: AppOptions;
  readonly http: http.Client;
  readonly clientId: string;
  protected _state: AppState = { phase: 'stopped' };

  /**
   * the apps logger
   */
  get log() {
    return this._log;
  }
  protected _log: ILogger;

  /**
   * the date/time when the app was successfully started.
   */
  get startedAt() {
    return this._state?.startedAt;
  }

  /** the msal instance used in this app. undefined until the app is started. */
  get msalInstance() {
    return this._state.msalInstance;
  }

  constructor(clientId: string, options: AppOptions = {}) {
    if (!clientId) {
      throw new Error('Invalid client ID.');
    }

    this.clientId = clientId;
    this.options = options;
    this._log = options?.logger || new ConsoleLogger('@spark/client');
    this.http = new http.Client({ baseUrl: options?.baseUrl });
  }

  /**
   * Starts the library and initializes the dependent teams-js and MSAL libraries.
   * @returns A promise that will be fulfilled when the app has started, or
   *          rejected if the initialization fails or times out.
   */
  async start(): Promise<void> {
    if (this._state.phase !== 'stopped') {
      this._log.debug(`app already ${this._state.phase}`);
      return;
    }

    this._log.debug('app starting');
    this._state = { phase: 'starting' };

    await teamsJs.app.initialize();
    const context = await teamsJs.app.getContext();

    const msalConfig =
      this.options.msalOptions?.configuration ?? buildMsalConfig(this.clientId, this._log);
    const msalInstance = await msal.createNestablePublicClientApplication(msalConfig);
    await msalInstance.initialize();

    this._state = { phase: 'started', msalInstance, context, startedAt: new Date() };
    this._log.debug('app started');
  }

  /**
   * Execute a server-side function
   * @param name The unique function name
   * @param data The data to send
   * @param options Options
   * @param options.msalTokenRequest Optional MSAL token request.
   * If omitted, a default token request is used.
   * @param options.requestHeaders Optional additional request headers.
   * @returns The function response
   */
  async exec<T = unknown>(
    name: string,
    data?: unknown,
    options?: { msalTokenRequest?: msal.SilentRequest; requestHeaders?: Record<string, string> }
  ): Promise<T> {
    if (this._state.phase !== 'started') {
      throw new Error('App not started');
    }

    const { context } = this._state;
    const accessToken = await acquireMsalAccessToken(
      this._state.msalInstance,
      options?.msalTokenRequest ?? this.options.msalOptions?.defaultSilentRequest,
      this._log
    );

    const res = await this.http.post<T>(`/api/functions/${name}`, data, {
      headers: {
        'x-spark-app-id': context.app.appId?.toString(),
        'x-spark-app-session-id': context.app.sessionId,
        'x-spark-app-client-id': this.clientId,
        'x-spark-app-tenant-id': this.options.tenantId,
        'x-spark-tenant-id': context.user?.tenant?.id,
        'x-spark-user-id': context.user?.id,
        'x-spark-team-id': context.team?.internalId,
        'x-spark-message-id': context.app.parentMessageId,
        'x-spark-channel-id': context.channel?.id,
        'x-spark-chat-id': context.chat?.id,
        'x-spark-meeting-id': context.meeting?.id,
        'x-spark-page-id': context.page.id,
        'x-spark-sub-page-id': context.page.subPageId,
        authorization: `Bearer ${accessToken}`,
        ...(options?.requestHeaders ?? {}),
      },
    });

    return res.data;
  }
}
