import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CancelClient } from './cancel';
import { PresentersClient } from './presenters';
import { PublishClient } from './publish';
import { SessionsClient } from './sessions';
import { SetExternalEventInformationClient } from './setExternalEventInformation';

/**
 * /solutions/virtualEvents/events
 * Provides operations to manage the events property of the microsoft.graph.virtualEventsRoot entity.
 */
export class EventsClient {
  protected baseUrl = '/solutions/virtualEvents/events';
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
   * `/solutions/virtualEvents/events/{virtualEvent-id}/cancel`
   *
   * Provides operations to call the cancel method.
   */
  cancel(virtualEventId: string) {
    return new CancelClient(virtualEventId, this.http);
  }

  /**
   * `/solutions/virtualEvents/events/{virtualEvent-id}/presenters`
   *
   * Provides operations to manage the presenters property of the microsoft.graph.virtualEvent entity.
   */
  presenters(virtualEventId: string) {
    return new PresentersClient(virtualEventId, this.http);
  }

  /**
   * `/solutions/virtualEvents/events/{virtualEvent-id}/publish`
   *
   * Provides operations to call the publish method.
   */
  publish(virtualEventId: string) {
    return new PublishClient(virtualEventId, this.http);
  }

  /**
   * `/solutions/virtualEvents/events/{virtualEvent-id}/sessions`
   *
   * Provides operations to manage the sessions property of the microsoft.graph.virtualEvent entity.
   */
  sessions(virtualEventId: string) {
    return new SessionsClient(virtualEventId, this.http);
  }

  /**
   * `/solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation`
   *
   * Provides operations to call the setExternalEventInformation method.
   */
  setExternalEventInformation(virtualEventId: string) {
    return new SetExternalEventInformationClient(virtualEventId, this.http);
  }

  /**
   * `DELETE /solutions/virtualEvents/events/{virtualEvent-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEvent-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/events`
   *
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/events']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events',
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
      .then((res) => res.data as Endpoints['GET /solutions/virtualEvents/events']['response']);
  }

  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}`
   *
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEvent-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/events/{virtualEvent-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}',
      [{ name: 'virtualEvent-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/events`
   *
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/events']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/events']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/virtualEvents/events', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /solutions/virtualEvents/events']['response']);
  }
}
