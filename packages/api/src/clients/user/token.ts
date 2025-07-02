import qs from 'qs';

import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { ChannelID, TokenExchangeRequest, TokenResponse, TokenStatus } from '../../models';

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

export class UserTokenClient {
  get http() {
    return this._http;
  }
  set http(v) {
    this._http = v;
  }
  protected _http: Client;

  constructor(options?: Client | ClientOptions) {
    if (!options) {
      this._http = new Client();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new Client(options);
    }
  }

  async get(params: GetUserTokenParams) {
    const q = qs.stringify(params);
    const res = await this.http.get<TokenResponse>(
      `https://token.botframework.com/api/usertoken/GetToken?${q}`
    );

    return res.data;
  }

  async getAad(params: GetUserAADTokenParams) {
    const q = qs.stringify(params);
    const res = await this.http.post<Record<string, TokenResponse>>(
      `https://token.botframework.com/api/usertoken/GetAadTokens?${q}`,
      params
    );

    return res.data;
  }

  async getStatus(params: GetUserTokenStatusParams) {
    const q = qs.stringify(params);
    const res = await this.http.get<TokenStatus[]>(
      `https://token.botframework.com/api/usertoken/GetTokenStatus?${q}`
    );

    return res.data;
  }

  async signOut(params: SignOutUserParams) {
    const q = qs.stringify(params);
    const res = await this.http.delete<void>(
      `https://token.botframework.com/api/usertoken/SignOut?${q}`,
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
      `https://token.botframework.com/api/usertoken/exchange?${q}`,
      params.exchangeRequest
    );

    return res.data;
  }
}
