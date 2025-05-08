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
import { PermanentDeleteClient } from './permanentDelete';
import { SnoozeReminderClient } from './snoozeReminder';
import { TentativelyAcceptClient } from './tentativelyAccept';

/**
 * /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences
 * Provides operations to manage the exceptionOccurrences property of the microsoft.graph.event entity.
 */
export class ExceptionOccurrencesClient {
  protected baseUrl =
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences';
  protected http: http.Client;

  constructor(
    protected readonly eventId1: string,
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
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/accept`
   *
   * Provides operations to call the accept method.
   */
  accept(eventId2: string) {
    return new AcceptClient(eventId2, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments`
   *
   * Provides operations to manage the attachments property of the microsoft.graph.event entity.
   */
  attachments(eventId2: string) {
    return new AttachmentsClient(eventId2, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/calendar`
   *
   * Provides operations to manage the calendar property of the microsoft.graph.event entity.
   */
  calendar(eventId2: string) {
    return new CalendarClient(eventId2, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/cancel`
   *
   * Provides operations to call the cancel method.
   */
  cancel(eventId2: string) {
    return new CancelClient(eventId2, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/decline`
   *
   * Provides operations to call the decline method.
   */
  decline(eventId2: string) {
    return new DeclineClient(eventId2, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/dismissReminder`
   *
   * Provides operations to call the dismissReminder method.
   */
  dismissReminder(eventId2: string) {
    return new DismissReminderClient(eventId2, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions`
   *
   * Provides operations to manage the extensions property of the microsoft.graph.event entity.
   */
  extensions(eventId2: string) {
    return new ExtensionsClient(eventId2, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/forward`
   *
   * Provides operations to call the forward method.
   */
  forward(eventId2: string) {
    return new ForwardClient(eventId2, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/permanentDelete`
   *
   * Provides operations to call the permanentDelete method.
   */
  permanentDelete(eventId2: string) {
    return new PermanentDeleteClient(eventId2, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/snoozeReminder`
   *
   * Provides operations to call the snoozeReminder method.
   */
  snoozeReminder(eventId2: string) {
    return new SnoozeReminderClient(eventId2, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/tentativelyAccept`
   *
   * Provides operations to call the tentativelyAccept method.
   */
  tentativelyAccept(eventId2: string) {
    return new TentativelyAcceptClient(eventId2, this.http);
  }

  /**
   * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences`
   *
   */
  async list(
    params?: Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences']['response']
      );
  }

  /**
   * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}`
   *
   */
  async get(
    params?: Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
        { name: 'event-id2', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}']['response']
      );
  }
}
