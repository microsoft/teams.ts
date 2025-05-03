import * as msal from '@azure/msal-browser';

import * as teamsJs from '@microsoft/teams-js';
import * as http from '@microsoft/teams.common/http';
import { ILogger, ConsoleLogger } from '@microsoft/teams.common/logging';
import * as graph from '@microsoft/teams.graph';

import { buildGraphClient } from './graph-utils';
import {
  acquireMsalAccessToken,
  buildMsalConfig,
  getStandardExecSilentRequest,
  hasConsentForScopes,
} from './msal-utils';

/**
 * Options to control how MSAL is initialized and used.
 */
export type MsalOptions = (
  | {
      /**
       * MSAL instance to use when making authenticated function calls to remote endpoints.
       * This is useful if you want to use a custom MSAL instance or if you want to share the
       * same MSAL instance across multiple apps.
       */
      readonly msalInstance?: msal.IPublicClientApplication;
      readonly configuration?: never;
    }
  | {
      readonly msalInstance?: never;
      /**
       * MSAL configuration to use when constructing an MSAL instance used
       * to make authenticated function calls to remote endpoints. */
      readonly configuration?: msal.Configuration;
    }
) & {
  /**
   * Options to control scope consent pre-warming. If explicitly set to false, no pre-warming is performed.
   * If no value is provided, the default scope (i.e. ".default") is pre-warmed. If a set of scopes is
   * provided, the specified scopes are pre-warmed. The scopes should be for a single resource, and they
   * should not mix the .default scope with named scopes.
   */
  readonly prewarmScopes?: false | string[];
};

export type RemoteApiOptions = {
  /**
   * The remote API base URL. If omitted, it's assumed that the remote API is hosted in the same domain as the app.
   */
  readonly baseUrl?: string;

  /**
   * The default resource name when building a token request for the Entra token to include when invoking
   * a remote function. This is useful when the API is hosted in an different AAD app from
   * the caller and is typically in the format 'api://<remoteAppClientId>'.
   * When invoking @see exec with default options or a permission name,
   * this value is used to build a token request in the format of '<remoteAppResource>/<permission>'.
   * If omitted, it's assumed that the API is hosted in the same AAD app as the caller, and the
   * token request is made for 'api://<clientId>/permission'.
   */
  readonly remoteAppResource?: string;
};

export type AppOptions = {
  /**
   * Logger instance to use.
   */
  readonly logger?: ILogger;

  /**
   * Options to control how MSAL is initialized and used.
   */
  readonly msalOptions?: MsalOptions;

  /** Options to control how remote APIs are invoked. */
  readonly remoteApiOptions?: RemoteApiOptions;
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

/**
 * ExecOptions is used to specify options for the exec method.
 */
export type ExecOptions = (
  | { readonly msalTokenRequest?: msal.SilentRequest; readonly permission?: never }
  | { readonly msalTokenRequest?: never; readonly permission?: string }
) & {
  readonly requestHeaders?: Record<string, string>;
};

/**
 * The main entry point for this library. This class streamlines Microsoft Teams app development
 * by simplifying the process of managing authentication, interacting with Microsoft Graph APIs,
 * and executing server-side functions.
 */
export class App {
  readonly options: AppOptions;
  readonly http: http.Client;
  readonly graph: graph.Client;
  readonly clientId: string;
  protected _state: AppState = { phase: 'stopped' };

  /**
   * The apps logger
   */
  get log() {
    return this._log;
  }
  protected _log: ILogger;

  /**
   * The date/time when the app was successfully started.
   */
  get startedAt() {
    return this._state?.startedAt;
  }

  /** The msal instance used in this app. undefined until the app is started. */
  get msalInstance() {
    return this._state.msalInstance;
  }

  constructor(clientId: string, options: AppOptions = {}) {
    if (!clientId) {
      throw new Error('Invalid client ID.');
    }

    this.clientId = clientId;
    this.options = options;
    this._log = options?.logger || new ConsoleLogger('@teams/client');
    this.http = new http.Client({ baseUrl: options?.remoteApiOptions?.baseUrl });
    this.graph = buildGraphClient(() => this.appStateGuard(), this._log);
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

    let msalInstance = this.options.msalOptions?.msalInstance;
    if (!msalInstance) {
      const msalConfig =
        this.options.msalOptions?.configuration ?? buildMsalConfig(this.clientId, this._log);
      msalInstance = await msal.createNestablePublicClientApplication(msalConfig);
      await msalInstance.initialize();
    }

    this._state = { phase: 'started', msalInstance, context, startedAt: new Date() };

    // pre-warm consent for the specified scopes
    if (this.options.msalOptions?.prewarmScopes !== false) {
      const scopes = this.options.msalOptions?.prewarmScopes ?? ['.default'];
      this._log.debug(`prewarming consent for scopes: ${scopes.join(', ')}`);
      await this.ensureConsentForScopes(scopes);
    }

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
  async exec<T = unknown>(name: string, data?: unknown, options?: ExecOptions): Promise<T> {
    const { msalInstance, context } = this.appStateGuard();

    const remoteAppResource =
      this.options.remoteApiOptions?.remoteAppResource ?? `api://${this.clientId}`;
    const accessToken = await acquireMsalAccessToken(
      msalInstance,
      options?.msalTokenRequest ??
        getStandardExecSilentRequest(remoteAppResource, options?.permission),
      this._log
    );

    const res = await this.http.post<T>(`/api/functions/${name}`, data, {
      headers: {
        authorization: `Bearer ${accessToken}`,
        'x-teams-app-session-id': context.app.sessionId,
        'x-teams-channel-id': context.channel?.id,
        'x-teams-chat-id': context.chat?.id,
        'x-teams-meeting-id': context.meeting?.id,
        'x-teams-message-id': context.app.parentMessageId,
        'x-teams-page-id': context.page.id,
        'x-teams-sub-page-id': context.page.subPageId,
        'x-teams-team-id': context.team?.internalId,
        ...(options?.requestHeaders ?? {}),
      },
    });

    return res.data;
  }

  /**
   * Tests whether the user has consented to the specified scopes without prompting the user for consent.
   * @param scopes The scopes to check consent for.The scopes should be for a single resource, and they
   * should not mix the .default scope with named scopes.
   * @returns A promise that resolves to a boolean indicating whether the user has consented to the scopes.
   */
  async hasConsentForScopes(scopes: string[]): Promise<boolean> {
    const { msalInstance } = this.appStateGuard();

    return await hasConsentForScopes(msalInstance, scopes, this.log);
  }

  /**
   * Tests whether the user has consented to the specified scopes, and prompts them if not. This is useful for ensuring
   * that the user has consented to the required scopes before calling a graph API or other resource.
   * @param scopes - The scopes to prewarm consent for. The scopes should be for a single resource, and they
   * should not mix the .default scope with named scopes.
   * @returns A value indicating whether consent has been acquired for the specified scopes.
   */
  async ensureConsentForScopes(scopes: string[]): Promise<boolean> {
    const { msalInstance } = this.appStateGuard();

    try {
      const token = await acquireMsalAccessToken(msalInstance, { scopes }, this.log);
      return !!token;
    } catch (ex) {
      return false;
    }
  }

  private appStateGuard(): AppState & { phase: 'started' } {
    if (this._state.phase !== 'started') {
      throw new Error('App not started');
    }
    return this._state;
  }
}
