import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { ClientSettings, mergeClientSettings } from '../client-settings';

import { BotSignInClient } from './sign-in';
import { BotTokenClient } from './token';

export class BotClient {
  readonly token: BotTokenClient;
  readonly signIn: BotSignInClient;

  get http() {
    return this._http;
  }
  set http(v) {
    this.token.http = v;
    this.signIn.http = v;
    this._http = v;
  }
  protected _http: Client;
  protected _clientSettings: Partial<ClientSettings>;

  constructor(options?: Client | ClientOptions, clientSettings?: Partial<ClientSettings>) {
    if (!options) {
      this._http = new Client();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new Client(options);
    }

    this._clientSettings = mergeClientSettings(clientSettings);
    this.token = new BotTokenClient(this.http);
    this.signIn = new BotSignInClient(this.http, this._clientSettings);
  }
}

export * from './sign-in';
export * from './token';
