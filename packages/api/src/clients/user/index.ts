import { Client, ClientOptions } from '@microsoft/spark.common/http';

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

  constructor(options?: Client | ClientOptions) {
    if (!options) {
      this._http = new Client();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new Client(options);
    }

    this.token = new UserTokenClient(this.http);
  }
}

export * from './token';
