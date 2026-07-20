import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { MessageReactionType } from '../../models/message/message-reaction';

import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';
import { agenticIdentityExtension, RequestOptions, resolveServiceUrl } from '../request-options';

function requestConfig(options?: RequestOptions): Record<string, unknown> | undefined {
  const config = agenticIdentityExtension(options);
  return Object.keys(config).length > 0 ? config : undefined;
}

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
    this.serviceUrl = resolveServiceUrl(serviceUrl);

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
  async add(conversationId: string, activityId: string, reactionType: MessageReactionType, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/activities/${activityId}/reactions/${reactionType}`;
    const config = requestConfig(options);
    const res = config
      ? await this.http.put<void>(url, undefined, config)
      : await this.http.put<void>(url);
    return res.data;
  }

  /**
   * Delete a reaction from a message.
   */
  async delete(conversationId: string, activityId: string, reactionType: MessageReactionType, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/activities/${activityId}/reactions/${reactionType}`;
    const config = requestConfig(options);
    const res = config
      ? await this.http.delete<void>(url, config)
      : await this.http.delete<void>(url);
    return res.data;
  }
}
