import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './content-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
  readonly explode?: boolean;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      const arrayFormat = param.explode == null || param.explode ? 'repeat' : 'comma'; // Assuming params are in form style
      query[param.name] = qs.stringify(data[param.name], { arrayFormat });
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content
 * Provides operations to manage the media for the user entity.
 */
export class ContentClient {
  protected baseUrl =
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content';
  protected http: http.Client;

  constructor(
    protected readonly callTranscriptId: string,
    options?: http.Client | http.ClientOptions
  ) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callTranscript-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'callTranscript-id': this.callTranscriptId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
      );
  }

  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * Retrieve a callTranscript object associated with a scheduled onlineMeeting. This API doesn&#x27;t support getting call transcripts from channel meetings. Retrieving the transcript returns the metadata of the single transcript associated with the online meeting. Retrieving the content of the transcript returns the stream of text associated with the transcript.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
      [
        { name: 'user-id', in: 'path' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callTranscript-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'callTranscript-id': this.callTranscriptId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
      );
  }

  /**
   * `PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  async set(
    body: Endpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['body'],
    params?: Endpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
      [
        { name: 'user-id', in: 'path' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callTranscript-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'callTranscript-id': this.callTranscriptId,
      }
    );

    return this.http
      .put(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
      );
  }
}
