import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { MessageReactionType } from '../../models/message/message-reaction';

import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';

/**
 * Client for adding and removing emoji reactions on messages in a conversation.
 */
export class ReactionClient {
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
   * Add a reaction to a message.
   */
  async add(conversationId: string, activityId: string, reactionType: MessageReactionType) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const res = await this.http.put<void>(
      `${this.serviceUrl}/v3/conversations/${encodeURIComponent(conversationId)}/activities/${encodeURIComponent(activityId)}/reactions/${encodeURIComponent(reactionType)}`
    );
    return res.data;
  }

  /**
   * Delete a reaction from a message.
   */
  async delete(conversationId: string, activityId: string, reactionType: MessageReactionType) {
    // TODO: Will be deprecated alongside accessor in ConversationClient
    const res = await this.http.delete<void>(
      `${this.serviceUrl}/v3/conversations/${encodeURIComponent(conversationId)}/activities/${encodeURIComponent(activityId)}/reactions/${encodeURIComponent(reactionType)}`
    );
    return res.data;
  }
}
