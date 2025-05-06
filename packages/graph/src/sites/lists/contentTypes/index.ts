import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AddCopyClient } from './addCopy';
import { AddCopyFromContentTypeHubClient } from './addCopyFromContentTypeHub';
import { AssociateWithHubSitesClient } from './associateWithHubSites';
import { BaseClient } from './base';
import { BaseTypesClient } from './baseTypes';
import { ColumnLinksClient } from './columnLinks';
import { ColumnPositionsClient } from './columnPositions';
import { ColumnsClient } from './columns';
import { CopyToDefaultContentLocationClient } from './copyToDefaultContentLocation';
import { PublishClient } from './publish';
import { UnpublishClient } from './unpublish';

/**
 * /sites/{site-id}/lists/{list-id}/contentTypes
 * Provides operations to manage the contentTypes property of the microsoft.graph.list entity.
 */
export class ContentTypesClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/contentTypes';
  protected http: http.Client;

  constructor(
    protected readonly listId: string,
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
   * `/sites/{site-id}/lists/{list-id}/contentTypes/addCopy`
   *
   * Provides operations to call the addCopy method.
   */
  get addCopy() {
    return new AddCopyClient(this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub`
   *
   * Provides operations to call the addCopyFromContentTypeHub method.
   */
  get addCopyFromContentTypeHub() {
    return new AddCopyFromContentTypeHubClient(this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites`
   *
   * Provides operations to call the associateWithHubSites method.
   */
  associateWithHubSites(contentTypeId: string) {
    return new AssociateWithHubSitesClient(contentTypeId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base`
   *
   * Provides operations to manage the base property of the microsoft.graph.contentType entity.
   */
  base(contentTypeId: string) {
    return new BaseClient(contentTypeId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes`
   *
   * Provides operations to manage the baseTypes property of the microsoft.graph.contentType entity.
   */
  baseTypes(contentTypeId: string) {
    return new BaseTypesClient(contentTypeId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks`
   *
   * Provides operations to manage the columnLinks property of the microsoft.graph.contentType entity.
   */
  columnLinks(contentTypeId: string) {
    return new ColumnLinksClient(contentTypeId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions`
   *
   * Provides operations to manage the columnPositions property of the microsoft.graph.contentType entity.
   */
  columnPositions(contentTypeId: string) {
    return new ColumnPositionsClient(contentTypeId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns`
   *
   * Provides operations to manage the columns property of the microsoft.graph.contentType entity.
   */
  columns(contentTypeId: string) {
    return new ColumnsClient(contentTypeId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation`
   *
   * Provides operations to call the copyToDefaultContentLocation method.
   */
  copyToDefaultContentLocation(contentTypeId: string) {
    return new CopyToDefaultContentLocationClient(contentTypeId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish`
   *
   * Provides operations to call the publish method.
   */
  publish(contentTypeId: string) {
    return new PublishClient(contentTypeId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish`
   *
   * Provides operations to call the unpublish method.
   */
  unpublish(contentTypeId: string) {
    return new UnpublishClient(contentTypeId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'contentType-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'list-id': this.listId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes`
   *
   * Get the collection of contentType resources in a list.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/contentTypes',
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
        { name: 'list-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'list-id': this.listId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}`
   *
   * The collection of content types present in this list.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'contentType-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'list-id': this.listId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'contentType-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'list-id': this.listId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/lists/{list-id}/contentTypes`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes']['body'],
    params?: Endpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/contentTypes',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'list-id': this.listId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes']['response']
      );
  }
}
