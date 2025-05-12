import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { NotebooksClient } from './notebooks';
import { OperationsClient } from './operations';
import { PagesClient } from './pages';
import { ResourcesClient } from './resources';
import { SectionGroupsClient } from './sectionGroups';
import { SectionsClient } from './sections';

/**
 * /sites/{site-id}/onenote
 * Provides operations to manage the onenote property of the microsoft.graph.site entity.
 */
export class OnenoteClient {
  protected baseUrl = '/sites/{site-id}/onenote';
  protected http: http.Client;

  constructor(
    protected readonly siteId: string,
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
   * `/sites/{site-id}/onenote/notebooks`
   *
   * Provides operations to manage the notebooks property of the microsoft.graph.onenote entity.
   */
  get notebooks() {
    return new NotebooksClient(this.http);
  }

  /**
   * `/sites/{site-id}/onenote/operations`
   *
   * Provides operations to manage the operations property of the microsoft.graph.onenote entity.
   */
  get operations() {
    return new OperationsClient(this.http);
  }

  /**
   * `/sites/{site-id}/onenote/pages`
   *
   * Provides operations to manage the pages property of the microsoft.graph.onenote entity.
   */
  get pages() {
    return new PagesClient(this.http);
  }

  /**
   * `/sites/{site-id}/onenote/resources`
   *
   * Provides operations to manage the resources property of the microsoft.graph.onenote entity.
   */
  get resources() {
    return new ResourcesClient(this.http);
  }

  /**
   * `/sites/{site-id}/onenote/sectionGroups`
   *
   * Provides operations to manage the sectionGroups property of the microsoft.graph.onenote entity.
   */
  get sectionGroups() {
    return new SectionGroupsClient(this.http);
  }

  /**
   * `/sites/{site-id}/onenote/sections`
   *
   * Provides operations to manage the sections property of the microsoft.graph.onenote entity.
   */
  get sections() {
    return new SectionsClient(this.http);
  }

  /**
   * `DELETE /sites/{site-id}/onenote`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/onenote']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /sites/{site-id}/onenote']['response']);
  }

  /**
   * `GET /sites/{site-id}/onenote`
   *
   * Calls the OneNote service for notebook related operations.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/onenote']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/onenote']['response']);
  }

  /**
   * `PATCH /sites/{site-id}/onenote`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/onenote']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/onenote']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/sites/{site-id}/onenote', [{ name: 'site-id', in: 'path' }], {
      ...(params || {}),
      'site-id': this.siteId,
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /sites/{site-id}/onenote']['response']);
  }
}
