import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AnalyticsClient } from './analytics';
import { CreateLinkClient } from './createLink';
import { CreatedByUserClient } from './createdByUser';
import { DocumentSetVersionsClient } from './documentSetVersions';
import { DriveItemClient } from './driveItem';
import { FieldsClient } from './fields';
import { LastModifiedByUserClient } from './lastModifiedByUser';
import { VersionsClient } from './versions';

/**
 * /sites/{site-id}/lists/{list-id}/items
 * Provides operations to manage the items property of the microsoft.graph.list entity.
 */
export class ItemsClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/items';
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
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics`
   *
   * Provides operations to manage the analytics property of the microsoft.graph.listItem entity.
   */
  analytics(listItemId: string) {
    return new AnalyticsClient(listItemId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink`
   *
   * Provides operations to call the createLink method.
   */
  createLink(listItemId: string) {
    return new CreateLinkClient(listItemId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createdByUser`
   *
   * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
   */
  createdByUser(listItemId: string) {
    return new CreatedByUserClient(listItemId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions`
   *
   * Provides operations to manage the documentSetVersions property of the microsoft.graph.listItem entity.
   */
  documentSetVersions(listItemId: string) {
    return new DocumentSetVersionsClient(listItemId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem`
   *
   * Provides operations to manage the driveItem property of the microsoft.graph.listItem entity.
   */
  driveItem(listItemId: string) {
    return new DriveItemClient(listItemId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields`
   *
   * Provides operations to manage the fields property of the microsoft.graph.listItem entity.
   */
  fields(listItemId: string) {
    return new FieldsClient(listItemId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/lastModifiedByUser`
   *
   * Provides operations to manage the lastModifiedByUser property of the microsoft.graph.baseItem entity.
   */
  lastModifiedByUser(listItemId: string) {
    return new LastModifiedByUserClient(listItemId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions`
   *
   * Provides operations to manage the versions property of the microsoft.graph.listItem entity.
   */
  versions(listItemId: string) {
    return new VersionsClient(listItemId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}`
   *
   * Removes an item from a list.
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
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
          res.data as Endpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}/items`
   *
   * Get the collection of items in a list.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/items']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items',
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
        (res) => res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/items']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}`
   *
   * Returns the metadata for an item in a list.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
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
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
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
          res.data as Endpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/lists/{list-id}/items`
   *
   * Create a new listItem in a list.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/lists/{list-id}/items']['body'],
    params?: Endpoints['POST /sites/{site-id}/lists/{list-id}/items']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items',
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
        (res) => res.data as Endpoints['POST /sites/{site-id}/lists/{list-id}/items']['response']
      );
  }
}
