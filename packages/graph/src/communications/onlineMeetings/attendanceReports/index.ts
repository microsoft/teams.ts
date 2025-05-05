import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AttendanceRecordsClient } from './attendanceRecords';

/**
 * /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports
 * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeetingBase entity.
 */
export class AttendanceReportsClient {
  protected baseUrl = '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports';
  protected http: http.Client;

  constructor(
    protected readonly onlineMeetingId: string,
    options?: http.Client | http.ClientOptions
  ) {
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
   * `/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords`
   *
   * Provides operations to manage the attendanceRecords property of the microsoft.graph.meetingAttendanceReport entity.
   */
  attendanceRecords(meetingAttendanceReportId: string) {
    return new AttendanceRecordsClient(meetingAttendanceReportId, this.http);
  }

  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'meetingAttendanceReport-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
      );
  }

  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports`
   *
   * The attendance reports of an online meeting. Read-only.
   */
  async list(
    params?: Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'onlineMeeting-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports']['response']
      );
  }

  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
   *
   * The attendance reports of an online meeting. Read-only.
   */
  async get(
    params?: Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'meetingAttendanceReport-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
      );
  }

  /**
   * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['body'],
    params?: Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}',
      [
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'meetingAttendanceReport-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
      );
  }

  /**
   * `POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports`
   *
   */
  async create(
    body: Endpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports']['body'],
    params?: Endpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/attendanceReports',
      [{ name: 'onlineMeeting-id', in: 'path' }],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/attendanceReports']['response']
      );
  }
}
