import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './content-types.ts';

/**
 * /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content
 * Provides operations to manage the media for the user entity.
 */
export class ContentClient {
  protected baseUrl =
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content';
  protected http: http.Client;

  constructor(
    protected readonly callRecordingId: string,
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
   * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callRecording-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'callRecording-id': this.callRecordingId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
      );
  }

  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      [
        { name: 'user-id', in: 'path' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callRecording-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'callRecording-id': this.callRecordingId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
      );
  }

  /**
   * `PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  async set(
    body: Endpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['body'],
    params?: Endpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      [
        { name: 'user-id', in: 'path' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callRecording-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'callRecording-id': this.callRecordingId,
      }
    );

    return this.http
      .put(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
      );
  }
}
