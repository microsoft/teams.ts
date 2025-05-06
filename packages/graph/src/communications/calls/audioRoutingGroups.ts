import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './audioRoutingGroups-types.ts';

/**
 * /communications/calls/{call-id}/audioRoutingGroups
 * Provides operations to manage the audioRoutingGroups property of the microsoft.graph.call entity.
 */
export class AudioRoutingGroupsClient {
  protected baseUrl = '/communications/calls/{call-id}/audioRoutingGroups';
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
   * `DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
   *
   * Delete the specified audioRoutingGroup.
   */
  async delete(
    params?: Endpoints['DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'call-id', in: 'path' },
        { name: 'audioRoutingGroup-id', in: 'path' },
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
          res.data as Endpoints['DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
      );
  }

  /**
   * `GET /communications/calls/{call-id}/audioRoutingGroups`
   *
   * Retrieve a list of audioRoutingGroup objects.
   */
  async list(
    params?: Endpoints['GET /communications/calls/{call-id}/audioRoutingGroups']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/audioRoutingGroups',
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
        (res) =>
          res.data as Endpoints['GET /communications/calls/{call-id}/audioRoutingGroups']['response']
      );
  }

  /**
   * `GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
   *
   * Retrieve the properties and relationships of an audioRoutingGroup object.
   */
  async get(
    params?: Endpoints['GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'call-id', in: 'path' },
        { name: 'audioRoutingGroup-id', in: 'path' },
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
          res.data as Endpoints['GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
      );
  }

  /**
   * `PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
   *
   * Modify sources and receivers of an audioRoutingGroup.
   */
  async update(
    body: Endpoints['PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['body'],
    params?: Endpoints['PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
      [
        { name: 'call-id', in: 'path' },
        { name: 'audioRoutingGroup-id', in: 'path' },
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
          res.data as Endpoints['PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
      );
  }

  /**
   * `POST /communications/calls/{call-id}/audioRoutingGroups`
   *
   * Create a new audioRoutingGroup.
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/audioRoutingGroups']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/audioRoutingGroups']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/audioRoutingGroups',
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
          res.data as Endpoints['POST /communications/calls/{call-id}/audioRoutingGroups']['response']
      );
  }
}
