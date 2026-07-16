import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { CloudEnvironment } from '../auth/cloud-environment';
import { AgenticIdentity } from '../models';

import { ApiClientSettings, mergeApiClientSettings } from './api-client-settings';
import { AuthProvider } from './auth';
import { AuthProviderInterceptor } from './auth-provider-interceptor';
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
export type ApiClientCloneOptions = Omit<Partial<ApiClientSettings>, 'agenticIdentity'> & {
  /**
   * Service URL for the scoped client. Defaults to the current client's service URL.
   */
  readonly serviceUrl?: string;

  /**
   * `undefined` preserves the current client default; `null` clears it.
   */
  readonly agenticIdentity?: AgenticIdentity | null;
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
export type ApiClientFromAgenticIdentityOptions = {
  /**
   * Agentic User identity used by the scoped client when acquiring auth tokens.
   */
  readonly agenticIdentity: AgenticIdentity;
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
  protected _http: HttpClient;
  protected _baseHttp!: HttpClient;
  protected _apiClientSettings: Partial<ApiClientSettings>;
  protected _authProvider?: AuthProvider;
  protected _cloud?: CloudEnvironment;
  protected _defaultAgenticIdentity?: AgenticIdentity;

  constructor(
    serviceUrl: string,
    httpOptions?: HttpClient | HttpClientOptions,
    apiClientSettings?: Partial<ApiClientSettings>,
  ) {
    this.serviceUrl = normalizeServiceUrl(serviceUrl);
    this._cloud = apiClientSettings?.cloud;
    this._authProvider = apiClientSettings?.authProvider;
    this._defaultAgenticIdentity = apiClientSettings?.agenticIdentity;

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
    const { serviceUrl, agenticIdentity, ...apiClientSettings } = options;
    return new Client(
      serviceUrl ?? this.serviceUrl,
      this._baseHttp.clone(),
      {
        ...this._apiClientSettings,
        ...apiClientSettings,
        ...(agenticIdentity === undefined ? {} : { agenticIdentity: agenticIdentity ?? undefined }),
      }
    );
  }

  /**
   * Create a scoped API client for the provided Agentic User identity.
   */
  forAgenticIdentity(agenticIdentity: AgenticIdentity): Client {
    return this.fromAgenticIdentity({ agenticIdentity });
  }

  /**
   * Create a scoped API client for the provided Agentic User identity.
   */
  fromAgenticIdentity(options: ApiClientFromAgenticIdentityOptions): Client {
    return this.clone(options);
  }

  /**
   * Create a scoped API client for the provided Bot Framework service URL.
   */
  fromServiceUrl(options: ApiClientFromServiceUrlOptions): Client {
    return this.clone(options);
  }

  private prepareHttpClient(http: HttpClient): HttpClient {
    const authProviderInterceptors = this.authProviderInterceptors(http);
    const authenticatedHttp = authProviderInterceptors.every((interceptor) => this.isMatchingAuthProviderInterceptor(interceptor))
      ? http
      : this.cloneWithoutAuthProvider(http);

    this._baseHttp = this.cloneWithoutAuthProvider(authenticatedHttp);
    return this.withAuthProvider(authenticatedHttp);
  }

  private withAuthProvider(http: HttpClient): HttpClient {
    if (!this._authProvider) {
      return http;
    }

    const hasInterceptor = http.interceptors.some((interceptor) => interceptor instanceof AuthProviderInterceptor);
    if (hasInterceptor) {
      return http;
    }

    http.use(new AuthProviderInterceptor(this._authProvider, this._defaultAgenticIdentity));
    return http;
  }

  private authProviderInterceptors(http: HttpClient): AuthProviderInterceptor[] {
    return http.interceptors.filter((interceptor) => interceptor instanceof AuthProviderInterceptor);
  }

  private isMatchingAuthProviderInterceptor(interceptor: AuthProviderInterceptor): boolean {
    return interceptor.authProvider === this._authProvider &&
      interceptor.defaultAgenticIdentity === this._defaultAgenticIdentity;
  }

  private cloneWithoutAuthProvider(http: HttpClient): HttpClient {
    const clone = http.clone();
    const interceptors = clone.interceptors.filter((interceptor) => !(interceptor instanceof AuthProviderInterceptor));

    if (interceptors.length === clone.interceptors.length) {
      return clone;
    }

    clone.clear();
    for (const interceptor of interceptors) {
      clone.use(interceptor);
    }
    return clone;
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
export * from './auth-provider-interceptor';
