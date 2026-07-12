import {
  ActivityLike,
  ConversationReference,
  DeprecatedInputActivity,
  SentActivity,
  toActivityParams,
} from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { ApiClient, GraphClient } from '../api';
import { IActivitySender } from '../types';
import { getConversationIdResolver } from '../utils/function-context';

import { IClientContext } from './client';

export interface IFunctionContext<T = any> extends IClientContext {
  /**
   * the api client
   */
  api: ApiClient;

  /**
   * the app graph client
   */
  appGraph: GraphClient;

  /**
   * the app logger instance
   */
  log: ILogger;

  /**
   * the function payload
   */
  data: T;

  /**
   * Attempts to find the ID of the conversation in which the app is being used, and verifies that the bot and the
   * user making the function call are both present in the conversation. Depending on the conversation type, this
   * is the ID of a chat (for group chats, 1:1 chats and channel meetings), a channel, a meeting, or a user-bot
   * conversation (when the app is hosted in personal scope).
   * Returns undefined if the conversation ID cannot be determined or is invalid.
   */
  getCurrentConversationId: () => Promise<string | undefined>;

  /**
   * send an activity to the current conversation.
   * Returns null if the conversation ID cannot be determined or is invalid.
   * @param activity activity to send
   */
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  send(activity: DeprecatedInputActivity): Promise<SentActivity | null>;
  send(activity: ActivityLike): Promise<SentActivity | null>;
}

/**
 * Options used to construct a {@link FunctionContext}. The owning `App` supplies
 * the client context (resolved from the request's auth token) plus the
 * collaborators the context needs to resolve a conversation and send activities.
 */
export type IFunctionContextOptions<T = any> = IClientContext & {
  readonly api: ApiClient;
  readonly appGraph: GraphClient;
  readonly log: ILogger;
  readonly data: T;
  readonly activitySender: IActivitySender;
  /** the bot/app id (credentials clientId) used as the sender; undefined when no credentials are set */
  readonly botId?: string;
};

/**
 * Context handed to a remotely-callable function (`app.function`).
 *
 * Like {@link ActivityContext}, this is a "smart" context: it owns conversation
 * resolution and sending rather than having `App` wire those up at registration.
 * That keeps `App.function` thin and mirrors the Python SDK's `FunctionContext`.
 */
export class FunctionContext<T = any> implements IFunctionContext<T> {
  appId?: string;
  appSessionId!: string;
  tenantId!: string;
  userId!: string;
  userName!: string;
  teamId?: string;
  messageId?: string;
  channelId?: string;
  chatId?: string;
  meetingId?: string;
  pageId!: string;
  subPageId?: string;
  authToken!: string;

  api!: ApiClient;
  appGraph!: GraphClient;
  log!: ILogger;
  data!: T;

  readonly getCurrentConversationId: () => Promise<string | undefined>;

  private readonly activitySender: IActivitySender;
  private readonly botId?: string;

  constructor(options: IFunctionContextOptions<T>) {
    const { activitySender, botId, ...rest } = options;
    Object.assign(this, rest);
    this.activitySender = activitySender;
    this.botId = botId;

    // Cache a single resolver so repeated `getCurrentConversationId`/`send`
    // calls reuse the resolved (and member-validated) conversation id.
    this.getCurrentConversationId = getConversationIdResolver(
      this.api,
      this.log.child('getCurrentConversationId'),
      this
    );
  }

  /**
   * send an activity to the current conversation.
   * Returns null if the conversation ID cannot be determined or is invalid.
   * @param activity activity to send
   */
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async send(activity: DeprecatedInputActivity): Promise<SentActivity | null>;
  async send(activity: ActivityLike): Promise<SentActivity | null>;
  async send(activity: ActivityLike | DeprecatedInputActivity): Promise<SentActivity | null> {
    const conversationId = await this.getCurrentConversationId();

    if (!conversationId) {
      return null;
    }

    if (!this.botId) {
      throw new Error('App has no credentials set up');
    }

    const params = toActivityParams(activity);
    const ref: ConversationReference = {
      channelId: 'msteams',
      serviceUrl: this.api.serviceUrl,
      bot: {
        id: this.botId,
        role: 'bot',
      },
      conversation: {
        id: conversationId,
      } as ConversationReference['conversation'],
    };

    return await this.activitySender.send(params, ref);
  }
}
