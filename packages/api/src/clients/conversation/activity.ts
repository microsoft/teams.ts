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

  /**
   * @deprecated Use `conversations.createActivity(...)` instead. This will be
   * removed in a future release.
   */
  async create(conversationId: string, params: ActivityParams) {
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities`,
      params
    );
    return res.data;
  }

  /**
   * @deprecated Use `conversations.updateActivity(...)` instead. This will be
   * removed in a future release.
   */
  async update(conversationId: string, id: string, params: ActivityParams) {
    const res = await this.http.put<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
      params
    );
    return res.data;
  }

  /**
   * @deprecated Use `conversations.replyToActivity(...)` instead. This will be
   * removed in a future release.
   */
  async reply(conversationId: string, id: string, params: ActivityParams) {
    params.replyToId = id;
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
      params
    );
    return res.data;
  }

  /**
   * @deprecated Use `conversations.deleteActivity(...)` instead. This will be
   * removed in a future release.
   */
  async delete(conversationId: string, id: string) {
    const res = await this.http.delete<void>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`
    );
    return res.data;
  }

  /**
   * @deprecated Use `conversations.getActivityMembers(...)` instead. This will
   * be removed in a future release.
   */
  async getMembers(conversationId: string, id: string): Promise<TeamsChannelAccount[]> {
    const res = await this.http.get<TeamsChannelAccount[]>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}/members`
    );
    return (res.data ?? []).map(resolveAadObjectId);
  }

  /**
   * @deprecated Use `conversations.createTargetedActivity(...)` instead. This
   * will be removed in a future release.
   */
  async createTargeted(conversationId: string, params: ActivityParams) {
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities?isTargetedActivity=true`,
      params
    );
    return res.data;
  }

  /**
   * @deprecated Use `conversations.updateTargetedActivity(...)` instead. This
   * will be removed in a future release.
   */
  async updateTargeted(conversationId: string, id: string, params: ActivityParams) {
    const res = await this.http.put<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`,
      params
    );
    return res.data;
  }

  /**
   * @deprecated Use `conversations.deleteTargetedActivity(...)` instead. This
   * will be removed in a future release.
   */
  async deleteTargeted(conversationId: string, id: string) {
    const res = await this.http.delete<void>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`
    );
    return res.data;
  }
}
