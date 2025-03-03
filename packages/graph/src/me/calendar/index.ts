import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CalendarPermissionsClient } from './calendarPermissions';
import { CalendarViewClient } from './calendarView';
import { EventsClient } from './events';
import { GetScheduleClient } from './getSchedule';

interface Param {
  readonly in: string;
  readonly name: string;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      query[param.name] = data[param.name];
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /me/calendar
 * Provides operations to manage the calendar property of the microsoft.graph.user entity.
 */
export class CalendarClient {
  protected baseUrl = '/me/calendar';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `/me/calendar/calendarPermissions`
   *
   * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
   */
  get calendarPermissions() {
    return new CalendarPermissionsClient(this.http);
  }

  /**
   * `/me/calendar/calendarView`
   *
   * Provides operations to manage the calendarView property of the microsoft.graph.calendar entity.
   */
  get calendarView() {
    return new CalendarViewClient(this.http);
  }

  /**
   * `/me/calendar/events`
   *
   * Provides operations to manage the events property of the microsoft.graph.calendar entity.
   */
  get events() {
    return new EventsClient(this.http);
  }

  /**
   * `/me/calendar/getSchedule`
   *
   * Provides operations to call the getSchedule method.
   */
  get getSchedule() {
    return new GetScheduleClient(this.http);
  }

  /**
   * `GET /me/calendar`
   *
   * Get the properties and relationships of a calendar object. The calendar can be one for a user,
or the default calendar of a Microsoft 365 group. There are two scenarios where an app can get another user&#x27;s calendar:
   */
  async get(params?: Endpoints['GET /me/calendar']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/me/calendar',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /me/calendar']['response']);
  }

  /**
   * `PATCH /me/calendar`
   *
   * Update the properties of a calendar object. The calendar can be one for a user,
or the default calendar of a Microsoft 365 group.
   */
  async update(
    body: Endpoints['PATCH /me/calendar']['body'],
    params?: Endpoints['PATCH /me/calendar']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/calendar', [], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /me/calendar']['response']);
  }
}
