import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { FieldsClient } from './fields';
import { RestoreClient } from './restore';

/**
 * /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions
 * Provides operations to manage the documentSetVersions property of the microsoft.graph.listItem entity.
 */
export class DocumentSetVersionsClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions';
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
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
   *
   * Provides operations to manage the fields property of the microsoft.graph.listItemVersion entity.
   */
  fields(documentSetVersionId: string) {
    return new FieldsClient(documentSetVersionId, this.http);
  }

  /**
   * `/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore`
   *
   * Provides operations to call the restore method.
   */
  restore(documentSetVersionId: string) {
    return new RestoreClient(documentSetVersionId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
   *
   * Delete a version of a document set in a list.
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
        { name: 'documentSetVersion-id', in: 'path' },
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
          res.data as Endpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions`
   *
   * Get a list of the versions of a document set item in a list.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions',
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
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
   *
   * Read the properties and relationships of a documentSetVersion object.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
        { name: 'documentSetVersion-id', in: 'path' },
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
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
        { name: 'documentSetVersion-id', in: 'path' },
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
          res.data as Endpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions`
   *
   * Create a new version of a document set item in a list.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions']['body'],
    params?: Endpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions',
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
          res.data as Endpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions']['response']
      );
  }
}
