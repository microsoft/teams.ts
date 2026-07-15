import qs from 'qs';

import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { Account, Conversation, ConversationResource, MessageReactionType } from '../../models';

import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';
import { ReactionClient } from '../reaction';
import { normalizeServiceUrl } from '../service-url';

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
    this._activities.http = v;
    this._members.http = v;
    this._reactions.http = v;
  }
  protected _http: HttpClient;
  protected _activities: ConversationActivityClient;
  protected _members: ConversationMemberClient;
  protected _reactions: ReactionClient;
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
    this._activities = new ConversationActivityClient(this.serviceUrl, this.http, this._apiClientSettings);
    this._members = new ConversationMemberClient(this.serviceUrl, this.http, this._apiClientSettings);
    this._reactions = new ReactionClient(this.serviceUrl, this.http, this._apiClientSettings);
  }

  activities(conversationId: string) {
    return {
      create: (params: ActivityParams) =>
        this._activities.create(conversationId, params),
      update: (id: string, params: ActivityParams) =>
        this._activities.update(conversationId, id, params),
      reply: (id: string, params: ActivityParams) =>
        this._activities.reply(conversationId, id, params),
      delete: (id: string) =>
        this._activities.delete(conversationId, id),
      members: (activityId: string) =>
        this._activities.getMembers(conversationId, activityId),
      createTargeted: (params: ActivityParams) =>
        this._activities.createTargeted(conversationId, params),
      updateTargeted: (id: string, params: ActivityParams) =>
        this._activities.updateTargeted(conversationId, id, params),
      deleteTargeted: (id: string) =>
        this._activities.deleteTargeted(conversationId, id),
    };
  }

  members(conversationId: string) {
    return {
      get: () => this._members.get(conversationId),
      getById: (id: string) => this._members.getById(conversationId, id),
      getPaged: (pageSize?: number, continuationToken?: string) =>
        this._members.getPaged(conversationId, pageSize, continuationToken),
      /**
       * @deprecated This will be removed by end of summer 2026.
       */
      delete: (id: string) => this._members.delete(conversationId, id),
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

  createActivity(conversationId: string, params: ActivityParams) {
    return this._activities.create(conversationId, params);
  }

  updateActivity(conversationId: string, id: string, params: ActivityParams) {
    return this._activities.update(conversationId, id, params);
  }

  replyToActivity(conversationId: string, id: string, params: ActivityParams) {
    return this._activities.reply(conversationId, id, params);
  }

  deleteActivity(conversationId: string, id: string) {
    return this._activities.delete(conversationId, id);
  }

  getActivityMembers(conversationId: string, id: string) {
    return this._activities.getMembers(conversationId, id);
  }

  createTargetedActivity(conversationId: string, params: ActivityParams) {
    return this._activities.createTargeted(conversationId, params);
  }

  updateTargetedActivity(conversationId: string, id: string, params: ActivityParams) {
    return this._activities.updateTargeted(conversationId, id, params);
  }

  deleteTargetedActivity(conversationId: string, id: string) {
    return this._activities.deleteTargeted(conversationId, id);
  }

  getMembers(conversationId: string) {
    return this._members.get(conversationId);
  }

  getMemberById(conversationId: string, id: string) {
    return this._members.getById(conversationId, id);
  }

  getPagedMembers(conversationId: string, pageSize?: number, continuationToken?: string) {
    return this._members.getPaged(conversationId, pageSize, continuationToken);
  }

  addReaction(conversationId: string, activityId: string, reactionType: MessageReactionType) {
    return this._reactions.add(conversationId, activityId, reactionType);
  }

  deleteReaction(conversationId: string, activityId: string, reactionType: MessageReactionType) {
    return this._reactions.delete(conversationId, activityId, reactionType);
  }

  async create(params: CreateConversationParams) {
    const url = `${this.serviceUrl}/v3/conversations`;
    const res = await this.http.post<ConversationResource>(url, params);
    return res.data;
  }
}

export * from './activity';
export * from './member';
