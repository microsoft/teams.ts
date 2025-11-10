import * as http from '@microsoft/teams.common/http';

import { ApiClientSettings, mergeApiClientSettings } from './api-client-settings';
import { BotClient } from './bot';
import { ConversationClient } from './conversation';
import { MeetingClient } from './meeting';
import { TeamClient } from './team';
import { UserClient } from './user';

export class Client {
  readonly serviceUrl: string;
  readonly bots: BotClient;
  readonly users: UserClient;
  readonly conversations: ConversationClient;
  readonly teams: TeamClient;
  readonly meetings: MeetingClient;

  get http() {
    return this._http;
  }
  set http(v) {
    this.bots.http = v;
    this.conversations.http = v;
    this.users.http = v;
    this.teams.http = v;
    this.meetings.http = v;
    this._http = v;
  }
  protected _http: http.Client;
  protected _apiClientSettings: Partial<ApiClientSettings>;

  constructor(serviceUrl: string, options?: http.Client | http.ClientOptions, apiClientSettings?: Partial<ApiClientSettings>) {
    this.serviceUrl = serviceUrl;

    if (!options) {
      this._http = new http.Client();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new http.Client({
        ...options,
        headers: {
          ...options?.headers,
          'Content-Type': 'application/json',
        },
      });
    }

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings);

    this.bots = new BotClient(this.http, this._apiClientSettings);
    this.users = new UserClient(this.http, this._apiClientSettings);
    this.conversations = new ConversationClient(serviceUrl, this.http, this._apiClientSettings);
    this.teams = new TeamClient(serviceUrl, this.http, this._apiClientSettings);
    this.meetings = new MeetingClient(serviceUrl, this.http, this._apiClientSettings);
  }
}

export * from './user';
export * from './bot';
export * from './conversation';
export * from './meeting';
export * from './team';
export * from './api-client-settings';
