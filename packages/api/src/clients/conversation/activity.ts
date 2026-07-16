import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import {
  toActivityParams,
  type IMessageActivityInput,
  type ITypingActivityInput
} from '../../activities';
import { resolveAadObjectId, Resource, TeamsChannelAccount, type DeprecatedInputActivity } from '../../models';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';
import { normalizeServiceUrl } from '../service-url';

/**
 * Payload accepted by the low-level conversation activity client.
 *
 * The OUTBOUND activity union: an app only sends message or typing activity inputs.
 * Kept as a named export for backwards compatibility.
 */
export type ActivityParams = IMessageActivityInput | ITypingActivityInput;
type ActivityParamsLike = ActivityParams | DeprecatedInputActivity;

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

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async create(conversationId: string, params: DeprecatedInputActivity): Promise<Resource>;
  async create(conversationId: string, params: ActivityParams): Promise<Resource>;
  async create(conversationId: string, params: ActivityParamsLike): Promise<Resource>;
  async create(conversationId: string, params: ActivityParamsLike) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toActivityParams(params);
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities`,
      activity
    );
    return res.data;
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async update(conversationId: string, id: string, params: DeprecatedInputActivity): Promise<Resource>;
  async update(conversationId: string, id: string, params: ActivityParams): Promise<Resource>;
  async update(conversationId: string, id: string, params: ActivityParamsLike): Promise<Resource>;
  async update(conversationId: string, id: string, params: ActivityParamsLike) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toActivityParams(params);
    const res = await this.http.put<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
      activity
    );
    return res.data;
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async reply(conversationId: string, id: string, params: DeprecatedInputActivity): Promise<Resource>;
  async reply(conversationId: string, id: string, params: ActivityParams): Promise<Resource>;
  async reply(conversationId: string, id: string, params: ActivityParamsLike): Promise<Resource>;
  async reply(conversationId: string, id: string, params: ActivityParamsLike) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toActivityParams(params);
    activity.replyToId = id;
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
      activity
    );
    return res.data;
  }

  async delete(conversationId: string, id: string) {
    const url = `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`;
    const res = await this.http.delete<void>(url);
    return res.data;
  }

  async getMembers(conversationId: string, id: string): Promise<TeamsChannelAccount[]> {
    const url = `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}/members`;
    const res = await this.http.get<TeamsChannelAccount[]>(url);
    return (res.data ?? []).map(resolveAadObjectId);
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async createTargeted(conversationId: string, params: DeprecatedInputActivity): Promise<Resource>;
  async createTargeted(conversationId: string, params: ActivityParams): Promise<Resource>;
  async createTargeted(conversationId: string, params: ActivityParamsLike): Promise<Resource>;
  async createTargeted(conversationId: string, params: ActivityParamsLike) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toActivityParams(params);
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities?isTargetedActivity=true`,
      activity
    );
    return res.data;
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async updateTargeted(conversationId: string, id: string, params: DeprecatedInputActivity): Promise<Resource>;
  async updateTargeted(conversationId: string, id: string, params: ActivityParams): Promise<Resource>;
  async updateTargeted(conversationId: string, id: string, params: ActivityParamsLike): Promise<Resource>;
  async updateTargeted(conversationId: string, id: string, params: ActivityParamsLike) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toActivityParams(params);
    const res = await this.http.put<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`,
      activity
    );
    return res.data;
  }

  async deleteTargeted(conversationId: string, id: string) {
    const url = `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`;
    const res = await this.http.delete<void>(url);
    return res.data;
  }
}
