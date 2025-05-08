import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './endBreak-types.ts';

/**
 * /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak
 * Provides operations to call the endBreak method.
 */
export class EndBreakClient {
  protected baseUrl = '/teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak';
  protected http: http.Client;

  constructor(
    protected readonly timeCardId: string,
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
   * `POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak`
   *
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['body'],
    params?: Endpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak',
      [
        { name: 'team-id', in: 'path' },
        { name: 'timeCard-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'timeCard-id': this.timeCardId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['response']
      );
  }
}
