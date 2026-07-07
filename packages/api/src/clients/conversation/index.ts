import qs from 'qs';

import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { Account, Conversation, ConversationResource } from '../../models';

import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';
import { agenticIdentityExtension, RequestOptions, resolveServiceUrl } from '../request-options';

import { ActivityParams, ConversationActivityClient } from './activity';
import { ConversationMemberClient } from './member';

/**
 * @deprecated This will be removed by end of summer 2026.
 */
export type GetConversationsParams = {
  readonly continuationToken?: string;
};

export type CreateConversationParams = {
  /**
   * @deprecated This will be removed by end of summer 2026.
   */
  readonly isGroup?: boolean;
  /**
   * @deprecated This will be removed by end of summer 2026.
   */
  readonly bot?: Partial<Account>;
  readonly members?: Account[];
  /**
   * @deprecated This will be removed by end of summer 2026.
   */
  readonly topicName?: string;
  readonly tenantId?: string;
  readonly activity?: ActivityParams;
  readonly channelData?: Record<string, any>;
};

/**
 * @deprecated This will be removed by end of summer 2026.
 */
export type GetConversationsResponse = {
  /**
   * Paging token
   */
  continuationToken: string;

  /**
   * List of conversations
   */
  conversations: Conversation[];
};

export class ConversationClient {
  readonly serviceUrl: string;

  get http() {
    return this._http;
  }
  set http(v) {
    this._http = v;
  }
  protected _http: HttpClient;
  protected _activities: ConversationActivityClient;
  protected _members: ConversationMemberClient;
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
    this._activities = new ConversationActivityClient(serviceUrl, this.http, this._apiClientSettings);
    this._members = new ConversationMemberClient(serviceUrl, this.http, this._apiClientSettings);
  }

  activities(conversationId: string) {
    return {
      create: (params: ActivityParams, options?: RequestOptions) =>
        this._activities.create(conversationId, params, options),
      update: (id: string, params: ActivityParams, options?: RequestOptions) =>
        this._activities.update(conversationId, id, params, options),
      reply: (id: string, params: ActivityParams, options?: RequestOptions) =>
        this._activities.reply(conversationId, id, params, options),
      delete: (id: string, options?: RequestOptions) =>
        this._activities.delete(conversationId, id, options),
      members: (activityId: string, options?: RequestOptions) =>
        this._activities.getMembers(conversationId, activityId, options),
      createTargeted: (params: ActivityParams, options?: RequestOptions<'serviceUrl'>) =>
        this._activities.createTargeted(conversationId, params, options),
      updateTargeted: (id: string, params: ActivityParams, options?: RequestOptions<'serviceUrl'>) =>
        this._activities.updateTargeted(conversationId, id, params, options),
      deleteTargeted: (id: string, options?: RequestOptions<'serviceUrl'>) =>
        this._activities.deleteTargeted(conversationId, id, options),
    };
  }

  members(conversationId: string) {
    return {
      get: (options?: RequestOptions) => this._members.get(conversationId, options),
      getById: (id: string, options?: RequestOptions) => this._members.getById(conversationId, id, options),
      getPaged: (pageSize?: number, continuationToken?: string, options?: RequestOptions) =>
        this._members.getPaged(conversationId, pageSize, continuationToken, options),
      /**
       * @deprecated This will be removed by end of summer 2026.
       */
      delete: (id: string, options?: RequestOptions) => this._members.delete(conversationId, id, options),
    };
  }

  /**
   * @deprecated This will be removed by end of summer 2026.
   */
  async get(params: GetConversationsParams) {
    const q = qs.stringify(params, { addQueryPrefix: true });
    const res = await this.http.get<GetConversationsResponse>(
      `${this.serviceUrl}/v3/conversations${q}`
    );
    return res.data;
  }

  async create(params: CreateConversationParams, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations`;
    const res = await this.http.post<ConversationResource>(url, params, agenticIdentityExtension(options));
    return res.data;
  }
}

export * from './activity';
export * from './member';
