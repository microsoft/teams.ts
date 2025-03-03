import { Client, ClientOptions } from '@microsoft/spark.common/http';

import { MeetingInfo, MeetingParticipant } from '../models';

export class MeetingClient {
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
    const res = await this.http.get<MeetingInfo>(`${this.serviceUrl}/v1/meetings/${id}`);
    return res.data;
  }

  async getParticipant(meetingId: string, id: string) {
    const res = await this.http.get<MeetingParticipant>(
      `${this.serviceUrl}/v1/meetings/${meetingId}/participants/${id}`
    );
    return res.data;
  }
}
