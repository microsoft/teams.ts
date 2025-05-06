import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './schedulingGroups-types.ts';

/**
 * /teams/{team-id}/schedule/schedulingGroups
 * Provides operations to manage the schedulingGroups property of the microsoft.graph.schedule entity.
 */
export class SchedulingGroupsClient {
  protected baseUrl = '/teams/{team-id}/schedule/schedulingGroups';
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
   * `DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   * Mark a schedulingGroup as inactive by setting its isActive property.
This method does not remove the schedulingGroup from the schedule. Existing shift instances assigned to the scheduling group remain part of the group.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'schedulingGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/schedulingGroups`
   *
   * Get the list of schedulingGroups in this schedule.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/schedule/schedulingGroups']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/schedulingGroups',
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
        (res) => res.data as Endpoints['GET /teams/{team-id}/schedule/schedulingGroups']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   * Retrieve the properties and relationships of a schedulingGroup by ID.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'schedulingGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   * Replace an existing schedulingGroup. If the specified schedulingGroup doesn&#x27;t exist, this method returns 404 Not found.
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'schedulingGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/schedule/schedulingGroups`
   *
   * Create a new schedulingGroup.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/schedule/schedulingGroups']['body'],
    params?: Endpoints['POST /teams/{team-id}/schedule/schedulingGroups']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/schedulingGroups',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teams/{team-id}/schedule/schedulingGroups']['response']
      );
  }
}
