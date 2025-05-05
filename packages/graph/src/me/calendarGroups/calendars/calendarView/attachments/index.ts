import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CreateUploadSessionClient } from './createUploadSession';

/**
 * /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments
 * Provides operations to manage the attachments property of the microsoft.graph.event entity.
 */
export class AttachmentsClient {
  protected baseUrl =
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments';
  protected http: http.Client;

  constructor(
    protected readonly eventId: string,
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
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/createUploadSession`
   *
   * Provides operations to call the createUploadSession method.
   */
  get createUploadSession() {
    return new CreateUploadSessionClient(this.http);
  }

  /**
   * `DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/{attachment-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/{attachment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/{attachment-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
        { name: 'attachment-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id': this.eventId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/{attachment-id}']['response']
      );
  }

  /**
   * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments`
   *
   * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
   */
  async list(
    params?: Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id': this.eventId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments']['response']
      );
  }

  /**
   * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/{attachment-id}`
   *
   * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/{attachment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/{attachment-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
        { name: 'attachment-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id': this.eventId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments/{attachment-id}']['response']
      );
  }

  /**
   * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments`
   *
   */
  async create(
    body: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments']['body'],
    params?: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments',
      [
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id': this.eventId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/attachments']['response']
      );
  }
}
