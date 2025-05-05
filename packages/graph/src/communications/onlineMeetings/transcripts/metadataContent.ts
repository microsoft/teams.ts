import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './metadataContent-types.ts';

/**
 * /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent
 * Provides operations to manage the media for the cloudCommunications entity.
 */
export class MetadataContentClient {
  protected baseUrl =
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent';
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
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  async delete(
    params?: Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
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
          res.data as Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
      );
  }

  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  async get(
    params?: Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
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
          res.data as Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
      );
  }

  /**
   * `PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  async set(
    body: Endpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['body'],
    params?: Endpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
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
          res.data as Endpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
      );
  }
}
