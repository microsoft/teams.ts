import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { CloudEnvironment } from '../../auth';
import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';

import {
  ExchangeUserTokenParams,
  GetUserAADTokenParams,
  GetUserTokenParams,
  GetUserTokenStatusParams,
  SignOutUserParams,
  UserTokenClient,
} from './token';

export class UserClient {
  get http() {
    return this._http;
  }
  set http(v) {
    this._token.http = v;
    this._http = v;
  }
  /**
   * @deprecated Use the flattened methods on `UserClient` instead
   * (e.g. `users.getToken(...)`). This grouped accessor will be removed
   * in a future release.
   */
  get token() {
    return this._token;
  }
  protected _http: HttpClient;
  protected _token: UserTokenClient;
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
    this._token = new UserTokenClient(this.http, this._apiClientSettings, cloud);
  }

  /**
   * Get a user token for the given connection.
   */
  getToken(params: GetUserTokenParams) {
    return this._token.get(params);
  }

  /**
   * Get AAD tokens for the given connection and resource urls.
   */
  getAadTokens(params: GetUserAADTokenParams) {
    return this._token.getAad(params);
  }

  /**
   * Get the token status for a user.
   */
  getTokenStatus(params: GetUserTokenStatusParams) {
    return this._token.getStatus(params);
  }

  /**
   * Sign a user out of the given connection.
   */
  signOut(params: SignOutUserParams) {
    return this._token.signOut(params);
  }

  /**
   * Exchange a user token for the given connection.
   */
  exchangeToken(params: ExchangeUserTokenParams) {
    return this._token.exchange(params);
  }
}

export * from './token';
