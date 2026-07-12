import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import {
  MessageActivity,
  toActivityParams,
  TypingActivity,
  type Activity,
  type IMessageActivityInput,
  type ITypingActivityInput
} from '../../activities';
import { resolveAadObjectId, Resource, TeamsChannelAccount, type DeprecatedInputActivity } from '../../models';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';

/**
 * Payload accepted by the low-level conversation activity client.
 *
 * The OUTBOUND activity union: an app only sends message or typing activity inputs.
 * Kept as a named export for backwards compatibility.
 */
export type ActivityParams = IMessageActivityInput | ITypingActivityInput;
export type RawActivityParams = Pick<Activity, 'type'> & Partial<Activity>;
type ActivityParamsLike = ActivityParams | DeprecatedInputActivity | RawActivityParams;

function toConversationActivityParams(params: ActivityParamsLike): ActivityParams | RawActivityParams {
  if (params instanceof MessageActivity || params instanceof TypingActivity) {
    return toActivityParams(params);
  }

  return params;
}

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
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async create(conversationId: string, params: DeprecatedInputActivity): Promise<Resource>;
  async create(conversationId: string, params: ActivityParams): Promise<Resource>;
  async create(conversationId: string, params: RawActivityParams): Promise<Resource>;
  async create(conversationId: string, params: ActivityParamsLike) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toConversationActivityParams(params);
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
  async update(conversationId: string, id: string, params: RawActivityParams): Promise<Resource>;
  async update(conversationId: string, id: string, params: ActivityParamsLike) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toConversationActivityParams(params);
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
  async reply(conversationId: string, id: string, params: RawActivityParams): Promise<Resource>;
  async reply(conversationId: string, id: string, params: ActivityParamsLike) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toConversationActivityParams(params);
    activity.replyToId = id;
    const res = await this.http.post<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}`,
      activity
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

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async createTargeted(conversationId: string, params: DeprecatedInputActivity): Promise<Resource>;
  async createTargeted(conversationId: string, params: ActivityParams): Promise<Resource>;
  async createTargeted(conversationId: string, params: RawActivityParams): Promise<Resource>;
  async createTargeted(conversationId: string, params: ActivityParamsLike) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toConversationActivityParams(params);
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
  async updateTargeted(conversationId: string, id: string, params: RawActivityParams): Promise<Resource>;
  async updateTargeted(conversationId: string, id: string, params: ActivityParamsLike) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const activity = toConversationActivityParams(params);
    const res = await this.http.put<Resource>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/activities/${id}?isTargetedActivity=true`,
      activity
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
