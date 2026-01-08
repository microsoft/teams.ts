import qs from 'qs';

import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { Account, Conversation, ConversationResource } from '../../models';

import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';

import { ActivityParams, ConversationActivityClient } from './activity';
import { ConversationMemberClient } from './member';

export type GetConversationsParams = {
  readonly continuationToken?: string;
};

export type CreateConversationParams = {
  readonly isGroup?: boolean;
  readonly bot?: Partial<Account>;
  readonly members?: Account[];
  readonly topicName?: string;
  readonly tenantId?: string;
  readonly activity?: ActivityParams;
  readonly channelData?: Record<string, any>;
};

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
  protected _http: Client;
  protected _activities: ConversationActivityClient;
  protected _members: ConversationMemberClient;
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
    this._activities = new ConversationActivityClient(serviceUrl, this.http, this._apiClientSettings);
    this._members = new ConversationMemberClient(serviceUrl, this.http, this._apiClientSettings);
  }

  activities(conversationId: string) {
    return {
      create: (params: ActivityParams) => this._activities.create(conversationId, params),
      update: (id: string, params: ActivityParams) =>
        this._activities.update(conversationId, id, params),
      reply: (id: string, params: ActivityParams) =>
        this._activities.reply(conversationId, id, params),
      delete: (id: string) => this._activities.delete(conversationId, id),
      members: (activityId: string) => this._activities.getMembers(conversationId, activityId),
    };
  }

  members(conversationId: string) {
    return {
      get: () => this._members.get(conversationId),
      getById: (id: string) => this._members.getById(conversationId, id),
      delete: (id: string) => this._members.delete(conversationId, id),
    };
  }

  async get(params: GetConversationsParams) {
    const q = qs.stringify(params, { addQueryPrefix: true });
    const res = await this.http.get<GetConversationsResponse>(
      `${this.serviceUrl}/v3/conversations${q}`
    );
    return res.data;
  }

  async create(params: CreateConversationParams) {
    const res = await this.http.post<ConversationResource>(
      `${this.serviceUrl}/v3/conversations`,
      params
    );
    return res.data;
  }
}

export * from './activity';
export * from './member';
