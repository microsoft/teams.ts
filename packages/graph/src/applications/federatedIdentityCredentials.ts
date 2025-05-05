import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './federatedIdentityCredentials-types.ts';

/**
 * /applications/{application-id}/federatedIdentityCredentials
 * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.application entity.
 */
export class FederatedIdentityCredentialsClient {
  protected baseUrl = '/applications/{application-id}/federatedIdentityCredentials';
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
   * `DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
   *
   * Delete a federatedIdentityCredential object from an application.
   */
  async delete(
    params?: Endpoints['DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'application-id', in: 'path' },
        { name: 'federatedIdentityCredential-id', in: 'path' },
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
          res.data as Endpoints['DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/federatedIdentityCredentials`
   *
   * Get a list of the federatedIdentityCredential objects and their properties.
   */
  async list(
    params?: Endpoints['GET /applications/{application-id}/federatedIdentityCredentials']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/federatedIdentityCredentials',
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
          res.data as Endpoints['GET /applications/{application-id}/federatedIdentityCredentials']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
   *
   * Read the properties and relationships of a federatedIdentityCredential object.
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
        { name: 'federatedIdentityCredential-id', in: 'path' },
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
          res.data as Endpoints['GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
      );
  }

  /**
   * `PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
   *
   * Create a new federatedIdentityCredential object for an application if it doesn&#x27;t exist, or update the properties of an existing federatedIdentityCredential object. By configuring a trust relationship between your Microsoft Entra application registration and the identity provider for your compute platform, you can use tokens issued by that platform to authenticate with Microsoft identity platform and call APIs in the Microsoft ecosystem. Maximum of 20 objects can be added to an application.
   */
  async update(
    body: Endpoints['PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['body'],
    params?: Endpoints['PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
      [
        { name: 'application-id', in: 'path' },
        { name: 'federatedIdentityCredential-id', in: 'path' },
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
          res.data as Endpoints['PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
      );
  }

  /**
   * `POST /applications/{application-id}/federatedIdentityCredentials`
   *
   * Create a new federatedIdentityCredential object for an application. By configuring a trust relationship between your Microsoft Entra application registration and the identity provider for your compute platform, you can use tokens issued by that platform to authenticate with Microsoft identity platform and call APIs in the Microsoft ecosystem. Maximum of 20 objects can be added to an application.
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/federatedIdentityCredentials']['body'],
    params?: Endpoints['POST /applications/{application-id}/federatedIdentityCredentials']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/federatedIdentityCredentials',
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
          res.data as Endpoints['POST /applications/{application-id}/federatedIdentityCredentials']['response']
      );
  }
}
