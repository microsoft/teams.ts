import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { SegmentsClient } from './segments';

/**
 * /communications/callRecords/{callRecord-id}/sessions
 * Provides operations to manage the sessions property of the microsoft.graph.callRecords.callRecord entity.
 */
export class SessionsClient {
  protected baseUrl = '/communications/callRecords/{callRecord-id}/sessions';
  protected http: http.Client;

  constructor(
    protected readonly callRecordId: string,
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
   * `/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments`
   *
   * Provides operations to manage the segments property of the microsoft.graph.callRecords.session entity.
   */
  segments(sessionId: string) {
    return new SegmentsClient(sessionId, this.http);
  }

  /**
   * `DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}/sessions/{session-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'callRecord-id', in: 'path' },
        { name: 'session-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'callRecord-id': this.callRecordId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}']['response']
      );
  }

  /**
   * `GET /communications/callRecords/{callRecord-id}/sessions`
   *
   * Retrieve the list of sessions associated with a callRecord object. If the sessions list is truncated, a sessions@odata.nextLink value will be provided to retrieve the next page of sessions. The maximum page size for sessions is 60 entries.
   */
  async list(
    params?: Endpoints['GET /communications/callRecords/{callRecord-id}/sessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}/sessions',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'callRecord-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'callRecord-id': this.callRecordId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/callRecords/{callRecord-id}/sessions']['response']
      );
  }

  /**
   * `GET /communications/callRecords/{callRecord-id}/sessions/{session-id}`
   *
   * List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}/sessions/{session-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'callRecord-id', in: 'path' },
        { name: 'session-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'callRecord-id': this.callRecordId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}']['response']
      );
  }

  /**
   * `PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}']['body'],
    params?: Endpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}/sessions/{session-id}',
      [
        { name: 'callRecord-id', in: 'path' },
        { name: 'session-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'callRecord-id': this.callRecordId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}']['response']
      );
  }

  /**
   * `POST /communications/callRecords/{callRecord-id}/sessions`
   *
   */
  async create(
    body: Endpoints['POST /communications/callRecords/{callRecord-id}/sessions']['body'],
    params?: Endpoints['POST /communications/callRecords/{callRecord-id}/sessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}/sessions',
      [{ name: 'callRecord-id', in: 'path' }],
      {
        ...(params || {}),
        'callRecord-id': this.callRecordId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /communications/callRecords/{callRecord-id}/sessions']['response']
      );
  }
}
