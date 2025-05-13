import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './contentSharingSessions-types.ts';

/**
 * /communications/calls/{call-id}/contentSharingSessions
 * Provides operations to manage the contentSharingSessions property of the microsoft.graph.call entity.
 */
export class ContentSharingSessionsClient {
  protected baseUrl = '/communications/calls/{call-id}/contentSharingSessions';
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
   * `DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'call-id', in: 'path' },
        { name: 'contentSharingSession-id', in: 'path' },
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
          res.data as Endpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
      );
  }

  /**
   * `GET /communications/calls/{call-id}/contentSharingSessions`
   *
   * Retrieve a list of contentSharingSession objects in a call.
   */
  async list(
    params?: Endpoints['GET /communications/calls/{call-id}/contentSharingSessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/contentSharingSessions',
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
          res.data as Endpoints['GET /communications/calls/{call-id}/contentSharingSessions']['response']
      );
  }

  /**
   * `GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
   *
   * Retrieve the properties of a contentSharingSession object in a call.
   */
  async get(
    params?: Endpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'call-id', in: 'path' },
        { name: 'contentSharingSession-id', in: 'path' },
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
          res.data as Endpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
      );
  }

  /**
   * `PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['body'],
    params?: Endpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
      [
        { name: 'call-id', in: 'path' },
        { name: 'contentSharingSession-id', in: 'path' },
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
          res.data as Endpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
      );
  }

  /**
   * `POST /communications/calls/{call-id}/contentSharingSessions`
   *
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/contentSharingSessions']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/contentSharingSessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/contentSharingSessions',
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
          res.data as Endpoints['POST /communications/calls/{call-id}/contentSharingSessions']['response']
      );
  }
}
