import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CalendarsClient } from './calendars';

/**
 * /me/calendarGroups
 * Provides operations to manage the calendarGroups property of the microsoft.graph.user entity.
 */
export class CalendarGroupsClient {
  protected baseUrl = '/me/calendarGroups';
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
   * `/me/calendarGroups/{calendarGroup-id}/calendars`
   *
   * Provides operations to manage the calendars property of the microsoft.graph.calendarGroup entity.
   */
  calendars(calendarGroupId: string) {
    return new CalendarsClient(calendarGroupId, this.http);
  }

  /**
   * `DELETE /me/calendarGroups/{calendarGroup-id}`
   *
   * Delete a calendar group other than the default calendar group.
   */
  async delete(
    params?: Endpoints['DELETE /me/calendarGroups/{calendarGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'calendarGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) => res.data as Endpoints['DELETE /me/calendarGroups/{calendarGroup-id}']['response']
      );
  }

  /**
   * `GET /me/calendarGroups`
   *
   * Get the user&#x27;s calendar groups.
   */
  async list(
    params?: Endpoints['GET /me/calendarGroups']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups',
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
      .then((res) => res.data as Endpoints['GET /me/calendarGroups']['response']);
  }

  /**
   * `GET /me/calendarGroups/{calendarGroup-id}`
   *
   * Retrieve the properties and relationships of a calendar group object.
   */
  async get(
    params?: Endpoints['GET /me/calendarGroups/{calendarGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendarGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /me/calendarGroups/{calendarGroup-id}']['response']
      );
  }

  /**
   * `PATCH /me/calendarGroups/{calendarGroup-id}`
   *
   * Update the properties of calendargroup object.
   */
  async update(
    body: Endpoints['PATCH /me/calendarGroups/{calendarGroup-id}']['body'],
    params?: Endpoints['PATCH /me/calendarGroups/{calendarGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}',
      [{ name: 'calendarGroup-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) => res.data as Endpoints['PATCH /me/calendarGroups/{calendarGroup-id}']['response']
      );
  }

  /**
   * `POST /me/calendarGroups`
   *
   * Use this API to create a new CalendarGroup.
   */
  async create(
    body: Endpoints['POST /me/calendarGroups']['body'],
    params?: Endpoints['POST /me/calendarGroups']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/calendarGroups', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/calendarGroups']['response']);
  }
}
