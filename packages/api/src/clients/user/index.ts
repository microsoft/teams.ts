import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';

import { UserTokenClient } from './token';

export class UserClient {
  readonly token: UserTokenClient;

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
    this.token = new UserTokenClient(this.http, this._apiClientSettings);
  }
}

export * from './token';
