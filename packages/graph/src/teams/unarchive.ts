import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './unarchive-types.ts';

/**
 * /teams/{team-id}/unarchive
 * Provides operations to call the unarchive method.
 */
export class UnarchiveClient {
  protected baseUrl = '/teams/{team-id}/unarchive';
  protected http: http.Client;

  constructor(
    protected readonly teamId: string,
    options?: http.Client | http.ClientOptions
  ) {
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
   * `POST /teams/{team-id}/unarchive`
   *
   * Restore an archived team. This API restores users&#x27; ability to send messages and edit the team, abiding by tenant and team settings. A Team is archived using the archive API. Unarchiving is an async operation. A team is unarchived once the async operation completes successfully, which might occur subsequent to a response from this API.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/unarchive']['body'],
    params?: Endpoints['POST /teams/{team-id}/unarchive']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teams/{team-id}/unarchive', [{ name: 'team-id', in: 'path' }], {
      ...(params || {}),
      'team-id': this.teamId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/unarchive']['response']);
  }
}
