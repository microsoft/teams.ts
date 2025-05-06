import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './completeMigration-types.ts';

/**
 * /teams/{team-id}/completeMigration
 * Provides operations to call the completeMigration method.
 */
export class CompleteMigrationClient {
  protected baseUrl = '/teams/{team-id}/completeMigration';
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
   * `POST /teams/{team-id}/completeMigration`
   *
   * Complete the message migration process by removing migration mode from a team. Migration mode is a special state where certain operations are barred, like message POST and membership operations during the data migration process. After a completeMigration request is made, you can&#x27;t import additional messages into the team. You can add members to the team after the request returns a successful response.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/completeMigration']['body'],
    params?: Endpoints['POST /teams/{team-id}/completeMigration']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/completeMigration',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/completeMigration']['response']);
  }
}
