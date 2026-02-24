import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { MessageReactionType } from '../../models/message/message-reaction';

import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';

export class ReactionClient {
  readonly serviceUrl: string;

  get http() {
    return this._http;
  }
  set http(v) {
    this._http = v;
  }
  protected _http: Client;
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
  }

  async add(conversationId: string, activityId: string, reactionType: MessageReactionType) {
    const res = await this.http.put<void>(
      `${this.serviceUrl}/v3/conversations/${encodeURIComponent(conversationId)}/activities/${encodeURIComponent(activityId)}/reactions/${encodeURIComponent(reactionType)}`
    );
    return res.data;
  }

  async remove(conversationId: string, activityId: string, reactionType: MessageReactionType) {
    const res = await this.http.delete<void>(
      `${this.serviceUrl}/v3/conversations/${encodeURIComponent(conversationId)}/activities/${encodeURIComponent(activityId)}/reactions/${encodeURIComponent(reactionType)}`
    );
    return res.data;
  }
}
