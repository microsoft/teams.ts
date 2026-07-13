import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { ChannelInfo, TeamDetails } from '../models';

import { ApiClientSettings, mergeApiClientSettings } from './api-client-settings';
import { normalizeServiceUrl } from './service-url';

export class TeamClient {
  readonly serviceUrl: string;

  get http() {
    return this._http;
  }
  set http(v) {
    this._http = v;
  }
  protected _http: HttpClient;
  protected _apiClientSettings: Partial<ApiClientSettings>;

  constructor(serviceUrl: string, options?: HttpClient | HttpClientOptions, apiClientSettings?: Partial<ApiClientSettings>) {
    this.serviceUrl = normalizeServiceUrl(serviceUrl);

    if (!options) {
      this._http = new HttpClient();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new HttpClient(options);
    }

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings);
  }

  async getById(id: string) {
    const url = `${this.serviceUrl}/v3/teams/${id}`;
    const res = await this.http.get<TeamDetails>(url);
    return res.data;
  }

  async getConversations(id: string) {
    const url = `${this.serviceUrl}/v3/teams/${id}/conversations`;
    const res = await this.http.get<{ conversations: ChannelInfo[] }>(url);
    return res.data.conversations;
  }
}
