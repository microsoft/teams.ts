import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { CloudEnvironment } from '../../auth';
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
    this.token = new UserTokenClient(this.http, this._apiClientSettings, cloud);
  }
}

export * from './token';
