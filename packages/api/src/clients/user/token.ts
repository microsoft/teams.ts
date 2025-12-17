import qs from 'qs';

import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { ChannelID, TokenExchangeRequest, TokenResponse, TokenStatus } from '../../models';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';

export type GetUserTokenParams = {
  userId: string;
  connectionName: string;
  channelId?: ChannelID;
  code?: string;
};

export type GetUserAADTokenParams = {
  userId: string;
  connectionName: string;
  resourceUrls: string[];
  channelId: ChannelID;
};

export type GetUserTokenStatusParams = {
  userId: string;
  channelId: ChannelID;
  includeFilter: string;
};

export type SignOutUserParams = {
  userId: string;
  connectionName: string;
  channelId: ChannelID;
};

export type ExchangeUserTokenParams = {
  userId: string;
  connectionName: string;
  channelId: ChannelID;
  exchangeRequest: TokenExchangeRequest;
};

export const USER_TOKEN_ENDPOINTS = {
  GET_TOKEN: 'api/usertoken/GetToken',
  GET_AAD_TOKENS: 'api/usertoken/GetAadTokens',
  GET_STATUS: 'api/usertoken/GetTokenStatus',
  SIGN_OUT: 'api/usertoken/SignOut',
  EXCHANGE: 'api/usertoken/exchange',
};

export class UserTokenClient {
  get http() {
    return this._http;
  }
  set http(v) {
    this._http = v;
  }
  protected _http: Client;
  protected _apiClientSettings: Partial<ApiClientSettings>;

  constructor(options?: Client | ClientOptions, apiClientSettings?: Partial<ApiClientSettings>) {
    if (!options) {
      this._http = new Client();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new Client(options);
    }

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings);
  }

  async get(params: GetUserTokenParams) {
    const q = qs.stringify(params);
    const res = await this.http.get<TokenResponse>(
      `${this._apiClientSettings.oauthUrl}/${USER_TOKEN_ENDPOINTS.GET_TOKEN}?${q}`
    );

    return res.data;
  }

  async getAad(params: GetUserAADTokenParams) {
    const q = qs.stringify(params);
    const res = await this.http.post<Record<string, TokenResponse>>(
      `${this._apiClientSettings.oauthUrl}/${USER_TOKEN_ENDPOINTS.GET_AAD_TOKENS}?${q}`,
      params
    );

    return res.data;
  }

  async getStatus(params: GetUserTokenStatusParams) {
    const q = qs.stringify(params);
    const res = await this.http.get<TokenStatus[]>(
      `${this._apiClientSettings.oauthUrl}/${USER_TOKEN_ENDPOINTS.GET_STATUS}?${q}`
    );

    return res.data;
  }

  async signOut(params: SignOutUserParams) {
    const q = qs.stringify(params);
    const res = await this.http.delete<void>(
      `${this._apiClientSettings.oauthUrl}/${USER_TOKEN_ENDPOINTS.SIGN_OUT}?${q}`,
      { data: params }
    );

    return res.data;
  }

  async exchange(params: ExchangeUserTokenParams) {
    const q = qs.stringify({
      userId: params.userId,
      connectionName: params.connectionName,
      channelId: params.channelId,
    });

    const res = await this.http.post<TokenResponse>(
      `${this._apiClientSettings.oauthUrl}/${USER_TOKEN_ENDPOINTS.EXCHANGE}?${q}`,
      params.exchangeRequest
    );

    return res.data;
  }
}
