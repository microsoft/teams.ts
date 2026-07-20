import qs from 'qs';

import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { Account, Conversation, ConversationResource, MessageReactionType, type DeprecatedInputActivity } from '../../models';

import { ensureApiOutboundTelemetryMiddleware } from '../api-outbound-middleware';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';
import { agenticIdentityExtension, RequestOptions, resolveServiceUrl } from '../request-options';
import { ReactionClient } from '../reaction';
import { normalizeServiceUrl } from '../service-url';

import { ActivityParams, ConversationActivityClient } from './activity';
import { ConversationMemberClient } from './member';

function requestConfig(options?: RequestOptions): Record<string, unknown> | undefined {
  const config = agenticIdentityExtension(options);
  return Object.keys(config).length > 0 ? config : undefined;
}

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
  create(params: DeprecatedInputActivity, options?: RequestOptions): ReturnType<ConversationActivityClient['create']>;
  create(params: ActivityParams, options?: RequestOptions): ReturnType<ConversationActivityClient['create']>;
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  update(id: string, params: DeprecatedInputActivity, options?: RequestOptions): ReturnType<ConversationActivityClient['update']>;
  update(id: string, params: ActivityParams, options?: RequestOptions): ReturnType<ConversationActivityClient['update']>;
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  reply(id: string, params: DeprecatedInputActivity, options?: RequestOptions): ReturnType<ConversationActivityClient['reply']>;
  reply(id: string, params: ActivityParams, options?: RequestOptions): ReturnType<ConversationActivityClient['reply']>;
  delete(id: string, options?: RequestOptions): ReturnType<ConversationActivityClient['delete']>;
  members(activityId: string, options?: RequestOptions): ReturnType<ConversationActivityClient['getMembers']>;
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  createTargeted(params: DeprecatedInputActivity, options?: RequestOptions): ReturnType<ConversationActivityClient['createTargeted']>;
  createTargeted(params: ActivityParams, options?: RequestOptions): ReturnType<ConversationActivityClient['createTargeted']>;
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  updateTargeted(id: string, params: DeprecatedInputActivity, options?: RequestOptions): ReturnType<ConversationActivityClient['updateTargeted']>;
  updateTargeted(id: string, params: ActivityParams, options?: RequestOptions): ReturnType<ConversationActivityClient['updateTargeted']>;
  deleteTargeted(id: string, options?: RequestOptions): ReturnType<ConversationActivityClient['deleteTargeted']>;
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
      create: (params: ActivityParamsLike, options?: RequestOptions) => this._activities.create(conversationId, params, options),
      update: (id: string, params: ActivityParamsLike, options?: RequestOptions) =>
        this._activities.update(conversationId, id, params, options),
      reply: (id: string, params: ActivityParamsLike, options?: RequestOptions) =>
        this._activities.reply(conversationId, id, params, options),
      delete: (id: string, options?: RequestOptions) => this._activities.delete(conversationId, id, options),
      members: (activityId: string, options?: RequestOptions) => this._activities.getMembers(conversationId, activityId, options),
      createTargeted: (params: ActivityParamsLike, options?: RequestOptions) => this._activities.createTargeted(conversationId, params, options),
      updateTargeted: (id: string, params: ActivityParamsLike, options?: RequestOptions) =>
        this._activities.updateTargeted(conversationId, id, params, options),
      deleteTargeted: (id: string, options?: RequestOptions) =>
        this._activities.deleteTargeted(conversationId, id, options),
    };
  }

  /**
   * @deprecated Use the flattened member methods on `ConversationClient`
   * instead (e.g. `conversations.getMembers(conversationId)`). This grouped
   * accessor will be removed in a future release.
   */
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
   * Create an activity in a conversation.
   *
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  createActivity(conversationId: string, params: DeprecatedInputActivity, options?: RequestOptions): ReturnType<ConversationActivityClient['create']>;
  createActivity(conversationId: string, params: ActivityParams, options?: RequestOptions): ReturnType<ConversationActivityClient['create']>;
  createActivity(conversationId: string, params: ActivityParamsLike, options?: RequestOptions) {
    return this._activities.create(conversationId, params, options);
  }

  /**
   * Update an activity in a conversation.
   *
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  updateActivity(conversationId: string, id: string, params: DeprecatedInputActivity, options?: RequestOptions): ReturnType<ConversationActivityClient['update']>;
  updateActivity(conversationId: string, id: string, params: ActivityParams, options?: RequestOptions): ReturnType<ConversationActivityClient['update']>;
  updateActivity(conversationId: string, id: string, params: ActivityParamsLike, options?: RequestOptions) {
    return this._activities.update(conversationId, id, params, options);
  }

  /**
   * Reply to an activity in a conversation.
   *
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  replyToActivity(conversationId: string, id: string, params: DeprecatedInputActivity, options?: RequestOptions): ReturnType<ConversationActivityClient['reply']>;
  replyToActivity(conversationId: string, id: string, params: ActivityParams, options?: RequestOptions): ReturnType<ConversationActivityClient['reply']>;
  replyToActivity(conversationId: string, id: string, params: ActivityParamsLike, options?: RequestOptions) {
    return this._activities.reply(conversationId, id, params, options);
  }

  /**
   * Delete an activity in a conversation.
   */
  deleteActivity(conversationId: string, id: string, options?: RequestOptions) {
    return this._activities.delete(conversationId, id, options);
  }

  /**
   * Get the members of an activity in a conversation.
   */
  getActivityMembers(conversationId: string, id: string, options?: RequestOptions) {
    return this._activities.getMembers(conversationId, id, options);
  }

  /**
   * Create a targeted activity in a conversation.
   *
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  createTargetedActivity(conversationId: string, params: DeprecatedInputActivity, options?: RequestOptions): ReturnType<ConversationActivityClient['createTargeted']>;
  createTargetedActivity(conversationId: string, params: ActivityParams, options?: RequestOptions): ReturnType<ConversationActivityClient['createTargeted']>;
  createTargetedActivity(conversationId: string, params: ActivityParamsLike, options?: RequestOptions) {
    return this._activities.createTargeted(conversationId, params, options);
  }

  /**
   * Update a targeted activity in a conversation.
   *
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  updateTargetedActivity(conversationId: string, id: string, params: DeprecatedInputActivity, options?: RequestOptions): ReturnType<ConversationActivityClient['updateTargeted']>;
  updateTargetedActivity(conversationId: string, id: string, params: ActivityParams, options?: RequestOptions): ReturnType<ConversationActivityClient['updateTargeted']>;
  updateTargetedActivity(conversationId: string, id: string, params: ActivityParamsLike, options?: RequestOptions) {
    return this._activities.updateTargeted(conversationId, id, params, options);
  }

  /**
   * Delete a targeted activity in a conversation.
   */
  deleteTargetedActivity(conversationId: string, id: string, options?: RequestOptions) {
    return this._activities.deleteTargeted(conversationId, id, options);
  }

  /**
   * Get the members of a conversation.
   */
  getMembers(conversationId: string, options?: RequestOptions) {
    return this._members.get(conversationId, options);
  }

  /**
   * Get a member of a conversation by id.
   */
  getMemberById(conversationId: string, id: string, options?: RequestOptions) {
    return this._members.getById(conversationId, id, options);
  }

  /**
   * Get paged members of a conversation.
   */
  getPagedMembers(conversationId: string, pageSize?: number, continuationToken?: string, options?: RequestOptions) {
    return this._members.getPaged(conversationId, pageSize, continuationToken, options);
  }

  /**
   * Add a reaction to an activity in a conversation.
   */
  addReaction(conversationId: string, activityId: string, reactionType: MessageReactionType, options?: RequestOptions) {
    return this._reactions.add(conversationId, activityId, reactionType, options);
  }

  /**
   * Delete a reaction from an activity in a conversation.
   */
  deleteReaction(conversationId: string, activityId: string, reactionType: MessageReactionType, options?: RequestOptions) {
    return this._reactions.delete(conversationId, activityId, reactionType, options);
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
    const config = requestConfig(options);
    const res = config
      ? await this.http.post<ConversationResource>(url, params, config)
      : await this.http.post<ConversationResource>(url, params);
    return res.data;
  }
}

export * from './activity';
export * from './member';
