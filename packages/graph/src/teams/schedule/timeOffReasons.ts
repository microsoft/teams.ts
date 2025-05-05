import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './timeOffReasons-types.ts';

/**
 * /teams/{team-id}/schedule/timeOffReasons
 * Provides operations to manage the timeOffReasons property of the microsoft.graph.schedule entity.
 */
export class TimeOffReasonsClient {
  protected baseUrl = '/teams/{team-id}/schedule/timeOffReasons';
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
   * `DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   * Mark a timeOffReason as inactive by setting the isActive property. Every team must include at least one timeoff reason. This method doesn&#x27;t remove the specified timeOffReason instance. timeOffItem instances that have been assigned this reason remain assigned to this reason.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'timeOffReason-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/timeOffReasons`
   *
   * Get the list of timeOffReasons in a schedule.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/schedule/timeOffReasons']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeOffReasons',
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
      .then(
        (res) => res.data as Endpoints['GET /teams/{team-id}/schedule/timeOffReasons']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   * Retrieve the properties and relationships of a timeOffReason object by ID.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'timeOffReason-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   * Replace an existing timeOffReason. If the specified timeOffReason doesn&#x27;t exist, this method returns 404 Not found.
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'timeOffReason-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/schedule/timeOffReasons`
   *
   * Create a new timeOffReason.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/schedule/timeOffReasons']['body'],
    params?: Endpoints['POST /teams/{team-id}/schedule/timeOffReasons']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeOffReasons',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /teams/{team-id}/schedule/timeOffReasons']['response']
      );
  }
}
