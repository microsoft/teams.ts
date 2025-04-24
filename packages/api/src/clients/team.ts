import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { ChannelInfo, TeamDetails } from '../models';

export class TeamClient {
  readonly serviceUrl: string;

  get http() {
    return this._http;
  }
  set http(v) {
    this._http = v;
  }
  protected _http: Client;

  constructor(serviceUrl: string, options?: Client | ClientOptions) {
    this.serviceUrl = serviceUrl;

    if (!options) {
      this._http = new Client();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new Client(options);
    }
  }

  async getById(id: string) {
    const res = await this.http.get<TeamDetails>(`${this.serviceUrl}/v3/teams/${id}`);
    return res.data;
  }

  async getConversations(id: string) {
    const res = await this.http.get<ChannelInfo[]>(
      `${this.serviceUrl}/v3/teams/${id}/conversations`
    );
    return res.data;
  }
}
