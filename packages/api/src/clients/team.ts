import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { ChannelInfo, TeamDetails } from '../models';

import { ApiClientSettings, mergeApiClientSettings } from './api-client-settings';

export class TeamClient {
  readonly serviceUrl: string;

  get http() {
    return this._http;
  }
  set http(v) {
    this._http = v;
  }
  protected _http: Client;
  protected _apiClientSettings: Partial<ApiClientSettings>;

  constructor(serviceUrl: string, options?: Client | ClientOptions, apiClientSettings?: Partial<ApiClientSettings>) {
    this.serviceUrl = serviceUrl;

    if (!options) {
      this._http = new Client();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new Client(options);
    }

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings);
  }

  async getById(id: string) {
    const res = await this.http.get<TeamDetails>(`${this.serviceUrl}/v3/teams/${id}`);
    return res.data;
  }

  async getConversations(id: string) {
    const res = await this.http.get<ChannelInfo[]>(
      `${this.serviceUrl}/v3/teams/${id}/conversations`
    );
    return res.data;
  }
}
