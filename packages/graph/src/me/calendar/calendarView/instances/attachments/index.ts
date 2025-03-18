import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CreateUploadSessionClient } from './createUploadSession';

interface Param {
  readonly in: string;
  readonly name: string;
  readonly explode?: boolean;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      const arrayFormat = param.explode == null || param.explode ? 'repeat' : 'comma'; // Assuming params are in form style
      query[param.name] = qs.stringify(data[param.name], { arrayFormat });
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments
 * Provides operations to manage the attachments property of the microsoft.graph.event entity.
 */
export class AttachmentsClient {
  protected baseUrl = '/me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments';
  protected http: http.Client;

  constructor(
    protected readonly eventId1: string,
    options?: http.Client | http.ClientOptions
  ) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `/me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments/createUploadSession`
   *
   * Provides operations to call the createUploadSession method.
   */
  get createUploadSession() {
    return new CreateUploadSessionClient(this.http);
  }

  /**
   * `DELETE /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
        { name: 'attachment-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}']['response']
      );
  }

  /**
   * `GET /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments`
   *
   * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
   */
  async list(
    params?: Endpoints['GET /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments']['response']
      );
  }

  /**
   * `GET /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}`
   *
   * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
        { name: 'attachment-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}']['response']
      );
  }

  /**
   * `POST /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments`
   *
   */
  async create(
    body: Endpoints['POST /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments']['body'],
    params?: Endpoints['POST /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments',
      [
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /me/calendar/calendarView/{event-id}/instances/{event-id1}/attachments']['response']
      );
  }
}
