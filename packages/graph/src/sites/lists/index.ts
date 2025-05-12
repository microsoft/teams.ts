import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ColumnsClient } from './columns';
import { ContentTypesClient } from './contentTypes';
import { CreatedByUserClient } from './createdByUser';
import { DriveClient } from './drive';
import { ItemsClient } from './items';
import { LastModifiedByUserClient } from './lastModifiedByUser';
import { OperationsClient } from './operations';
import { SubscriptionsClient } from './subscriptions';

/**
 * /sites/{site-id}/lists
 * Provides operations to manage the lists property of the microsoft.graph.site entity.
 */
export class ListsClient {
  protected baseUrl = '/sites/{site-id}/lists';
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
   * `/sites/{site-id}/lists/{list-id}/columns`
   *
   * Provides operations to manage the columns property of the microsoft.graph.list entity.
   */
  columns(listId: string) {
    return new ColumnsClient(listId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/contentTypes`
   *
   * Provides operations to manage the contentTypes property of the microsoft.graph.list entity.
   */
  contentTypes(listId: string) {
    return new ContentTypesClient(listId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/createdByUser`
   *
   * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
   */
  createdByUser(listId: string) {
    return new CreatedByUserClient(listId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/drive`
   *
   * Provides operations to manage the drive property of the microsoft.graph.list entity.
   */
  drive(listId: string) {
    return new DriveClient(listId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/items`
   *
   * Provides operations to manage the items property of the microsoft.graph.list entity.
   */
  items(listId: string) {
    return new ItemsClient(listId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/lastModifiedByUser`
   *
   * Provides operations to manage the lastModifiedByUser property of the microsoft.graph.baseItem entity.
   */
  lastModifiedByUser(listId: string) {
    return new LastModifiedByUserClient(listId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/operations`
   *
   * Provides operations to manage the operations property of the microsoft.graph.list entity.
   */
  operations(listId: string) {
    return new OperationsClient(listId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/subscriptions`
   *
   * Provides operations to manage the subscriptions property of the microsoft.graph.list entity.
   */
  subscriptions(listId: string) {
    return new SubscriptionsClient(listId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/lists/{list-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/lists/{list-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /sites/{site-id}/lists/{list-id}']['response']);
  }

  /**
   * `GET /sites/{site-id}/lists`
   *
   * Get the collection of lists for a site. Lists with the system facet are hidden by default.
To list them, include system in your $select statement.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/lists']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists',
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
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/lists']['response']);
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}`
   *
   * Returns the metadata for a list.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}']['response']);
  }

  /**
   * `PATCH /sites/{site-id}/lists/{list-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/lists/{list-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/lists/{list-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /sites/{site-id}/lists/{list-id}']['response']);
  }

  /**
   * `POST /sites/{site-id}/lists`
   *
   * Create a new list in a site.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/lists']['body'],
    params?: Endpoints['POST /sites/{site-id}/lists']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/sites/{site-id}/lists', [{ name: 'site-id', in: 'path' }], {
      ...(params || {}),
      'site-id': this.siteId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /sites/{site-id}/lists']['response']);
  }
}
