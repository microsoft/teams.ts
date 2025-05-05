import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './attendanceRecords-types.ts';

/**
 * /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords
 * Provides operations to manage the attendanceRecords property of the microsoft.graph.meetingAttendanceReport entity.
 */
export class AttendanceRecordsClient {
  protected baseUrl =
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords';
  protected http: http.Client;

  constructor(
    protected readonly meetingAttendanceReportId: string,
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
   * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
        { name: 'meetingAttendanceReport-id', in: 'path' },
        { name: 'attendanceRecord-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'meetingAttendanceReport-id': this.meetingAttendanceReportId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
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
        { name: 'meetingAttendanceReport-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'meetingAttendanceReport-id': this.meetingAttendanceReportId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   * List of attendance records of an attendance report. Read-only.
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
        { name: 'meetingAttendanceReport-id', in: 'path' },
        { name: 'attendanceRecord-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'meetingAttendanceReport-id': this.meetingAttendanceReportId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}',
      [
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
        { name: 'meetingAttendanceReport-id', in: 'path' },
        { name: 'attendanceRecord-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'meetingAttendanceReport-id': this.meetingAttendanceReportId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords`
   *
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords',
      [
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
        { name: 'meetingAttendanceReport-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'meetingAttendanceReport-id': this.meetingAttendanceReportId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords']['response']
      );
  }
}
