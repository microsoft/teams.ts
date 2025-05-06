import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ContentClient } from './content';

/**
 * /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings
 * Provides operations to manage the recordings property of the microsoft.graph.onlineMeeting entity.
 */
export class RecordingsClient {
  protected baseUrl = '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings';
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
   * `/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * Provides operations to manage the media for the user entity.
   */
  content(callRecordingId: string) {
    return new ContentClient(callRecordingId, this.http);
  }

  /**
   * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
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
          res.data as Endpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
      );
  }

  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings`
   *
   * Get a callRecording object associated with a scheduled onlineMeeting. This API doesn&#x27;t support getting call recordings from channel meetings. For a recording, this API returns the metadata of the single recording associated with the online meeting. For the content of a recording, this API returns the stream of bytes associated with the recording.
   */
  async list(
    params?: Endpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
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
          res.data as Endpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings']['response']
      );
  }

  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
   *
   * Get a callRecording object associated with a scheduled onlineMeeting. This API doesn&#x27;t support getting call recordings from channel meetings. For a recording, this API returns the metadata of the single recording associated with the online meeting. For the content of a recording, this API returns the stream of bytes associated with the recording.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
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
          res.data as Endpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
      );
  }

  /**
   * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['body'],
    params?: Endpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
      [
        { name: 'user-id', in: 'path' },
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
          res.data as Endpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
      );
  }

  /**
   * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings`
   *
   */
  async create(
    body: Endpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings']['body'],
    params?: Endpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings',
      [
        { name: 'user-id', in: 'path' },
        { name: 'onlineMeeting-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings']['response']
      );
  }
}
