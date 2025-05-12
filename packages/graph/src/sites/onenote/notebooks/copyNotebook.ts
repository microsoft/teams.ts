import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './copyNotebook-types.ts';

/**
 * /sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook
 * Provides operations to call the copyNotebook method.
 */
export class CopyNotebookClient {
  protected baseUrl = '/sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook';
  protected http: http.Client;

  constructor(
    protected readonly notebookId: string,
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
   * `POST /sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook`
   *
   * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook']['body'],
    params?: Endpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook',
      [
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'notebook-id': this.notebookId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook']['response']
      );
  }
}
