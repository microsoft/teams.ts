import qs from 'qs';

import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { CloudEnvironment } from '../../auth';
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
  protected _http: HttpClient;
  protected _apiClientSettings: Partial<ApiClientSettings>;

  constructor(options?: HttpClient | HttpClientOptions, apiClientSettings?: Partial<ApiClientSettings>, cloud?: CloudEnvironment) {
    if (!options) {
      this._http = new HttpClient();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new HttpClient(options);
    }
    this._apiClientSettings = mergeApiClientSettings(apiClientSettings, cloud);
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
