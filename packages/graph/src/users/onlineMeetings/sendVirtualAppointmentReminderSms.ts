import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './sendVirtualAppointmentReminderSms-types.ts';

/**
 * /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms
 * Provides operations to call the sendVirtualAppointmentReminderSms method.
 */
export class SendVirtualAppointmentReminderSmsClient {
  protected baseUrl =
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms';
  protected http: http.Client;

  constructor(
    protected readonly onlineMeetingId: string,
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
   * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms`
   *
   * Send an SMS reminder to external attendees for a Teams virtual appointment. This feature requires Teams premium and attendees must have a valid United States phone number to receive SMS notifications.
   */
  async create(
    body: Endpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['body'],
    params?: Endpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms',
      [
        { name: 'user-id', in: 'path' },
        { name: 'onlineMeeting-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onlineMeeting-id': this.onlineMeetingId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/sendVirtualAppointmentReminderSms']['response']
      );
  }
}
