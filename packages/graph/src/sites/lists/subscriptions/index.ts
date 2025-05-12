import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ReauthorizeClient } from './reauthorize';

/**
 * /sites/{site-id}/lists/{list-id}/subscriptions
 * Provides operations to manage the subscriptions property of the microsoft.graph.list entity.
 */
export class SubscriptionsClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/subscriptions';
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
   * `/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize`
   *
   * Provides operations to call the reauthorize method.
   */
  reauthorize(subscriptionId: string) {
    return new ReauthorizeClient(subscriptionId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'subscription-id', in: 'path' },
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
          res.data as Endpoints['DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}/subscriptions`
   *
   * The set of subscriptions on the list.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/subscriptions',
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
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
   *
   * The set of subscriptions on the list.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'subscription-id', in: 'path' },
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
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'subscription-id', in: 'path' },
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
          res.data as Endpoints['PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/lists/{list-id}/subscriptions`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions']['body'],
    params?: Endpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/subscriptions',
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
          res.data as Endpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions']['response']
      );
  }
}
