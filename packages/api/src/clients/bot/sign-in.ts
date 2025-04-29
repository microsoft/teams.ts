import qs from 'qs';

import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { SignInUrlResponse } from '../../models';

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

  constructor(options?: Client | ClientOptions) {
    if (!options) {
      this._http = new Client();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new Client(options);
    }
  }

  async getUrl(params: GetBotSignInUrlParams) {
    const q = qs.stringify(params);
    const res = await this.http.get<string>(
      `https://token.botframework.com/api/botsignin/GetSignInUrl?${q}`
    );

    return res.data;
  }

  async getResource(params: GetBotSignInResourceParams) {
    const q = qs.stringify(params);
    const res = await this.http.get<SignInUrlResponse>(
      `https://token.botframework.com/api/botsignin/GetSignInResource?${q}`
    );

    return res.data;
  }
}
