import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ServiceProvisioningErrorsClient } from './serviceProvisioningErrors';

/**
 * /teams/{team-id}/group
 * Provides operations to manage the group property of the microsoft.graph.team entity.
 */
export class GroupClient {
  protected baseUrl = '/teams/{team-id}/group';
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
   * `/teams/{team-id}/group/serviceProvisioningErrors`
   *
   */
  get serviceProvisioningErrors() {
    return new ServiceProvisioningErrorsClient(this.http);
  }

  /**
   * `GET /teams/{team-id}/group`
   *
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/group']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/group',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/group']['response']);
  }
}
