import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AcceptClient } from './accept';
import { AttachmentsClient } from './attachments';
import { CalendarClient } from './calendar';
import { CancelClient } from './cancel';
import { DeclineClient } from './decline';
import { DismissReminderClient } from './dismissReminder';
import { ExtensionsClient } from './extensions';
import { ForwardClient } from './forward';
import { InstancesClient } from './instances';
import { SnoozeReminderClient } from './snoozeReminder';
import { TentativelyAcceptClient } from './tentativelyAccept';

/**
 * /me/calendars/{calendar-id}/events
 * Provides operations to manage the events property of the microsoft.graph.calendar entity.
 */
export class EventsClient {
  protected baseUrl = '/me/calendars/{calendar-id}/events';
  protected http: http.Client;

  constructor(
    protected readonly calendarId: string,
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
   * `/me/calendars/{calendar-id}/events/{event-id}/accept`
   *
   * Provides operations to call the accept method.
   */
  accept(eventId: string) {
    return new AcceptClient(eventId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/events/{event-id}/attachments`
   *
   * Provides operations to manage the attachments property of the microsoft.graph.event entity.
   */
  attachments(eventId: string) {
    return new AttachmentsClient(eventId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/events/{event-id}/calendar`
   *
   * Provides operations to manage the calendar property of the microsoft.graph.event entity.
   */
  calendar(eventId: string) {
    return new CalendarClient(eventId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/events/{event-id}/cancel`
   *
   * Provides operations to call the cancel method.
   */
  cancel(eventId: string) {
    return new CancelClient(eventId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/events/{event-id}/decline`
   *
   * Provides operations to call the decline method.
   */
  decline(eventId: string) {
    return new DeclineClient(eventId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/events/{event-id}/dismissReminder`
   *
   * Provides operations to call the dismissReminder method.
   */
  dismissReminder(eventId: string) {
    return new DismissReminderClient(eventId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/events/{event-id}/extensions`
   *
   * Provides operations to manage the extensions property of the microsoft.graph.event entity.
   */
  extensions(eventId: string) {
    return new ExtensionsClient(eventId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/events/{event-id}/forward`
   *
   * Provides operations to call the forward method.
   */
  forward(eventId: string) {
    return new ForwardClient(eventId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/events/{event-id}/instances`
   *
   * Provides operations to manage the instances property of the microsoft.graph.event entity.
   */
  instances(eventId: string) {
    return new InstancesClient(eventId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/events/{event-id}/snoozeReminder`
   *
   * Provides operations to call the snoozeReminder method.
   */
  snoozeReminder(eventId: string) {
    return new SnoozeReminderClient(eventId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/events/{event-id}/tentativelyAccept`
   *
   * Provides operations to call the tentativelyAccept method.
   */
  tentativelyAccept(eventId: string) {
    return new TentativelyAcceptClient(eventId, this.http);
  }

  /**
   * `DELETE /me/calendars/{calendar-id}/events/{event-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/calendars/{calendar-id}/events/{event-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/events/{event-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendar-id': this.calendarId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /me/calendars/{calendar-id}/events/{event-id}']['response']
      );
  }

  /**
   * `GET /me/calendars/{calendar-id}/events`
   *
   * The events in the calendar. Navigation property. Read-only.
   */
  async list(
    params?: Endpoints['GET /me/calendars/{calendar-id}/events']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/events',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendar-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendar-id': this.calendarId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /me/calendars/{calendar-id}/events']['response']);
  }

  /**
   * `GET /me/calendars/{calendar-id}/events/{event-id}`
   *
   * The events in the calendar. Navigation property. Read-only.
   */
  async get(
    params?: Endpoints['GET /me/calendars/{calendar-id}/events/{event-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/events/{event-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendar-id': this.calendarId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendars/{calendar-id}/events/{event-id}']['response']
      );
  }

  /**
   * `PATCH /me/calendars/{calendar-id}/events/{event-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/calendars/{calendar-id}/events/{event-id}']['body'],
    params?: Endpoints['PATCH /me/calendars/{calendar-id}/events/{event-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/events/{event-id}',
      [
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendar-id': this.calendarId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /me/calendars/{calendar-id}/events/{event-id}']['response']
      );
  }

  /**
   * `POST /me/calendars/{calendar-id}/events`
   *
   * Use this API to create a new event in a calendar. The calendar can be one for a user, or the default calendar of a Microsoft 365 group.
   */
  async create(
    body: Endpoints['POST /me/calendars/{calendar-id}/events']['body'],
    params?: Endpoints['POST /me/calendars/{calendar-id}/events']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/events',
      [{ name: 'calendar-id', in: 'path' }],
      {
        ...(params || {}),
        'calendar-id': this.calendarId,
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/calendars/{calendar-id}/events']['response']);
  }
}
