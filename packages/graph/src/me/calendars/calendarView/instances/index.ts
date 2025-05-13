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
import { SnoozeReminderClient } from './snoozeReminder';
import { TentativelyAcceptClient } from './tentativelyAccept';

/**
 * /me/calendars/{calendar-id}/calendarView/{event-id}/instances
 * Provides operations to manage the instances property of the microsoft.graph.event entity.
 */
export class InstancesClient {
  protected baseUrl = '/me/calendars/{calendar-id}/calendarView/{event-id}/instances';
  protected http: http.Client;

  constructor(
    protected readonly eventId: string,
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
   * `/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/accept`
   *
   * Provides operations to call the accept method.
   */
  accept(eventId1: string) {
    return new AcceptClient(eventId1, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/attachments`
   *
   * Provides operations to manage the attachments property of the microsoft.graph.event entity.
   */
  attachments(eventId1: string) {
    return new AttachmentsClient(eventId1, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/calendar`
   *
   * Provides operations to manage the calendar property of the microsoft.graph.event entity.
   */
  calendar(eventId1: string) {
    return new CalendarClient(eventId1, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/cancel`
   *
   * Provides operations to call the cancel method.
   */
  cancel(eventId1: string) {
    return new CancelClient(eventId1, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/decline`
   *
   * Provides operations to call the decline method.
   */
  decline(eventId1: string) {
    return new DeclineClient(eventId1, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/dismissReminder`
   *
   * Provides operations to call the dismissReminder method.
   */
  dismissReminder(eventId1: string) {
    return new DismissReminderClient(eventId1, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/extensions`
   *
   * Provides operations to manage the extensions property of the microsoft.graph.event entity.
   */
  extensions(eventId1: string) {
    return new ExtensionsClient(eventId1, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/forward`
   *
   * Provides operations to call the forward method.
   */
  forward(eventId1: string) {
    return new ForwardClient(eventId1, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/snoozeReminder`
   *
   * Provides operations to call the snoozeReminder method.
   */
  snoozeReminder(eventId1: string) {
    return new SnoozeReminderClient(eventId1, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/tentativelyAccept`
   *
   * Provides operations to call the tentativelyAccept method.
   */
  tentativelyAccept(eventId1: string) {
    return new TentativelyAcceptClient(eventId1, this.http);
  }

  /**
   * `GET /me/calendars/{calendar-id}/calendarView/{event-id}/instances`
   *
   * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
   */
  async list(
    params?: Endpoints['GET /me/calendars/{calendar-id}/calendarView/{event-id}/instances']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/calendarView/{event-id}/instances',
      [
        { name: 'startDateTime', in: 'query' },
        { name: 'endDateTime', in: 'query' },
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id': this.eventId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendars/{calendar-id}/calendarView/{event-id}/instances']['response']
      );
  }

  /**
   * `GET /me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}`
   *
   * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}',
      [
        { name: 'startDateTime', in: 'query' },
        { name: 'endDateTime', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id': this.eventId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}']['response']
      );
  }
}
