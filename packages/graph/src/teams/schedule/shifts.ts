import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './shifts-types.ts';

/**
 * /teams/{team-id}/schedule/shifts
 * Provides operations to manage the shifts property of the microsoft.graph.schedule entity.
 */
export class ShiftsClient {
  protected baseUrl = '/teams/{team-id}/schedule/shifts';
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
   * `DELETE /teams/{team-id}/schedule/shifts/{shift-id}`
   *
   * Delete a shift from the schedule.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/schedule/shifts/{shift-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/shifts/{shift-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'shift-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/schedule/shifts/{shift-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/shifts`
   *
   * Get the list of shift instances in a schedule.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/schedule/shifts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/shifts',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/schedule/shifts']['response']);
  }

  /**
   * `GET /teams/{team-id}/schedule/shifts/{shift-id}`
   *
   * Retrieve the properties and relationships of a shift object by ID.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/schedule/shifts/{shift-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/shifts/{shift-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'shift-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/schedule/shifts/{shift-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/schedule/shifts/{shift-id}`
   *
   * Replace an existing shift. If the specified shift doesn&#x27;t exist, this method returns 404 Not found. The duration of a shift can&#x27;t be less than 1 minute or longer than 24 hours.
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/schedule/shifts/{shift-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/schedule/shifts/{shift-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/shifts/{shift-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'shift-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/schedule/shifts/{shift-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/schedule/shifts`
   *
   * Create a new shift instance in a schedule. The duration of a shift cannot be less than 1 minute or longer than 24 hours.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/schedule/shifts']['body'],
    params?: Endpoints['POST /teams/{team-id}/schedule/shifts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/shifts',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/schedule/shifts']['response']);
  }
}
