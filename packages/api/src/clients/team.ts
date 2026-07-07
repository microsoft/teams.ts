import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { ChannelInfo, TeamDetails } from '../models';

import { ApiClientSettings, mergeApiClientSettings } from './api-client-settings';
import { agenticIdentityExtension, RequestOptions, resolveServiceUrl } from './request-options';

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
    this.serviceUrl = serviceUrl;

    if (!options) {
      this._http = new HttpClient();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new HttpClient(options);
    }

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings);
  }

  async getById(id: string, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/teams/${id}`;
    const res = await this.http.get<TeamDetails>(url, agenticIdentityExtension(options));
    return res.data;
  }

  async getConversations(id: string, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/teams/${id}/conversations`;
    const res = await this.http.get<{ conversations: ChannelInfo[] }>(url, agenticIdentityExtension(options));
    return res.data.conversations;
  }
}
