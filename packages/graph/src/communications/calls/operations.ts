import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './operations-types.ts';

/**
 * /communications/calls/{call-id}/operations
 * Provides operations to manage the operations property of the microsoft.graph.call entity.
 */
export class OperationsClient {
  protected baseUrl = '/communications/calls/{call-id}/operations';
  protected http: http.Client;

  constructor(
    protected readonly callId: string,
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
   * `DELETE /communications/calls/{call-id}/operations/{commsOperation-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /communications/calls/{call-id}/operations/{commsOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/operations/{commsOperation-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'call-id', in: 'path' },
        { name: 'commsOperation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /communications/calls/{call-id}/operations/{commsOperation-id}']['response']
      );
  }

  /**
   * `GET /communications/calls/{call-id}/operations`
   *
   * Get the status of an operation that adds the large gallery view to a call.
   */
  async list(
    params?: Endpoints['GET /communications/calls/{call-id}/operations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/operations',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'call-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /communications/calls/{call-id}/operations']['response']
      );
  }

  /**
   * `GET /communications/calls/{call-id}/operations/{commsOperation-id}`
   *
   * Get the status of an operation that adds the large gallery view to a call.
   */
  async get(
    params?: Endpoints['GET /communications/calls/{call-id}/operations/{commsOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/operations/{commsOperation-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'call-id', in: 'path' },
        { name: 'commsOperation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/calls/{call-id}/operations/{commsOperation-id}']['response']
      );
  }

  /**
   * `PATCH /communications/calls/{call-id}/operations/{commsOperation-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/calls/{call-id}/operations/{commsOperation-id}']['body'],
    params?: Endpoints['PATCH /communications/calls/{call-id}/operations/{commsOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/operations/{commsOperation-id}',
      [
        { name: 'call-id', in: 'path' },
        { name: 'commsOperation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /communications/calls/{call-id}/operations/{commsOperation-id}']['response']
      );
  }

  /**
   * `POST /communications/calls/{call-id}/operations`
   *
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/operations']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/operations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/operations',
      [{ name: 'call-id', in: 'path' }],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /communications/calls/{call-id}/operations']['response']
      );
  }
}
