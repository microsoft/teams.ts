import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { SessionsClient } from './sessions';

/**
 * /communications/callRecords
 * Provides operations to manage the callRecords property of the microsoft.graph.cloudCommunications entity.
 */
export class CallRecordsClient {
  protected baseUrl = '/communications/callRecords';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
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
   * `/communications/callRecords/{callRecord-id}/sessions`
   *
   * Provides operations to manage the sessions property of the microsoft.graph.callRecords.callRecord entity.
   */
  sessions(callRecordId: string) {
    return new SessionsClient(callRecordId, this.http);
  }

  /**
   * `DELETE /communications/callRecords/{callRecord-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /communications/callRecords/{callRecord-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'callRecord-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /communications/callRecords/{callRecord-id}']['response']
      );
  }

  /**
   * `GET /communications/callRecords`
   *
   * Get the list of callRecord objects and their properties. The results can be optionally filtered using the $filter query parameter on the startDateTime and participant id properties. Note that the listed call records don&#x27;t include expandable relationships such as sessions and participants_v2. You can expand these relationships using Get callRecord for a specific record.
   */
  async list(
    params?: Endpoints['GET /communications/callRecords']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /communications/callRecords']['response']);
  }

  /**
   * `GET /communications/callRecords/{callRecord-id}`
   *
   * Retrieve the properties and relationships of a callRecord object. You can get the id of a callRecord in two ways:
   * Subscribe to change notifications to the /communications/callRecords endpoint.
   * Use the callChainId property of a call. The call record is available only after the associated call is completed.
   */
  async get(
    params?: Endpoints['GET /communications/callRecords/{callRecord-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'callRecord-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/callRecords/{callRecord-id}']['response']
      );
  }

  /**
   * `PATCH /communications/callRecords/{callRecord-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/callRecords/{callRecord-id}']['body'],
    params?: Endpoints['PATCH /communications/callRecords/{callRecord-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}',
      [{ name: 'callRecord-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /communications/callRecords/{callRecord-id}']['response']
      );
  }

  /**
   * `POST /communications/callRecords`
   *
   */
  async create(
    body: Endpoints['POST /communications/callRecords']['body'],
    params?: Endpoints['POST /communications/callRecords']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/communications/callRecords', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /communications/callRecords']['response']);
  }
}
