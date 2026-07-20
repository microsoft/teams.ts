import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { PagedMembersResult, resolveAadObjectId, TeamsChannelAccount } from '../../models';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';
import { agenticIdentityExtension, RequestOptions, resolveServiceUrl } from '../request-options';

function requestConfig(options?: RequestOptions): Record<string, unknown> | undefined {
  const config = agenticIdentityExtension(options);
  return Object.keys(config).length > 0 ? config : undefined;
}

export class ConversationMemberClient {
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

  async get(conversationId: string, options?: RequestOptions): Promise<TeamsChannelAccount[]> {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/members`;
    const config = requestConfig(options);
    const res = config
      ? await this.http.get<TeamsChannelAccount[]>(url, config)
      : await this.http.get<TeamsChannelAccount[]>(url);
    return res.data.map(resolveAadObjectId);
  }

  async getById(conversationId: string, id: string, options?: RequestOptions): Promise<TeamsChannelAccount> {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/members/${id}`;
    const config = requestConfig(options);
    const res = config
      ? await this.http.get<TeamsChannelAccount>(url, config)
      : await this.http.get<TeamsChannelAccount>(url);
    return resolveAadObjectId(res.data);
  }

  /**
   * Get paged members in a conversation.
   * @param conversationId - The ID of the conversation.
   * @param pageSize - Optional maximum number of members per page (min 50, default 200, max 500).
   * @param continuationToken - Optional token from a previous call to fetch the next page.
   * @returns PagedMembersResult containing members and an optional continuation token.
   */
  async getPaged(conversationId: string, pageSize?: number, continuationToken?: string, options?: RequestOptions): Promise<PagedMembersResult> {
    const params: Record<string, string | number> = {};
    if (pageSize !== undefined) params['pageSize'] = pageSize;
    if (continuationToken !== undefined) params['continuationToken'] = continuationToken;

    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/pagedMembers`;
    const res = await this.http.get<PagedMembersResult>(url, { params, ...(requestConfig(options) ?? {}) });
    return { ...res.data, members: res.data.members.map(resolveAadObjectId) };
  }

  /**
   * @deprecated This will be removed by end of summer 2026.
   */
  async delete(conversationId: string, id: string, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v3/conversations/${conversationId}/members/${id}`;
    const config = requestConfig(options);
    const res = config
      ? await this.http.delete<void>(url, config)
      : await this.http.delete<void>(url);
    return res.data;
  }
}
