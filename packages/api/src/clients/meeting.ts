import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import {
  MeetingInfo,
  MeetingNotificationParams,
  MeetingNotificationResponse,
  MeetingParticipant,
} from '../models';

import { ApiClientSettings, mergeApiClientSettings } from './api-client-settings';
import { agenticIdentityExtension, RequestOptions, resolveServiceUrl } from './request-options';

function requestConfig(options?: RequestOptions): Record<string, unknown> | undefined {
  const config = agenticIdentityExtension(options);
  return Object.keys(config).length > 0 ? config : undefined;
}

export class MeetingClient {
  readonly serviceUrl: string;

  get http() {
    return this._http;
  }
  set http(v) {
    this._http = v;
  }
  protected _http: HttpClient;
  protected _apiClientSettings: Partial<ApiClientSettings>;

  constructor(serviceUrl: string, options?: HttpClient | HttpClientOptions, apiClientSettings?: Partial<ApiClientSettings>) {
    this.serviceUrl = resolveServiceUrl(serviceUrl);

    if (!options) {
      this._http = new HttpClient();
    } else if ('request' in options) {
      this._http = options;
    } else {
      this._http = new HttpClient(options);
    }

    this._apiClientSettings = mergeApiClientSettings(apiClientSettings);
  }

  /**
   * Retrieves meeting information including details, organizer, and conversation.
   * @param id - The meeting ID.
   */
  async getById(id: string, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v1/meetings/${id}`;
    const config = requestConfig(options);
    const res = config
      ? await this.http.get<MeetingInfo>(url, config)
      : await this.http.get<MeetingInfo>(url);
    return res.data;
  }

  /**
   * Retrieves information about a specific participant in a meeting.
   * @param meetingId - The meeting ID.
   * @param id - The user AAD object ID
   * @param tenantId - The tenant ID of the meeting and user.
   * @returns {MeetingParticipant} The meeting participant information.
   */
  async getParticipant(meetingId: string, id: string, tenantId: string, options?: RequestOptions) {
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v1/meetings/${meetingId}/participants/${id}?tenantId=${tenantId}`;
    const config = requestConfig(options);
    const res = config
      ? await this.http.get<MeetingParticipant>(url, config)
      : await this.http.get<MeetingParticipant>(url);
    return res.data;
  }

  /**
   * Send a targeted in-meeting notification to specific participants.
   *
   * Returns `undefined` on full success (HTTP 202). Returns a `MeetingNotificationResponse`
   * with per-recipient failure info on partial success (HTTP 207).
   *
   * Requires the RSC permission `OnlineMeetingNotification.Send.Chat` and the ECS flag
   * enabled for the tenant/bot.
   *
   * @param meetingId - The BASE64-encoded meeting ID.
   * @param params - The notification parameters including recipients and surfaces.
   */
  async sendNotification(
    meetingId: string,
    params: MeetingNotificationParams,
    options?: RequestOptions
  ): Promise<MeetingNotificationResponse | undefined> {
    const body = {
      type: params.type ?? 'targetedMeetingNotification',
      value: params.value,
    };
    const url = `${resolveServiceUrl(this.serviceUrl, options)}/v1/meetings/${meetingId}/notification`;
    const config = requestConfig(options);
    const res = config
      ? await this.http.post<MeetingNotificationResponse>(url, body, config)
      : await this.http.post<MeetingNotificationResponse>(url, body);
    return res.data || undefined;
  }
}
