import qs from 'qs';

import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { Account, Conversation, ConversationResource, MessageReactionType } from '../../models';

import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';
import { ReactionClient } from '../reaction';

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
  private _http: HttpClient;
  private _activities: ConversationActivityClient;
  private _members: ConversationMemberClient;
  private _reactions: ReactionClient;
  private _apiClientSettings: Partial<ApiClientSettings>;

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
    this._reactions = new ReactionClient(serviceUrl, this.http, this._apiClientSettings);
  }

  /**
   * @deprecated Use the flattened activity methods on `ConversationClient`
   * instead (e.g. `conversations.createActivity(conversationId, ...)`). This
   * grouped accessor will be removed in a future release.
   */
  activities(conversationId: string) {
    return {
      create: (params: ActivityParams) => this._activities.create(conversationId, params),
      update: (id: string, params: ActivityParams) =>
        this._activities.update(conversationId, id, params),
      reply: (id: string, params: ActivityParams) =>
        this._activities.reply(conversationId, id, params),
      delete: (id: string) => this._activities.delete(conversationId, id),
      members: (activityId: string) => this._activities.getMembers(conversationId, activityId),
      createTargeted: (params: ActivityParams) => this._activities.createTargeted(conversationId, params),
      updateTargeted: (id: string, params: ActivityParams) =>
        this._activities.updateTargeted(conversationId, id, params),
      deleteTargeted: (id: string) => this._activities.deleteTargeted(conversationId, id),
    };
  }

  /**
   * @deprecated Use the flattened member methods on `ConversationClient`
   * instead (e.g. `conversations.getMembers(conversationId)`). This grouped
   * accessor will be removed in a future release.
   */
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
   * Create an activity in a conversation.
   */
  createActivity(conversationId: string, params: ActivityParams) {
    return this._activities.create(conversationId, params);
  }

  /**
   * Update an activity in a conversation.
   */
  updateActivity(conversationId: string, id: string, params: ActivityParams) {
    return this._activities.update(conversationId, id, params);
  }

  /**
   * Reply to an activity in a conversation.
   */
  replyToActivity(conversationId: string, id: string, params: ActivityParams) {
    return this._activities.reply(conversationId, id, params);
  }

  /**
   * Delete an activity in a conversation.
   */
  deleteActivity(conversationId: string, id: string) {
    return this._activities.delete(conversationId, id);
  }

  /**
   * Get the members of an activity in a conversation.
   */
  getActivityMembers(conversationId: string, id: string) {
    return this._activities.getMembers(conversationId, id);
  }

  /**
   * Create a targeted activity in a conversation.
   */
  createTargetedActivity(conversationId: string, params: ActivityParams) {
    return this._activities.createTargeted(conversationId, params);
  }

  /**
   * Update a targeted activity in a conversation.
   */
  updateTargetedActivity(conversationId: string, id: string, params: ActivityParams) {
    return this._activities.updateTargeted(conversationId, id, params);
  }

  /**
   * Delete a targeted activity in a conversation.
   */
  deleteTargetedActivity(conversationId: string, id: string) {
    return this._activities.deleteTargeted(conversationId, id);
  }

  /**
   * Get the members of a conversation.
   */
  getMembers(conversationId: string) {
    return this._members.get(conversationId);
  }

  /**
   * Get a member of a conversation by id.
   */
  getMemberById(conversationId: string, id: string) {
    return this._members.getById(conversationId, id);
  }

  /**
   * Get paged members of a conversation.
   */
  getPagedMembers(conversationId: string, pageSize?: number, continuationToken?: string) {
    return this._members.getPaged(conversationId, pageSize, continuationToken);
  }

  /**
   * Add a reaction to an activity in a conversation.
   */
  addReaction(conversationId: string, activityId: string, reactionType: MessageReactionType) {
    return this._reactions.add(conversationId, activityId, reactionType);
  }

  /**
   * Delete a reaction from an activity in a conversation.
   */
  deleteReaction(conversationId: string, activityId: string, reactionType: MessageReactionType) {
    return this._reactions.delete(conversationId, activityId, reactionType);
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
