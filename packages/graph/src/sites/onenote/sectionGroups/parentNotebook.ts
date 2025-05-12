import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './parentNotebook-types.ts';

/**
 * /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook
 * Provides operations to manage the parentNotebook property of the microsoft.graph.sectionGroup entity.
 */
export class ParentNotebookClient {
  protected baseUrl = '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook';
  protected http: http.Client;

  constructor(
    protected readonly sectionGroupId: string,
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
   * `GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook`
   *
   * The notebook that contains the section group. Read-only.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sectionGroup-id': this.sectionGroupId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook']['response']
      );
  }
}
