import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CalendarClient } from './calendar';
import { CalendarGroupsClient } from './calendarGroups';
import { CalendarViewClient } from './calendarView';
import { CalendarsClient } from './calendars';
import { ChatsClient } from './chats';
import { PhotoClient } from './photo';
import { PhotosClient } from './photos';
import { PresenceClient } from './presence';

/**
 * /me
 * Provides operations to manage the user singleton.
 */
export class MeClient {
  protected baseUrl = '/me';
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
   * `/me/calendar`
   *
   * Provides operations to manage the calendar property of the microsoft.graph.user entity.
   */
  get calendar() {
    return new CalendarClient(this.http);
  }

  /**
   * `/me/calendarGroups`
   *
   * Provides operations to manage the calendarGroups property of the microsoft.graph.user entity.
   */
  get calendarGroups() {
    return new CalendarGroupsClient(this.http);
  }

  /**
   * `/me/calendarView`
   *
   * Provides operations to manage the calendarView property of the microsoft.graph.user entity.
   */
  get calendarView() {
    return new CalendarViewClient(this.http);
  }

  /**
   * `/me/calendars`
   *
   * Provides operations to manage the calendars property of the microsoft.graph.user entity.
   */
  get calendars() {
    return new CalendarsClient(this.http);
  }

  /**
   * `/me/chats`
   *
   * Provides operations to manage the chats property of the microsoft.graph.user entity.
   */
  get chats() {
    return new ChatsClient(this.http);
  }

  /**
   * `/me/photo`
   *
   * Provides operations to manage the photo property of the microsoft.graph.user entity.
   */
  get photo() {
    return new PhotoClient(this.http);
  }

  /**
   * `/me/photos`
   *
   * Provides operations to manage the photos property of the microsoft.graph.user entity.
   */
  get photos() {
    return new PhotosClient(this.http);
  }

  /**
   * `/me/presence`
   *
   * Provides operations to manage the presence property of the microsoft.graph.user entity.
   */
  get presence() {
    return new PresenceClient(this.http);
  }

  /**
   * `GET /me`
   *
   * Retrieve the properties and relationships of user object. This operation returns by default only a subset of the more commonly used properties for each user. These default properties are noted in the Properties section. To get properties that are not returned by default, do a GET operation for the user and specify the properties in a $select OData query option. Because the user resource supports extensions, you can also use the GET operation to get custom properties and extension data in a user instance. Customers through Microsoft Entra ID for customers can also use this API operation to retrieve their details.
   */
  async get(params?: Endpoints['GET /me']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/me',
      [
        { name: 'ConsistencyLevel', in: 'header' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http.get(url, config).then((res) => res.data as Endpoints['GET /me']['response']);
  }

  /**
   * `PATCH /me`
   *
   * Update the properties of a user object.
   */
  async update(
    body: Endpoints['PATCH /me']['body'],
    params?: Endpoints['PATCH /me']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me', [], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /me']['response']);
  }
}
