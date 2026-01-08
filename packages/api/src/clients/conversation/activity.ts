import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { Activity } from '../../activities';
import { Account, Resource } from '../../models';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';

export type ActivityParams = Pick<Activity, 'type'> & Partial<Activity>;

export class ConversationActivityClient {
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

  async create(conversationId: string, params: ActivityParams) {
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities`,
      params
    );
    return res.data;
  }

  async update(conversationId: string, id: string, params: ActivityParams) {
    const res = await this.http.put<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
      params
    );
    return res.data;
  }

  async reply(conversationId: string, id: string, params: ActivityParams) {
    params.replyToId = id;
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
      params
    );
    return res.data;
  }

  async delete(conversationId: string, id: string) {
    const res = await this.http.delete<void>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`
    );
    return res.data;
  }

  async getMembers(conversationId: string, id: string) {
    const res = await this.http.get<Account[]>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}/members`
    );
    return res.data;
  }
}
