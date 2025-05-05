import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { PresentersClient } from './presenters';
import { RegistrationConfigurationClient } from './registrationConfiguration';
import { RegistrationsClient } from './registrations';
import { SessionsClient } from './sessions';

/**
 * /solutions/virtualEvents/webinars
 * Provides operations to manage the webinars property of the microsoft.graph.virtualEventsRoot entity.
 */
export class WebinarsClient {
  protected baseUrl = '/solutions/virtualEvents/webinars';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
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
   * `/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters`
   *
   * Provides operations to manage the presenters property of the microsoft.graph.virtualEvent entity.
   */
  presenters(virtualEventWebinarId: string) {
    return new PresentersClient(virtualEventWebinarId, this.http);
  }

  /**
   * `/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration`
   *
   * Provides operations to manage the registrationConfiguration property of the microsoft.graph.virtualEventWebinar entity.
   */
  registrationConfiguration(virtualEventWebinarId: string) {
    return new RegistrationConfigurationClient(virtualEventWebinarId, this.http);
  }

  /**
   * `/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations`
   *
   * Provides operations to manage the registrations property of the microsoft.graph.virtualEventWebinar entity.
   */
  registrations(virtualEventWebinarId: string) {
    return new RegistrationsClient(virtualEventWebinarId, this.http);
  }

  /**
   * `/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions`
   *
   * Provides operations to manage the sessions property of the microsoft.graph.virtualEvent entity.
   */
  sessions(virtualEventWebinarId: string) {
    return new SessionsClient(virtualEventWebinarId, this.http);
  }

  /**
   * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEventWebinar-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars`
   *
   * Get the list of all virtualEventWebinar objects created in a tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/webinars']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /solutions/virtualEvents/webinars']['response']);
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}`
   *
   * Read the properties and relationships of a virtualEventWebinar object. All roles can get the details of a webinar event.
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}`
   *
   * Update the properties of a virtualEventWebinar object. Only the Organizer and Co-organizer can make changes to a webinar event.
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
      [{ name: 'virtualEventWebinar-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/webinars`
   *
   * Create a new virtualEventWebinar object in draft mode.
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/webinars']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/webinars']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/virtualEvents/webinars', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /solutions/virtualEvents/webinars']['response']);
  }
}
