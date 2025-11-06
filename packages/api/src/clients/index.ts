import * as http from '@microsoft/teams.common/http';

import { BotClient } from './bot';
import { ConversationClient } from './conversation';
import { MeetingClient } from './meeting';
import { TeamClient } from './team';
import { UserClient } from './user';
import { ClientSettings, DEFAULT_CLIENT_SETTINGS } from './client-settings';

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
  protected _clientSettings: ClientSettings;

  constructor(serviceUrl: string, options?: http.Client | http.ClientOptions, clientSettings?: ClientSettings) {
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

    this._clientSettings = clientSettings ?? DEFAULT_CLIENT_SETTINGS;

    this.bots = new BotClient(this.http, this._clientSettings);
    this.users = new UserClient(this.http, this._clientSettings);
    this.conversations = new ConversationClient(serviceUrl, this.http);
    this.teams = new TeamClient(serviceUrl, this.http);
    this.meetings = new MeetingClient(serviceUrl, this.http);
  }
}

export * from './user';
export * from './bot';
export * from './conversation';
export * from './meeting';
export * from './team';
export * from './client-settings';
