import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { CloudEnvironment } from '../../auth';
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
  protected _http: HttpClient;
  protected _clientSettings: Partial<ApiClientSettings>;

  constructor(options?: HttpClient | HttpClientOptions, clientSettings?: Partial<ApiClientSettings>, cloud?: CloudEnvironment) {
    if (!options) {
      this._http = new HttpClient();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new HttpClient(options);
    }

    this._clientSettings = mergeApiClientSettings(clientSettings, cloud);
    this.signIn = new BotSignInClient(this.http, this._clientSettings, cloud);
  }
}

export * from './sign-in';
