import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './timeOffRequests-types.ts';

/**
 * /teams/{team-id}/schedule/timeOffRequests
 * Provides operations to manage the timeOffRequests property of the microsoft.graph.schedule entity.
 */
export class TimeOffRequestsClient {
  protected baseUrl = '/teams/{team-id}/schedule/timeOffRequests';
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
   * `DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   * Delete a timeOffRequest object.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'timeOffRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/timeOffRequests`
   *
   * Retrieve a list of timeOffRequest objects in the team.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/schedule/timeOffRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeOffRequests',
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
        (res) => res.data as Endpoints['GET /teams/{team-id}/schedule/timeOffRequests']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   * Retrieve the properties and relationships of a timeoffrequest object.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'timeOffRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'timeOffRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/schedule/timeOffRequests`
   *
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/schedule/timeOffRequests']['body'],
    params?: Endpoints['POST /teams/{team-id}/schedule/timeOffRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeOffRequests',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /teams/{team-id}/schedule/timeOffRequests']['response']
      );
  }
}
