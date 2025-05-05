import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './openShiftChangeRequests-types.ts';

/**
 * /teams/{team-id}/schedule/openShiftChangeRequests
 * Provides operations to manage the openShiftChangeRequests property of the microsoft.graph.schedule entity.
 */
export class OpenShiftChangeRequestsClient {
  protected baseUrl = '/teams/{team-id}/schedule/openShiftChangeRequests';
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
   * `DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'openShiftChangeRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/openShiftChangeRequests`
   *
   * Retrieve a list of openShiftChangeRequest objects in a team.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/openShiftChangeRequests',
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
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   * Retrieve the properties and relationships of an openShiftChangeRequest object.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'openShiftChangeRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'openShiftChangeRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/schedule/openShiftChangeRequests`
   *
   * Create instance of an openShiftChangeRequest object.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/schedule/openShiftChangeRequests']['body'],
    params?: Endpoints['POST /teams/{team-id}/schedule/openShiftChangeRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/openShiftChangeRequests',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teams/{team-id}/schedule/openShiftChangeRequests']['response']
      );
  }
}
