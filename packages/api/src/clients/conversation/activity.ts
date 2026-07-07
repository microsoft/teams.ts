import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { Activity } from '../../activities';
import { resolveAadObjectId, Resource, TeamsChannelAccount } from '../../models';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';
import { agenticIdentityExtension, RequestOptions, resolveServiceUrl } from '../request-options';

export type ActivityParams = Pick<Activity, 'type'> & Partial<Activity>;

export class ConversationActivityClient {
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

  async create(conversationId: string, params: ActivityParams, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/activities`;
    const res = await this.http.post<Resource>(url, params, agenticIdentityExtension(options));
    return res.data;
  }

  async update(conversationId: string, id: string, params: ActivityParams, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/activities/${id}`;
    const res = await this.http.put<Resource>(url, params, agenticIdentityExtension(options));
    return res.data;
  }

  async reply(conversationId: string, id: string, params: ActivityParams, options?: RequestOptions) {
    params.replyToId = id;
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/activities/${id}`;
    const res = await this.http.post<Resource>(url, params, agenticIdentityExtension(options));
    return res.data;
  }

  async delete(conversationId: string, id: string, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/activities/${id}`;
    const res = await this.http.delete<void>(url, agenticIdentityExtension(options));
    return res.data;
  }

  async getMembers(conversationId: string, id: string, options?: RequestOptions): Promise<TeamsChannelAccount[]> {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/activities/${id}/members`;
    const res = await this.http.get<TeamsChannelAccount[]>(url, agenticIdentityExtension(options));
    return (res.data ?? []).map(resolveAadObjectId);
  }

  async createTargeted(conversationId: string, params: ActivityParams, options?: RequestOptions<'serviceUrl'>) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/activities?isTargetedActivity=true`;
    const res = await this.http.post<Resource>(url, params);
    return res.data;
  }

  async updateTargeted(conversationId: string, id: string, params: ActivityParams, options?: RequestOptions<'serviceUrl'>) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`;
    const res = await this.http.put<Resource>(url, params);
    return res.data;
  }

  async deleteTargeted(conversationId: string, id: string, options?: RequestOptions<'serviceUrl'>) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`;
    const res = await this.http.delete<void>(url);
    return res.data;
  }
}
