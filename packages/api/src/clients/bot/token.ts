import qs from 'qs';
import { Client, ClientOptions } from '@microsoft/spark.common/http';

import { Credentials } from '../../auth';

export type GetBotTokenResponse = {
  readonly token_type: 'Bearer';
  readonly expires_in: number;
  readonly ext_expires_in?: number;
  readonly access_token: string;
};

export class BotTokenClient {
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

  async get(credentials: Credentials) {
    if ('token' in credentials) {
      return {
        token_type: 'Bearer',
        expires_in: -1,
        access_token: await credentials.token(
          'https://api.botframework.com/.default',
          credentials.tenantId
        ),
      };
    }

    const tenantId = credentials.tenantId || 'botframework.com';
    const res = await this.http.post<GetBotTokenResponse>(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      qs.stringify({
        grant_type: 'client_credentials',
        client_id: credentials.clientId,
        client_secret: credentials.clientSecret,
        scope: 'https://api.botframework.com/.default',
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    return res.data;
  }

  async getGraph(credentials: Credentials) {
    if ('token' in credentials) {
      return {
        token_type: 'Bearer',
        expires_in: -1,
        access_token: await credentials.token(
          'https://graph.microsoft.com/.default',
          credentials.tenantId
        ),
      };
    }

    const tenantId = credentials.tenantId || 'botframework.com';
    const res = await this.http.post<GetBotTokenResponse>(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      qs.stringify({
        grant_type: 'client_credentials',
        client_id: credentials.clientId,
        client_secret: credentials.clientSecret,
        scope: 'https://graph.microsoft.com/.default',
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    return res.data;
  }
}
