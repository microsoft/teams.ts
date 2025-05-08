import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './dayNotes-types.ts';

/**
 * /teams/{team-id}/schedule/dayNotes
 * Provides operations to manage the dayNotes property of the microsoft.graph.schedule entity.
 */
export class DayNotesClient {
  protected baseUrl = '/teams/{team-id}/schedule/dayNotes';
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
   * `DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'dayNote-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/dayNotes`
   *
   * The day notes in the schedule.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/schedule/dayNotes']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/dayNotes',
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
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/schedule/dayNotes']['response']);
  }

  /**
   * `GET /teams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   * The day notes in the schedule.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'dayNote-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'dayNote-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/schedule/dayNotes`
   *
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/schedule/dayNotes']['body'],
    params?: Endpoints['POST /teams/{team-id}/schedule/dayNotes']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/dayNotes',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/schedule/dayNotes']['response']);
  }
}
