import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { CloudEnvironment } from '../auth/cloud-environment';
import { AgenticUser } from '../models';

import { ApiClientSettings, mergeApiClientSettings } from './api-client-settings';
import {
  ensureApiOutboundTelemetryMiddleware
} from './api-outbound-middleware';
import { AuthProvider } from './auth';
import { createAuthProviderTokenFactory } from './auth-provider-token';
import { BotClient } from './bot';
import { ConversationClient } from './conversation';
import { MeetingClient } from './meeting';
import { ReactionClient } from './reaction';
import { normalizeServiceUrl } from './service-url';
import { TeamClient } from './team';
import { UserClient } from './user';

/**
 * Options for creating a scoped API client from an existing client.
 */
export type ApiClientCloneOptions = Omit<Partial<ApiClientSettings>, 'agenticUser'> & {
  /**
   * Service URL for the scoped client. Defaults to the current client's service URL.
   */
  readonly serviceUrl?: string;

  /**
   * `undefined` preserves the current client default; `null` clears it.
   */
  readonly agenticUser?: AgenticUser | null;
};

/**
 * Options for creating a scoped API client for a specific Bot Framework service URL.
 */
export type ApiClientFromServiceUrlOptions = {
  /**
   * Service URL for the scoped client.
   */
  readonly serviceUrl: string;
};

/**
 * Options for creating a scoped API client for a specific Agentic User.
 */
export type ApiClientFromAgenticUserOptions = {
  /**
   * Agentic User identity used by the scoped client when acquiring auth tokens.
   */
  readonly agenticUser: AgenticUser;
};

export class Client {
  readonly serviceUrl: string;
  readonly bots: BotClient;
  readonly users: UserClient;
  readonly conversations: ConversationClient;
  readonly teams: TeamClient;
  readonly meetings: MeetingClient;
  readonly reactions: ReactionClient;

  get http() {
    return this._http;
  }
  set http(v) {
    const http = this.prepareHttpClient(v);
    this.bots.http = http;
    this.users.http = http;
    this.conversations.http = http;
    this.teams.http = http;
    this.meetings.http = http;
    this.reactions.http = http;
    this._http = http;
  }
  protected _http: HttpClient;
  protected _baseHttp!: HttpClient;
  protected _apiClientSettings: Partial<ApiClientSettings>;
  protected _authProvider?: AuthProvider;
  protected _cloud?: CloudEnvironment;
  protected _defaultAgenticUser?: AgenticUser;

  constructor(
    serviceUrl: string,
    httpOptions?: HttpClient | HttpClientOptions,
    apiClientSettings?: Partial<ApiClientSettings>,
  ) {
    this.serviceUrl = normalizeServiceUrl(serviceUrl);
    this._cloud = apiClientSettings?.cloud;
    this._authProvider = apiClientSettings?.authProvider;
    this._defaultAgenticUser = apiClientSettings?.agenticUser;

    if (!httpOptions) {
      this._http = this.prepareHttpClient(new HttpClient());
    } else if ('request' in httpOptions) {
      this._http = this.prepareHttpClient(httpOptions);
    } else {
      this._http = this.prepareHttpClient(new HttpClient({
        ...httpOptions,
        headers: {
          ...httpOptions?.headers,
          'Content-Type': 'application/json',
        },
      }));
    }

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings, this._cloud);

    this.bots = new BotClient(this.http, this._apiClientSettings, this._cloud);
    this.users = new UserClient(this.http, this._apiClientSettings, this._cloud);
    this.conversations = new ConversationClient(this.serviceUrl, this.http, this._apiClientSettings);
    this.teams = new TeamClient(this.serviceUrl, this.http, this._apiClientSettings);
    this.meetings = new MeetingClient(this.serviceUrl, this.http, this._apiClientSettings);
    this.reactions = new ReactionClient(this.serviceUrl, this.http, this._apiClientSettings);
  }

  /**
   * Create a scoped API client that reuses this client's HTTP configuration and auth provider.
   */
  clone(options: ApiClientCloneOptions = {}): Client {
    const { serviceUrl, agenticUser, ...apiClientSettings } = options;
    const http = this._baseHttp.clone();
    if (this._authProvider) {
      http.token = undefined;
    }

    return new Client(
      serviceUrl ?? this.serviceUrl,
      http,
      {
        ...this._apiClientSettings,
        ...apiClientSettings,
        ...(agenticUser === undefined ? {} : { agenticUser: agenticUser ?? undefined }),
      }
    );
  }

  /**
   * Create a scoped API client for the provided Agentic User identity.
   */
  forAgenticUser(agenticUser: AgenticUser): Client {
    return this.fromAgenticUser({ agenticUser });
  }

  /**
   * Create a scoped API client for the provided Agentic User identity.
   */
  fromAgenticUser(options: ApiClientFromAgenticUserOptions): Client {
    return this.clone(options);
  }

  /**
   * Create a scoped API client for the provided Bot Framework service URL.
   */
  fromServiceUrl(options: ApiClientFromServiceUrlOptions): Client {
    return this.clone(options);
  }

  private prepareHttpClient(http: HttpClient): HttpClient {
    if (this._authProvider && http.token !== undefined) {
      throw new Error('Cannot use both an auth provider and an HTTP client token.');
    }

    ensureApiOutboundTelemetryMiddleware(http);
    if (this._authProvider) {
      http.token = createAuthProviderTokenFactory(this._authProvider, this._defaultAgenticUser);
    }

    this._baseHttp = http;
    return http;
  }

}

export * from './user';
export * from './bot';
export * from './conversation';
export * from './meeting';
export * from './reaction';
export * from './team';
export * from './api-client-settings';
export * from './auth';
