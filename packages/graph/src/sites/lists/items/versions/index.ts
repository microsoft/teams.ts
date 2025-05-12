import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { FieldsClient } from './fields';
import { RestoreVersionClient } from './restoreVersion';

/**
 * /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions
 * Provides operations to manage the versions property of the microsoft.graph.listItem entity.
 */
export class VersionsClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions';
  protected http: http.Client;

  constructor(
    protected readonly listItemId: string,
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
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields`
   *
   * Provides operations to manage the fields property of the microsoft.graph.listItemVersion entity.
   */
  fields(listItemVersionId: string) {
    return new FieldsClient(listItemVersionId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion`
   *
   * Provides operations to call the restoreVersion method.
   */
  restoreVersion(listItemVersionId: string) {
    return new RestoreVersionClient(listItemVersionId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
        { name: 'listItemVersion-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'listItem-id': this.listItemId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions`
   *
   * SharePoint can be configured to retain the history for list items. Previous versions may be retained for a finite period of time depending on admin settings which may be unique per user or location.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
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
        { name: 'listItem-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'listItem-id': this.listItemId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
   *
   * Retrieve the metadata for a specific version of a ListItem.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
        { name: 'listItemVersion-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'listItem-id': this.listItemId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
        { name: 'listItemVersion-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'listItem-id': this.listItemId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['body'],
    params?: Endpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'listItem-id': this.listItemId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['response']
      );
  }
}
