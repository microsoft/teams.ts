import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './mute-types.ts';

/**
 * /communications/calls/{call-id}/participants/{participant-id}/mute
 * Provides operations to call the mute method.
 */
export class MuteClient {
  protected baseUrl = '/communications/calls/{call-id}/participants/{participant-id}/mute';
  protected http: http.Client;

  constructor(
    protected readonly participantId: string,
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
   * `POST /communications/calls/{call-id}/participants/{participant-id}/mute`
   *
   * Mute a specific participant in the call. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more information about how to handle mute operations, see muteParticipantOperation.
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/participants/{participant-id}/mute']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/participants/{participant-id}/mute']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/participants/{participant-id}/mute',
      [
        { name: 'call-id', in: 'path' },
        { name: 'participant-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'participant-id': this.participantId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /communications/calls/{call-id}/participants/{participant-id}/mute']['response']
      );
  }
}
