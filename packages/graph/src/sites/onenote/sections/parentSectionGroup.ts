import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './parentSectionGroup-types.ts';

/**
 * /sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup
 * Provides operations to manage the parentSectionGroup property of the microsoft.graph.onenoteSection entity.
 */
export class ParentSectionGroupClient {
  protected baseUrl = '/sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup';
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
   * `GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup`
   *
   * The section group that contains the section.  Read-only.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'onenoteSection-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onenoteSection-id': this.onenoteSectionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup']['response']
      );
  }
}
