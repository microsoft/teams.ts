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
 * /me/calendar/calendarView
 * Provides operations to manage the calendarView property of the microsoft.graph.calendar entity.
 */
export class CalendarViewClient {
  protected baseUrl = '/me/calendar/calendarView';
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
   * `/me/calendar/calendarView/{event-id}/accept`
   *
   * Provides operations to call the accept method.
   */
  accept(eventId: string) {
    return new AcceptClient(eventId, this.http);
  }

  /**
   * `/me/calendar/calendarView/{event-id}/attachments`
   *
   * Provides operations to manage the attachments property of the microsoft.graph.event entity.
   */
  attachments(eventId: string) {
    return new AttachmentsClient(eventId, this.http);
  }

  /**
   * `/me/calendar/calendarView/{event-id}/calendar`
   *
   * Provides operations to manage the calendar property of the microsoft.graph.event entity.
   */
  calendar(eventId: string) {
    return new CalendarClient(eventId, this.http);
  }

  /**
   * `/me/calendar/calendarView/{event-id}/cancel`
   *
   * Provides operations to call the cancel method.
   */
  cancel(eventId: string) {
    return new CancelClient(eventId, this.http);
  }

  /**
   * `/me/calendar/calendarView/{event-id}/decline`
   *
   * Provides operations to call the decline method.
   */
  decline(eventId: string) {
    return new DeclineClient(eventId, this.http);
  }

  /**
   * `/me/calendar/calendarView/{event-id}/dismissReminder`
   *
   * Provides operations to call the dismissReminder method.
   */
  dismissReminder(eventId: string) {
    return new DismissReminderClient(eventId, this.http);
  }

  /**
   * `/me/calendar/calendarView/{event-id}/extensions`
   *
   * Provides operations to manage the extensions property of the microsoft.graph.event entity.
   */
  extensions(eventId: string) {
    return new ExtensionsClient(eventId, this.http);
  }

  /**
   * `/me/calendar/calendarView/{event-id}/forward`
   *
   * Provides operations to call the forward method.
   */
  forward(eventId: string) {
    return new ForwardClient(eventId, this.http);
  }

  /**
   * `/me/calendar/calendarView/{event-id}/instances`
   *
   * Provides operations to manage the instances property of the microsoft.graph.event entity.
   */
  instances(eventId: string) {
    return new InstancesClient(eventId, this.http);
  }

  /**
   * `/me/calendar/calendarView/{event-id}/snoozeReminder`
   *
   * Provides operations to call the snoozeReminder method.
   */
  snoozeReminder(eventId: string) {
    return new SnoozeReminderClient(eventId, this.http);
  }

  /**
   * `/me/calendar/calendarView/{event-id}/tentativelyAccept`
   *
   * Provides operations to call the tentativelyAccept method.
   */
  tentativelyAccept(eventId: string) {
    return new TentativelyAcceptClient(eventId, this.http);
  }

  /**
   * `GET /me/calendar/calendarView`
   *
   * Get the occurrences, exceptions and single instances of events in a calendar view defined by a time range,
from a user&#x27;s default calendar (../me/calendarView) or some other calendar of the user&#x27;s.
   */
  async get(
    params?: Endpoints['GET /me/calendar/calendarView']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/calendarView',
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
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /me/calendar/calendarView']['response']);
  }

  /**
   * `GET /me/calendar/calendarView/{event-id}`
   *
   * The calendar view for the calendar. Navigation property. Read-only.
   */
  async get$1(
    params?: Endpoints['GET /me/calendar/calendarView/{event-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/calendarView/{event-id}',
      [
        { name: 'startDateTime', in: 'query' },
        { name: 'endDateTime', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'event-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /me/calendar/calendarView/{event-id}']['response']);
  }
}
