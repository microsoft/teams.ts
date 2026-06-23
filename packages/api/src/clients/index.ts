import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { CloudEnvironment } from '../auth/cloud-environment';

import { ApiClientSettings, mergeApiClientSettings } from './api-client-settings';
import { AuthProvider } from './auth';
import { AuthProviderInterceptor } from './auth-provider-interceptor';
import { BotClient } from './bot';
import { ConversationClient } from './conversation';
import { MeetingClient } from './meeting';
import { ReactionClient } from './reaction';
import { TeamClient } from './team';
import { UserClient } from './user';

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
    const http = this.withAuthProvider(v);
    this.bots.http = http;
    this.conversations.http = http;
    this.users.http = http;
    this.teams.http = http;
    this.meetings.http = http;
    this.reactions.http = http;
    this._http = http;
  }
  protected _http: HttpClient;
  protected _apiClientSettings: Partial<ApiClientSettings>;
  protected _authProvider?: AuthProvider;
  protected _cloud?: CloudEnvironment;

  constructor(
    serviceUrl: string,
    options?: HttpClient | HttpClientOptions,
    apiClientSettings?: Partial<ApiClientSettings>,
    cloud?: CloudEnvironment,
    authProvider?: AuthProvider
  ) {
    this.serviceUrl = serviceUrl;
    this._cloud = cloud;
    this._authProvider = authProvider;

    if (!options) {
      this._http = this.withAuthProvider(new HttpClient());
    } else if ('request' in options) {
      this._http = this.withAuthProvider(options);
    } else {
      this._http = this.withAuthProvider(new HttpClient({
        ...options,
        headers: {
          ...options?.headers,
          'Content-Type': 'application/json',
        },
      }));
    }

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings, cloud);

    this.bots = new BotClient(this.http, this._apiClientSettings, cloud);
    this.users = new UserClient(this.http, this._apiClientSettings, cloud);
    this.conversations = new ConversationClient(serviceUrl, this.http, this._apiClientSettings);
    this.teams = new TeamClient(serviceUrl, this.http, this._apiClientSettings);
    this.meetings = new MeetingClient(serviceUrl, this.http, this._apiClientSettings);
    this.reactions = new ReactionClient(serviceUrl, this.http, this._apiClientSettings);
  }

  protected withAuthProvider(http: HttpClient): HttpClient {
    if (!this._authProvider) {
      return http;
    }

    const hasInterceptor = http.interceptors.some((interceptor) => interceptor instanceof AuthProviderInterceptor);
    if (hasInterceptor) {
      return http;
    }

    http.use(new AuthProviderInterceptor(this._authProvider, this._cloud));
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
export * from './auth-provider-interceptor';
