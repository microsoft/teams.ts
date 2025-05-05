import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './teamsAppSettings-types.ts';

/**
 * /teamwork/teamsAppSettings
 * Provides operations to manage the teamsAppSettings property of the microsoft.graph.teamwork entity.
 */
export class TeamsAppSettingsClient {
  protected baseUrl = '/teamwork/teamsAppSettings';
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
   * `DELETE /teamwork/teamsAppSettings`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teamwork/teamsAppSettings']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teamwork/teamsAppSettings', [{ name: 'If-Match', in: 'header' }], {
      ...(params || {}),
    });

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /teamwork/teamsAppSettings']['response']);
  }

  /**
   * `GET /teamwork/teamsAppSettings`
   *
   * Get the tenant-wide teamsAppSettings for all Teams apps in the tenant.
   */
  async list(
    params?: Endpoints['GET /teamwork/teamsAppSettings']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/teamsAppSettings',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teamwork/teamsAppSettings']['response']);
  }

  /**
   * `PATCH /teamwork/teamsAppSettings`
   *
   * Update the tenant-wide teamsAppSettings for all Teams apps in the tenant.
   */
  async update(
    body: Endpoints['PATCH /teamwork/teamsAppSettings']['body'],
    params?: Endpoints['PATCH /teamwork/teamsAppSettings']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teamwork/teamsAppSettings', [], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /teamwork/teamsAppSettings']['response']);
  }
}
