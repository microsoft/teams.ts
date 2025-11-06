import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { ClientSettings, DEFAULT_CLIENT_SETTINGS } from '../client-settings';

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
  protected _clientSettings: ClientSettings;

  constructor(options?: Client | ClientOptions, clientSettings?: ClientSettings) {
    if (!options) {
      this._http = new Client();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new Client(options);
    }

    this._clientSettings = clientSettings ?? DEFAULT_CLIENT_SETTINGS;
    this.token = new UserTokenClient(this.http, this._clientSettings);
  }
}

export * from './token';
