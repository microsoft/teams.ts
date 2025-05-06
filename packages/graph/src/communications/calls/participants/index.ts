import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { InviteClient } from './invite';
import { MuteClient } from './mute';
import { StartHoldMusicClient } from './startHoldMusic';
import { StopHoldMusicClient } from './stopHoldMusic';

/**
 * /communications/calls/{call-id}/participants
 * Provides operations to manage the participants property of the microsoft.graph.call entity.
 */
export class ParticipantsClient {
  protected baseUrl = '/communications/calls/{call-id}/participants';
  protected http: http.Client;

  constructor(
    protected readonly callId: string,
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
   * `/communications/calls/{call-id}/participants/invite`
   *
   * Provides operations to call the invite method.
   */
  get invite() {
    return new InviteClient(this.http);
  }

  /**
   * `/communications/calls/{call-id}/participants/{participant-id}/mute`
   *
   * Provides operations to call the mute method.
   */
  mute(participantId: string) {
    return new MuteClient(participantId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/participants/{participant-id}/startHoldMusic`
   *
   * Provides operations to call the startHoldMusic method.
   */
  startHoldMusic(participantId: string) {
    return new StartHoldMusicClient(participantId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic`
   *
   * Provides operations to call the stopHoldMusic method.
   */
  stopHoldMusic(participantId: string) {
    return new StopHoldMusicClient(participantId, this.http);
  }

  /**
   * `DELETE /communications/calls/{call-id}/participants/{participant-id}`
   *
   * Delete a specific participant in a call. In some situations, it is appropriate for an application to remove a participant from an active call. This action can be done before or after the participant answers the call. When an active caller is removed, they are immediately dropped from the call with no pre- or post-removal notification. When an invited participant is removed, any outstanding add participant request is canceled.
   */
  async delete(
    params?: Endpoints['DELETE /communications/calls/{call-id}/participants/{participant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/participants/{participant-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'call-id', in: 'path' },
        { name: 'participant-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /communications/calls/{call-id}/participants/{participant-id}']['response']
      );
  }

  /**
   * `GET /communications/calls/{call-id}/participants`
   *
   * Retrieve a list of participant objects in the call.
   */
  async list(
    params?: Endpoints['GET /communications/calls/{call-id}/participants']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/participants',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'call-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/calls/{call-id}/participants']['response']
      );
  }

  /**
   * `GET /communications/calls/{call-id}/participants/{participant-id}`
   *
   * Retrieve the properties and relationships of a participant object.
   */
  async get(
    params?: Endpoints['GET /communications/calls/{call-id}/participants/{participant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/participants/{participant-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'call-id', in: 'path' },
        { name: 'participant-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /communications/calls/{call-id}/participants/{participant-id}']['response']
      );
  }

  /**
   * `PATCH /communications/calls/{call-id}/participants/{participant-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/calls/{call-id}/participants/{participant-id}']['body'],
    params?: Endpoints['PATCH /communications/calls/{call-id}/participants/{participant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/participants/{participant-id}',
      [
        { name: 'call-id', in: 'path' },
        { name: 'participant-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /communications/calls/{call-id}/participants/{participant-id}']['response']
      );
  }

  /**
   * `POST /communications/calls/{call-id}/participants`
   *
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/participants']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/participants']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/participants',
      [{ name: 'call-id', in: 'path' }],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /communications/calls/{call-id}/participants']['response']
      );
  }
}
