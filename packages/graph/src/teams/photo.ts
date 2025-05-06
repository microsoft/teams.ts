import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './photo-types.ts';

/**
 * /teams/{team-id}/photo
 * Provides operations to manage the photo property of the microsoft.graph.team entity.
 */
export class PhotoClient {
  protected baseUrl = '/teams/{team-id}/photo';
  protected http: http.Client;

  constructor(
    protected readonly teamId: string,
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
   * `GET /teams/{team-id}/photo`
   *
   * Get the specified profilePhoto or its metadata (profilePhoto properties). The supported sizes of HD photos on Microsoft 365 are as follows: 48x48, 64x64, 96x96, 120x120, 240x240,
360x360, 432x432, 504x504, and 648x648. Photos can be any dimension if they&#x27;re stored in Microsoft Entra ID. You can get the metadata of the largest available photo or specify a size to get the metadata for that photo size.
If the size you request is unavailable, you can still get a smaller size that the user has uploaded and made available.
For example, if the user uploads a photo that is 504x504 pixels, all but the 648x648 size of the photo is available for download.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/photo']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/photo',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/photo']['response']);
  }

  /**
   * `PATCH /teams/{team-id}/photo`
   *
   * Update the photo for the specified contact, group, team, or user in a tenant. The size of the photo you can update to is limited to 4 MB. You can use either PATCH or PUT for this operation.
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/photo']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/photo']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teams/{team-id}/photo', [{ name: 'team-id', in: 'path' }], {
      ...(params || {}),
      'team-id': this.teamId,
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /teams/{team-id}/photo']['response']);
  }
}
