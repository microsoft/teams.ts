import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CreatedByUserClient } from './createdByUser';
import { LastModifiedByUserClient } from './lastModifiedByUser';

/**
 * /sites/{site-id}/pages
 * Provides operations to manage the pages property of the microsoft.graph.site entity.
 */
export class PagesClient {
  protected baseUrl = '/sites/{site-id}/pages';
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
   * `/sites/{site-id}/pages/{baseSitePage-id}/createdByUser`
   *
   * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
   */
  createdByUser(baseSitePageId: string) {
    return new CreatedByUserClient(baseSitePageId, this.http);
  }

  /**
   * `/sites/{site-id}/pages/{baseSitePage-id}/lastModifiedByUser`
   *
   * Provides operations to manage the lastModifiedByUser property of the microsoft.graph.baseItem entity.
   */
  lastModifiedByUser(baseSitePageId: string) {
    return new LastModifiedByUserClient(baseSitePageId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/pages/{baseSitePage-id}`
   *
   * Delete a baseSitePage from the site pages list in a site.
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/pages/{baseSitePage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/pages/{baseSitePage-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'baseSitePage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/pages/{baseSitePage-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/pages`
   *
   * Get the collection of baseSitePage objects from the site pages list in a site. All pages in the site are returned (with pagination). Sort alphabetically by name in ascending order. The following table lists the available subtypes.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/pages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/pages',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
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
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/pages']['response']);
  }

  /**
   * `GET /sites/{site-id}/pages/{baseSitePage-id}`
   *
   * Get the metadata for a baseSitePage in the site pages list in a site.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/pages/{baseSitePage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/pages/{baseSitePage-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'baseSitePage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /sites/{site-id}/pages/{baseSitePage-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/pages/{baseSitePage-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/pages/{baseSitePage-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/pages/{baseSitePage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/pages/{baseSitePage-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'baseSitePage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) => res.data as Endpoints['PATCH /sites/{site-id}/pages/{baseSitePage-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/pages`
   *
   * Create a new sitePage in the site pages list in a site.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/pages']['body'],
    params?: Endpoints['POST /sites/{site-id}/pages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/sites/{site-id}/pages', [{ name: 'site-id', in: 'path' }], {
      ...(params || {}),
      'site-id': this.siteId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /sites/{site-id}/pages']['response']);
  }
}
