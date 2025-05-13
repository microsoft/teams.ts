import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ContentClient } from './content';
import { MetadataContentClient } from './metadataContent';

/**
 * /communications/onlineMeetings/{onlineMeeting-id}/transcripts
 * Provides operations to manage the transcripts property of the microsoft.graph.onlineMeeting entity.
 */
export class TranscriptsClient {
  protected baseUrl = '/communications/onlineMeetings/{onlineMeeting-id}/transcripts';
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
   * `/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * Provides operations to manage the media for the cloudCommunications entity.
   */
  content(callTranscriptId: string) {
    return new ContentClient(callTranscriptId, this.http);
  }

  /**
   * `/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * Provides operations to manage the media for the cloudCommunications entity.
   */
  metadataContent(callTranscriptId: string) {
    return new MetadataContentClient(callTranscriptId, this.http);
  }

  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callTranscript-id', in: 'path' },
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
          res.data as Endpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
      );
  }

  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts`
   *
   * The transcripts of an online meeting. Read-only.
   */
  async list(
    params?: Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/transcripts',
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
          res.data as Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
      );
  }

  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
   *
   * The transcripts of an online meeting. Read-only.
   */
  async get(
    params?: Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callTranscript-id', in: 'path' },
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
          res.data as Endpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
      );
  }

  /**
   * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['body'],
    params?: Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
      [
        { name: 'onlineMeeting-id', in: 'path' },
        { name: 'callTranscript-id', in: 'path' },
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
          res.data as Endpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
      );
  }

  /**
   * `POST /communications/onlineMeetings/{onlineMeeting-id}/transcripts`
   *
   */
  async create(
    body: Endpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/transcripts']['body'],
    params?: Endpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/onlineMeetings/{onlineMeeting-id}/transcripts',
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
          res.data as Endpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
      );
  }
}
