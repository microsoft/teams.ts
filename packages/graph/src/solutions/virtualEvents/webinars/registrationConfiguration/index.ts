import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { QuestionsClient } from './questions';

/**
 * /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration
 * Provides operations to manage the registrationConfiguration property of the microsoft.graph.virtualEventWebinar entity.
 */
export class RegistrationConfigurationClient {
  protected baseUrl =
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration';
  protected http: http.Client;

  constructor(
    protected readonly virtualEventWebinarId: string,
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
   * `/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions`
   *
   * Provides operations to manage the questions property of the microsoft.graph.virtualEventRegistrationConfiguration entity.
   */
  get questions() {
    return new QuestionsClient(this.http);
  }

  /**
   * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEventWebinar-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration`
   *
   * Read the properties and relationships of a virtualEventWebinarRegistrationConfiguration object.
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration',
      [{ name: 'virtualEventWebinar-id', in: 'path' }],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['response']
      );
  }
}
