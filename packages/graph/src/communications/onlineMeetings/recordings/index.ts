import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ContentClient } from './content';

/**
 * /communications/onlineMeetings/{onlineMeeting-id}/recordings
 * Provides operations to manage the recordings property of the microsoft.graph.onlineMeeting entity.
 */
export class RecordingsClient {
  protected baseUrl = '/communications/onlineMeetings/{onlineMeeting-id}/recordings';
  protected http: http.Client;

  constructor(
    protected readonly onlineMeetingId: string,
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
   * `/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * Provides operations to manage the media for the cloudCommunications entity.
   */
  content(callRecordingId: string) {
    return new ContentClient(callRecordingId, this.http);
  }

  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callRecording-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
      );
  }

  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/recordings`
   *
   * The recordings of an online meeting. Read-only.
   */
  async list(
    params?: Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/recordings',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'onlineMeeting-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings']['response']
      );
  }

  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
   *
   * The recordings of an online meeting. Read-only.
   */
  async get(
    params?: Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callRecording-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
      );
  }

  /**
   * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['body'],
    params?: Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
      [
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callRecording-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
      );
  }

  /**
   * `POST /communications/onlineMeetings/{onlineMeeting-id}/recordings`
   *
   */
  async create(
    body: Endpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/recordings']['body'],
    params?: Endpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/recordings']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/recordings',
      [{ name: 'onlineMeeting-id', in: 'path' }],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/recordings']['response']
      );
  }
}
