import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AttendanceRecordsClient } from './attendanceRecords';

/**
 * /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports
 * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeetingBase entity.
 */
export class AttendanceReportsClient {
  protected baseUrl =
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports';
  protected http: http.Client;

  constructor(
    protected readonly virtualEventSessionId: string,
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
   * `/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords`
   *
   * Provides operations to manage the attendanceRecords property of the microsoft.graph.meetingAttendanceReport entity.
   */
  attendanceRecords(meetingAttendanceReportId: string) {
    return new AttendanceRecordsClient(meetingAttendanceReportId, this.http);
  }

  /**
   * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
        { name: 'meetingAttendanceReport-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventSession-id': this.virtualEventSessionId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports`
   *
   * Get a list of meetingAttendanceReport objects for an onlineMeeting or a virtualEvent. Each time an online meeting or a virtual event ends, an attendance report is generated for that session.
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventSession-id': this.virtualEventSessionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}`
   *
   * Get the meetingAttendanceReport for an onlineMeeting or a virtualEvent. When an online meeting ends, an attendance report is generated for that session.
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
        { name: 'meetingAttendanceReport-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventSession-id': this.virtualEventSessionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}',
      [
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
        { name: 'meetingAttendanceReport-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventSession-id': this.virtualEventSessionId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports`
   *
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports',
      [
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventSession-id': this.virtualEventSessionId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports']['response']
      );
  }
}
