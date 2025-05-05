import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './swapShiftsChangeRequests-types.ts';

/**
 * /teams/{team-id}/schedule/swapShiftsChangeRequests
 * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
 */
export class SwapShiftsChangeRequestsClient {
  protected baseUrl = '/teams/{team-id}/schedule/swapShiftsChangeRequests';
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
   * `DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'swapShiftsChangeRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/swapShiftsChangeRequests`
   *
   * Retrieve a list of swapShiftsChangeRequest objects in the team.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/swapShiftsChangeRequests',
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
          res.data as Endpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   * Retrieve the properties and relationships of a swapShiftsChangeRequest object.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'swapShiftsChangeRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'swapShiftsChangeRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/schedule/swapShiftsChangeRequests`
   *
   * Create an instance of a swapShiftsChangeRequest object.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/schedule/swapShiftsChangeRequests']['body'],
    params?: Endpoints['POST /teams/{team-id}/schedule/swapShiftsChangeRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/swapShiftsChangeRequests',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teams/{team-id}/schedule/swapShiftsChangeRequests']['response']
      );
  }
}
