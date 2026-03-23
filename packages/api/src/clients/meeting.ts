import { Client, ClientOptions } from '@microsoft/teams.common/http';

import { MeetingInfo, MeetingParticipant } from '../models';

import { ApiClientSettings, mergeApiClientSettings } from './api-client-settings';

export class MeetingClient {
  readonly serviceUrl: string;

  get http() {
    return this._http;
  }
  set http(v) {
    this._http = v;
  }
  protected _http: Client;
  protected _apiClientSettings: Partial<ApiClientSettings>;

  constructor(serviceUrl: string, options?: Client | ClientOptions, apiClientSettings?: Partial<ApiClientSettings>) {
    this.serviceUrl = serviceUrl;

    if (!options) {
      this._http = new Client();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new Client(options);
    }

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings);
  }

  /**
   * Retrieves meeting information including details, organizer, and conversation.
   * @param id - The meeting ID.
   */
  async getById(id: string) {
    const res = await this.http.get<MeetingInfo>(`${this.serviceUrl}/v1/meetings/${encodeURIComponent(id)}`);
    return res.data;
  }

  /**
   * Retrieves information about a specific participant in a meeting.
   * @param meetingId - The meeting ID.
   * @param id - The user AAD object ID
   * @param tenantId - The tenant ID of the meeting and user.
   * @returns {MeetingParticipant} The meeting participant information.
   */
  async getParticipant(meetingId: string, id: string, tenantId: string) {
    const res = await this.http.get<MeetingParticipant>(
      `${this.serviceUrl}/v1/meetings/${encodeURIComponent(meetingId)}/participants/${encodeURIComponent(id)}?tenantId=${encodeURIComponent(tenantId)}`
    );
    return res.data;
  }
}
