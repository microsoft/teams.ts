import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CancelClient } from './cancel';
import { SessionsClient } from './sessions';

/**
 * /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations
 * Provides operations to manage the registrations property of the microsoft.graph.virtualEventWebinar entity.
 */
export class RegistrationsClient {
  protected baseUrl = '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations';
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
   * `/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}/cancel`
   *
   * Provides operations to call the cancel method.
   */
  cancel(virtualEventRegistrationId: string) {
    return new CancelClient(virtualEventRegistrationId, this.http);
  }

  /**
   * `/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}/sessions`
   *
   * Provides operations to manage the sessions property of the microsoft.graph.virtualEventRegistration entity.
   */
  sessions(virtualEventRegistrationId: string) {
    return new SessionsClient(virtualEventRegistrationId, this.http);
  }

  /**
   * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventRegistration-id', in: 'path' },
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
          res.data as Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations`
   *
   * Get a list of all registration records of a webinar.
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
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
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}`
   *
   * Get the properties and relationships of a virtualEventRegistration object.
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventRegistration-id', in: 'path' },
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
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}',
      [
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventRegistration-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations`
   *
   * Create a registration record for a registrant of a webinar. This method registers the person for the webinar.
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations',
      [{ name: 'virtualEventWebinar-id', in: 'path' }],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations']['response']
      );
  }
}
