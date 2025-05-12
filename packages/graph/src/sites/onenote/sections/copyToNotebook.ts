import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './copyToNotebook-types.ts';

/**
 * /sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook
 * Provides operations to call the copyToNotebook method.
 */
export class CopyToNotebookClient {
  protected baseUrl = '/sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook';
  protected http: http.Client;

  constructor(
    protected readonly onenoteSectionId: string,
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
   * `POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook`
   *
   * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook']['body'],
    params?: Endpoints['POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook',
      [
        { name: 'site-id', in: 'path' },
        { name: 'onenoteSection-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onenoteSection-id': this.onenoteSectionId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook']['response']
      );
  }
}
