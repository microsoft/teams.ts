import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './content-types.ts';

/**
 * /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content
 * Provides operations to manage the media for the cloudCommunications entity.
 */
export class ContentClient {
  protected baseUrl =
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content';
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
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  async delete(
    params?: Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
      [
        { name: 'If-Match', in: 'header' },
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
          res.data as Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
      );
  }

  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  async get(
    params?: Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
      [
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
          res.data as Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
      );
  }

  /**
   * `PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  async set(
    body: Endpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['body'],
    params?: Endpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
      [
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
          res.data as Endpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
      );
  }
}
