import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './getNotebookFromWebUrl-types.ts';

/**
 * /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl
 * Provides operations to call the getNotebookFromWebUrl method.
 */
export class GetNotebookFromWebUrlClient {
  protected baseUrl = '/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl';
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
   * `POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl`
   *
   * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['body'],
    params?: Endpoints['POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl',
      [{ name: 'site-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['response']
      );
  }
}
