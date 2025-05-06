import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './attendeeReport-types.ts';

/**
 * /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport
 * Provides operations to manage the media for the cloudCommunications entity.
 */
export class AttendeeReportClient {
  protected baseUrl = '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport';
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
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
   */
  async delete(
    params?: Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'onlineMeeting-id', in: 'path' },
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
          res.data as Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
      );
  }

  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
   */
  async get(
    params?: Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      [{ name: 'onlineMeeting-id', in: 'path' }],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
      );
  }

  /**
   * `PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport`
   *
   * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
   */
  async set(
    body: Endpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['body'],
    params?: Endpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
      [{ name: 'onlineMeeting-id', in: 'path' }],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .put(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
      );
  }
}
