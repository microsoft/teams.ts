import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './segments-types.ts';

/**
 * /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments
 * Provides operations to manage the segments property of the microsoft.graph.callRecords.session entity.
 */
export class SegmentsClient {
  protected baseUrl = '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments';
  protected http: http.Client;

  constructor(
    protected readonly sessionId: string,
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
   * `DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'callRecord-id', in: 'path' },
        { name: 'session-id', in: 'path' },
        { name: 'segment-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'session-id': this.sessionId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['response']
      );
  }

  /**
   * `GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments`
   *
   * The list of segments involved in the session. Read-only. Nullable.
   */
  async list(
    params?: Endpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments',
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
        { name: 'session-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'session-id': this.sessionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['response']
      );
  }

  /**
   * `GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}`
   *
   * The list of segments involved in the session. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'callRecord-id', in: 'path' },
        { name: 'session-id', in: 'path' },
        { name: 'segment-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'session-id': this.sessionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['response']
      );
  }

  /**
   * `PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['body'],
    params?: Endpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
      [
        { name: 'callRecord-id', in: 'path' },
        { name: 'session-id', in: 'path' },
        { name: 'segment-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'session-id': this.sessionId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['response']
      );
  }

  /**
   * `POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments`
   *
   */
  async create(
    body: Endpoints['POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['body'],
    params?: Endpoints['POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments',
      [
        { name: 'callRecord-id', in: 'path' },
        { name: 'session-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'session-id': this.sessionId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['response']
      );
  }
}
