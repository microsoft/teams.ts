import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { Activity } from '../../activities';
import { resolveAadObjectId, Resource, TeamsChannelAccount } from '../../models';
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

  async create(conversationId: string, params: ActivityParams) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities`,
      params
    );
    return res.data;
  }

  async update(conversationId: string, id: string, params: ActivityParams) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const res = await this.http.put<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
      params
    );
    return res.data;
  }

  async reply(conversationId: string, id: string, params: ActivityParams) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    params.replyToId = id;
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
      params
    );
    return res.data;
  }

  async delete(conversationId: string, id: string) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const res = await this.http.delete<void>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`
    );
    return res.data;
  }

  async getMembers(conversationId: string, id: string): Promise<TeamsChannelAccount[]> {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const res = await this.http.get<TeamsChannelAccount[]>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}/members`
    );
    return (res.data ?? []).map(resolveAadObjectId);
  }

  async createTargeted(conversationId: string, params: ActivityParams) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities?isTargetedActivity=true`,
      params
    );
    return res.data;
  }

  async updateTargeted(conversationId: string, id: string, params: ActivityParams) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const res = await this.http.put<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`,
      params
    );
    return res.data;
  }

  async deleteTargeted(conversationId: string, id: string) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const res = await this.http.delete<void>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`
    );
    return res.data;
  }
}
