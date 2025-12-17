import qs from 'qs';

import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { SignInUrlResponse } from '../../models';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';

export const BOT_SIGNIN_ENDPOINTS = {
  URL: 'api/botsignin/GetSignInUrl',
  RESOURCE: 'api/botsignin/GetSignInResource',
};

export type GetBotSignInUrlParams = {
  state: string;
  codeChallenge?: string;
  emulatorUrl?: string;
  finalRedirect?: string;
};

export type GetBotSignInResourceParams = {
  state: string;
  codeChallenge?: string;
  emulatorUrl?: string;
  finalRedirect?: string;
};

export class BotSignInClient {
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

  async getUrl(params: GetBotSignInUrlParams) {
    const q = qs.stringify(params);
    const res = await this.http.get<string>(
      `${this._apiClientSettings.oauthUrl}/${BOT_SIGNIN_ENDPOINTS.URL}?${q}`
    );

    return res.data;
  }

  async getResource(params: GetBotSignInResourceParams) {
    const q = qs.stringify(params);
    const res = await this.http.get<SignInUrlResponse>(
      `${this._apiClientSettings.oauthUrl}/${BOT_SIGNIN_ENDPOINTS.RESOURCE}?${q}`
    );

    return res.data;
  }
}
