import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { PagedMembersResult, resolveAadObjectId, TeamsChannelAccount } from '../../models';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';

export class ConversationMemberClient {
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

  async get(conversationId: string): Promise<TeamsChannelAccount[]> {
    const res = await this.http.get<TeamsChannelAccount[]>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/members`
    );
    return res.data.map(resolveAadObjectId);
  }

  async getById(conversationId: string, id: string): Promise<TeamsChannelAccount> {
    const res = await this.http.get<TeamsChannelAccount>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/members/${id}`
    );
    return resolveAadObjectId(res.data);
  }

  /**
   * Get paged members in a conversation.
   * @param conversationId - The ID of the conversation.
   * @param pageSize - Optional maximum number of members per page (min 50, default 200, max 500).
   * @param continuationToken - Optional token from a previous call to fetch the next page.
   * @returns PagedMembersResult containing members and an optional continuation token.
   */
  async getPaged(conversationId: string, pageSize?: number, continuationToken?: string): Promise<PagedMembersResult> {
    const params: Record<string, string | number> = {};
    if (pageSize !== undefined) params['pageSize'] = pageSize;
    if (continuationToken !== undefined) params['continuationToken'] = continuationToken;

    const res = await this.http.get<PagedMembersResult>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/pagedMembers`,
      { params }
    );
    return { ...res.data, members: res.data.members.map(resolveAadObjectId) };
  }

  /**
   * @deprecated The DELETE member endpoint is not supported by the backend. This method will be removed in a future version.
   */
  async delete(conversationId: string, id: string) {
    const res = await this.http.delete<void>(
      `${this.serviceUrl}/v3/conversations/${conversationId}/members/${id}`
    );
    return res.data;
  }
}
