import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { ChannelInfo, TeamDetails } from '../models';

import { ApiClientSettings, mergeApiClientSettings } from './api-client-settings';
import { agenticIdentityExtension, RequestOptions, resolveServiceUrl } from './request-options';

function requestConfig(options?: RequestOptions): Record<string, unknown> | undefined {
  const config = agenticIdentityExtension(options);
  return Object.keys(config).length > 0 ? config : undefined;
}

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
    this.serviceUrl = resolveServiceUrl(serviceUrl);

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
    const config = requestConfig(options);
    const res = config
      ? await this.http.get<TeamDetails>(url, config)
      : await this.http.get<TeamDetails>(url);
    return res.data;
  }

  async getConversations(id: string, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/teams/${id}/conversations`;
    const config = requestConfig(options);
    const res = config
      ? await this.http.get<{ conversations: ChannelInfo[] }>(url, config)
      : await this.http.get<{ conversations: ChannelInfo[] }>(url);
    return res.data.conversations;
  }
}
