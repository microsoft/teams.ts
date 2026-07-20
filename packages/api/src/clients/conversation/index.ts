import qs from 'qs';

import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { Account, Conversation, ConversationResource, MessageReactionType, type DeprecatedInputActivity } from '../../models';

import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';
import { ensureApiOutboundTelemetryMiddleware } from '../api-outbound-middleware';
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

type ActivityParamsLike = ActivityParams | DeprecatedInputActivity;

export interface IConversationActivityOperations {
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  create(params: DeprecatedInputActivity): ReturnType<ConversationActivityClient['create']>;
  create(params: ActivityParams): ReturnType<ConversationActivityClient['create']>;
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  update(id: string, params: DeprecatedInputActivity): ReturnType<ConversationActivityClient['update']>;
  update(id: string, params: ActivityParams): ReturnType<ConversationActivityClient['update']>;
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  reply(id: string, params: DeprecatedInputActivity): ReturnType<ConversationActivityClient['reply']>;
  reply(id: string, params: ActivityParams): ReturnType<ConversationActivityClient['reply']>;
  delete(id: string): ReturnType<ConversationActivityClient['delete']>;
  members(activityId: string): ReturnType<ConversationActivityClient['getMembers']>;
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  createTargeted(params: DeprecatedInputActivity): ReturnType<ConversationActivityClient['createTargeted']>;
  createTargeted(params: ActivityParams): ReturnType<ConversationActivityClient['createTargeted']>;
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  updateTargeted(id: string, params: DeprecatedInputActivity): ReturnType<ConversationActivityClient['updateTargeted']>;
  updateTargeted(id: string, params: ActivityParams): ReturnType<ConversationActivityClient['updateTargeted']>;
  deleteTargeted(id: string): ReturnType<ConversationActivityClient['deleteTargeted']>;
}

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
    ensureApiOutboundTelemetryMiddleware(v);
    this._http = v;
    this._activities.http = this._http;
    this._members.http = this._http;
    this._reactions.http = this._http;
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
    ensureApiOutboundTelemetryMiddleware(this._http);

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings);
    this._activities = new ConversationActivityClient(this.serviceUrl, this.http, this._apiClientSettings);
    this._members = new ConversationMemberClient(this.serviceUrl, this.http, this._apiClientSettings);
    this._reactions = new ReactionClient(this.serviceUrl, this.http, this._apiClientSettings);
  }

  /**
   * @deprecated Use the flattened activity methods on `ConversationClient`
   * instead (e.g. `conversations.createActivity(conversationId, ...)`). This
   * grouped accessor will be removed in a future release.
   */
  activities(conversationId: string): IConversationActivityOperations {
    return {
      create: (params: ActivityParamsLike) => this._activities.create(conversationId, params),
      update: (id: string, params: ActivityParamsLike) =>
        this._activities.update(conversationId, id, params),
      reply: (id: string, params: ActivityParamsLike) =>
        this._activities.reply(conversationId, id, params),
      delete: (id: string) => this._activities.delete(conversationId, id),
      members: (activityId: string) => this._activities.getMembers(conversationId, activityId),
      createTargeted: (params: ActivityParamsLike) => this._activities.createTargeted(conversationId, params),
      updateTargeted: (id: string, params: ActivityParamsLike) =>
        this._activities.updateTargeted(conversationId, id, params),
      deleteTargeted: (id: string) =>
        this._activities.deleteTargeted(conversationId, id),
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
   *
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  createActivity(conversationId: string, params: DeprecatedInputActivity): ReturnType<ConversationActivityClient['create']>;
  createActivity(conversationId: string, params: ActivityParams): ReturnType<ConversationActivityClient['create']>;
  createActivity(conversationId: string, params: ActivityParamsLike) {
    return this._activities.create(conversationId, params);
  }

  /**
   * Update an activity in a conversation.
   *
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  updateActivity(conversationId: string, id: string, params: DeprecatedInputActivity): ReturnType<ConversationActivityClient['update']>;
  updateActivity(conversationId: string, id: string, params: ActivityParams): ReturnType<ConversationActivityClient['update']>;
  updateActivity(conversationId: string, id: string, params: ActivityParamsLike) {
    return this._activities.update(conversationId, id, params);
  }

  /**
   * Reply to an activity in a conversation.
   *
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  replyToActivity(conversationId: string, id: string, params: DeprecatedInputActivity): ReturnType<ConversationActivityClient['reply']>;
  replyToActivity(conversationId: string, id: string, params: ActivityParams): ReturnType<ConversationActivityClient['reply']>;
  replyToActivity(conversationId: string, id: string, params: ActivityParamsLike) {
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
   *
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  createTargetedActivity(conversationId: string, params: DeprecatedInputActivity): ReturnType<ConversationActivityClient['createTargeted']>;
  createTargetedActivity(conversationId: string, params: ActivityParams): ReturnType<ConversationActivityClient['createTargeted']>;
  createTargetedActivity(conversationId: string, params: ActivityParamsLike) {
    return this._activities.createTargeted(conversationId, params);
  }

  /**
   * Update a targeted activity in a conversation.
   *
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  updateTargetedActivity(conversationId: string, id: string, params: DeprecatedInputActivity): ReturnType<ConversationActivityClient['updateTargeted']>;
  updateTargetedActivity(conversationId: string, id: string, params: ActivityParams): ReturnType<ConversationActivityClient['updateTargeted']>;
  updateTargetedActivity(conversationId: string, id: string, params: ActivityParamsLike) {
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
    const url = `${this.serviceUrl}/v3/conversations`;
    const res = await this.http.post<ConversationResource>(url, params);
    return res.data;
  }
}

export * from './activity';
export * from './member';
