import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { CloudEnvironment } from '../auth/cloud-environment';

import { ApiClientSettings, mergeApiClientSettings } from './api-client-settings';
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
    this.bots.http = v;
    this.conversations.http = v;
    this.users.http = v;
    this.teams.http = v;
    this.meetings.http = v;
    this.reactions.http = v;
    this._http = v;
  }
  protected _http: HttpClient;
  protected _apiClientSettings: Partial<ApiClientSettings>;

  constructor(serviceUrl: string, options?: HttpClient | HttpClientOptions, apiClientSettings?: Partial<ApiClientSettings>, cloud?: CloudEnvironment) {
    this.serviceUrl = serviceUrl;

    if (!options) {
      this._http = new HttpClient();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new HttpClient({
        ...options,
        headers: {
          ...options?.headers,
          'Content-Type': 'application/json',
        },
      });
    }

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings, cloud);

    this.bots = new BotClient(this.http, this._apiClientSettings);
    this.users = new UserClient(this.http, this._apiClientSettings);
    this.conversations = new ConversationClient(serviceUrl, this.http, this._apiClientSettings);
    this.teams = new TeamClient(serviceUrl, this.http, this._apiClientSettings);
    this.meetings = new MeetingClient(serviceUrl, this.http, this._apiClientSettings);
    this.reactions = new ReactionClient(serviceUrl, this.http, this._apiClientSettings);
  }
}

export * from './user';
export * from './bot';
export * from './conversation';
export * from './meeting';
export * from './reaction';
export * from './team';
export * from './api-client-settings';
