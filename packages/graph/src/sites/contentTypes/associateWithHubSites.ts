import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './associateWithHubSites-types.ts';

/**
 * /sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites
 * Provides operations to call the associateWithHubSites method.
 */
export class AssociateWithHubSitesClient {
  protected baseUrl = '/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites';
  protected http: http.Client;

  constructor(
    protected readonly contentTypeId: string,
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
   * `POST /sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites`
   *
   * Associate a published content type present in a content type hub with a list of hub sites.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites']['body'],
    params?: Endpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites',
      [
        { name: 'site-id', in: 'path' },
        { name: 'contentType-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'contentType-id': this.contentTypeId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites']['response']
      );
  }
}
