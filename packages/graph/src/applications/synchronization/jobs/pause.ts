import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './pause-types.ts';

/**
 * /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause
 * Provides operations to call the pause method.
 */
export class PauseClient {
  protected baseUrl =
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause';
  protected http: http.Client;

  constructor(
    protected readonly synchronizationJobId: string,
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
   * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause`
   *
   * Temporarily stop a running synchronization job. All the progress, including job state, is persisted, and the job will continue from where it left off when a start call is made.
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause']['body'],
    params?: Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause',
      [
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'synchronizationJob-id': this.synchronizationJobId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause']['response']
      );
  }
}
