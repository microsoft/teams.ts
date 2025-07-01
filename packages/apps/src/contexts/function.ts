import { ActivityLike, SentActivity } from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { ApiClient, GraphClient } from '../api';

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
  send: (activity: ActivityLike) => Promise<SentActivity | null>;
}
