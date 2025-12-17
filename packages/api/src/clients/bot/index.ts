import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { ApiClientSettings, mergeApiClientSettings } from '../api-client-settings';

import { BotSignInClient } from './sign-in';

export class BotClient {
  readonly signIn: BotSignInClient;

  get http() {
    return this._http;
  }
  set http(v) {
    this.signIn.http = v;
    this._http = v;
  }
  protected _http: Client;
  protected _clientSettings: Partial<ApiClientSettings>;

  constructor(options?: Client | ClientOptions, clientSettings?: Partial<ApiClientSettings>) {
    if (!options) {
      this._http = new Client();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new Client(options);
    }

    this._clientSettings = mergeApiClientSettings(clientSettings);
    this.signIn = new BotSignInClient(this.http, this._clientSettings);
  }
}

export * from './sign-in';
