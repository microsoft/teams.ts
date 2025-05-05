import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './extensions-types.ts';

/**
 * /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions
 * Provides operations to manage the extensions property of the microsoft.graph.event entity.
 */
export class ExtensionsClient {
  protected baseUrl =
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions';
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
   * `DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
        { name: 'extension-id', in: 'path' },
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
          res.data as Endpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}']['response']
      );
  }

  /**
   * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions`
   *
   * The collection of open extensions defined for the event. Nullable.
   */
  async list(
    params?: Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions',
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
          res.data as Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions']['response']
      );
  }

  /**
   * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the event. Nullable.
   */
  async get(
    params?: Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
        { name: 'extension-id', in: 'path' },
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
          res.data as Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}']['response']
      );
  }

  /**
   * `PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}']['body'],
    params?: Endpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}',
      [
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
        { name: 'extension-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id': this.eventId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions/{extension-id}']['response']
      );
  }

  /**
   * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions`
   *
   */
  async create(
    body: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions']['body'],
    params?: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions',
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
          res.data as Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/extensions']['response']
      );
  }
}
