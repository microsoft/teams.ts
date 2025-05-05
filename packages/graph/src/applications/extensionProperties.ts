import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './extensionProperties-types.ts';

/**
 * /applications/{application-id}/extensionProperties
 * Provides operations to manage the extensionProperties property of the microsoft.graph.application entity.
 */
export class ExtensionPropertiesClient {
  protected baseUrl = '/applications/{application-id}/extensionProperties';
  protected http: http.Client;

  constructor(
    protected readonly applicationId: string,
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
   * `DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}`
   *
   * Delete a directory extension definition represented by an extensionProperty object. You can delete only directory extensions that aren&#x27;t synced from on-premises active directory (AD).
   */
  async delete(
    params?: Endpoints['DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'application-id', in: 'path' },
        { name: 'extensionProperty-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/extensionProperties`
   *
   * Retrieve the list of directory extension definitions, represented by extensionProperty objects on an application.
   */
  async list(
    params?: Endpoints['GET /applications/{application-id}/extensionProperties']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/extensionProperties',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/extensionProperties']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/extensionProperties/{extensionProperty-id}`
   *
   * Read a directory extension definition represented by an extensionProperty object.
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}/extensionProperties/{extensionProperty-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
        { name: 'extensionProperty-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/extensionProperties/{extensionProperty-id}']['response']
      );
  }

  /**
   * `PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}']['body'],
    params?: Endpoints['PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
      [
        { name: 'application-id', in: 'path' },
        { name: 'extensionProperty-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}']['response']
      );
  }

  /**
   * `POST /applications/{application-id}/extensionProperties`
   *
   * Create a new directory extension definition, represented by an extensionProperty object.
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/extensionProperties']['body'],
    params?: Endpoints['POST /applications/{application-id}/extensionProperties']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/extensionProperties',
      [{ name: 'application-id', in: 'path' }],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/extensionProperties']['response']
      );
  }
}
