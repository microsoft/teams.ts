import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AttendanceReportsClient } from './attendanceReports';
import { AttendeeReportClient } from './attendeeReport';
import { CreateOrGetClient } from './createOrGet';
import { RecordingsClient } from './recordings';
import { SendVirtualAppointmentReminderSmsClient } from './sendVirtualAppointmentReminderSms';
import { SendVirtualAppointmentSmsClient } from './sendVirtualAppointmentSms';
import { TranscriptsClient } from './transcripts';

/**
 * /communications/onlineMeetings
 * Provides operations to manage the onlineMeetings property of the microsoft.graph.cloudCommunications entity.
 */
export class OnlineMeetingsClient {
  protected baseUrl = '/communications/onlineMeetings';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports`
   *
   * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeetingBase entity.
   */
  attendanceReports(onlineMeetingId: string) {
    return new AttendanceReportsClient(onlineMeetingId, this.http);
  }

  /**
   * `/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * Provides operations to manage the media for the cloudCommunications entity.
   */
  attendeeReport(onlineMeetingId: string) {
    return new AttendeeReportClient(onlineMeetingId, this.http);
  }

  /**
   * `/communications/onlineMeetings/createOrGet`
   *
   * Provides operations to call the createOrGet method.
   */
  get createOrGet() {
    return new CreateOrGetClient(this.http);
  }

  /**
   * `/communications/onlineMeetings/{onlineMeeting-id}/recordings`
   *
   * Provides operations to manage the recordings property of the microsoft.graph.onlineMeeting entity.
   */
  recordings(onlineMeetingId: string) {
    return new RecordingsClient(onlineMeetingId, this.http);
  }

  /**
   * `/communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms`
   *
   * Provides operations to call the sendVirtualAppointmentReminderSms method.
   */
  sendVirtualAppointmentReminderSms(onlineMeetingId: string) {
    return new SendVirtualAppointmentReminderSmsClient(onlineMeetingId, this.http);
  }

  /**
   * `/communications/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentSms`
   *
   * Provides operations to call the sendVirtualAppointmentSms method.
   */
  sendVirtualAppointmentSms(onlineMeetingId: string) {
    return new SendVirtualAppointmentSmsClient(onlineMeetingId, this.http);
  }

  /**
   * `/communications/onlineMeetings/{onlineMeeting-id}/transcripts`
   *
   * Provides operations to manage the transcripts property of the microsoft.graph.onlineMeeting entity.
   */
  transcripts(onlineMeetingId: string) {
    return new TranscriptsClient(onlineMeetingId, this.http);
  }

  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'onlineMeeting-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}']['response']
      );
  }

  /**
   * `GET /communications/onlineMeetings`
   *
   * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) is an online meeting artifact. For details, see Online meeting artifacts and permissions.
   */
  async list(
    params?: Endpoints['GET /communications/onlineMeetings']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /communications/onlineMeetings']['response']);
  }

  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}`
   *
   */
  async get(
    params?: Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'onlineMeeting-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}']['response']
      );
  }

  /**
   * `PATCH /communications/onlineMeetings/{onlineMeeting-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}']['body'],
    params?: Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}',
      [{ name: 'onlineMeeting-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}']['response']
      );
  }

  /**
   * `POST /communications/onlineMeetings`
   *
   */
  async create(
    body: Endpoints['POST /communications/onlineMeetings']['body'],
    params?: Endpoints['POST /communications/onlineMeetings']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/communications/onlineMeetings', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /communications/onlineMeetings']['response']);
  }
}
