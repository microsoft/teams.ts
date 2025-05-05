import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './timesOff-types.ts';

/**
 * /teams/{team-id}/schedule/timesOff
 * Provides operations to manage the timesOff property of the microsoft.graph.schedule entity.
 */
export class TimesOffClient {
  protected baseUrl = '/teams/{team-id}/schedule/timesOff';
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
   * `DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   * Delete a timeOff instance from a schedule.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'timeOff-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/timesOff`
   *
   * Get the list of timeOff instances in a schedule.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/schedule/timesOff']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timesOff',
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
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/schedule/timesOff']['response']);
  }

  /**
   * `GET /teams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   * Retrieve the properties and relationships of a timeOff object by ID.
   */
  async get$1(
    params?: Endpoints['GET /teams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'timeOff-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   * Replace an existing timeOff object. If the specified timeOff object doesn&#x27;t exist, this method returns 404 Not found.
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'timeOff-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/schedule/timesOff`
   *
   * Create a new timeOff instance in a schedule.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/schedule/timesOff']['body'],
    params?: Endpoints['POST /teams/{team-id}/schedule/timesOff']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timesOff',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/schedule/timesOff']['response']);
  }
}
