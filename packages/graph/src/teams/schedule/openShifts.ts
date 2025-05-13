import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './openShifts-types.ts';

/**
 * /teams/{team-id}/schedule/openShifts
 * Provides operations to manage the openShifts property of the microsoft.graph.schedule entity.
 */
export class OpenShiftsClient {
  protected baseUrl = '/teams/{team-id}/schedule/openShifts';
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
   * `DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   * Delete an openShift object.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/openShifts/{openShift-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'openShift-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/openShifts`
   *
   * List openShift objects in a team.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/schedule/openShifts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/openShifts',
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
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/schedule/openShifts']['response']);
  }

  /**
   * `GET /teams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   * Retrieve the properties and relationships of an openshift object.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/schedule/openShifts/{openShift-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/openShifts/{openShift-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'openShift-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/schedule/openShifts/{openShift-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   * Update the properties of an openShift object.
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/openShifts/{openShift-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'openShift-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/schedule/openShifts`
   *
   * Create an instance of an openShift object.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/schedule/openShifts']['body'],
    params?: Endpoints['POST /teams/{team-id}/schedule/openShifts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/openShifts',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /teams/{team-id}/schedule/openShifts']['response']
      );
  }
}
