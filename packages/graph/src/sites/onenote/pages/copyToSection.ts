import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './copyToSection-types.ts';

/**
 * /sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection
 * Provides operations to call the copyToSection method.
 */
export class CopyToSectionClient {
  protected baseUrl = '/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection';
  protected http: http.Client;

  constructor(
    protected readonly onenotePageId: string,
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
   * `POST /sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection`
   *
   * Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['body'],
    params?: Endpoints['POST /sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection',
      [
        { name: 'site-id', in: 'path' },
        { name: 'onenotePage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onenotePage-id': this.onenotePageId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['response']
      );
  }
}
