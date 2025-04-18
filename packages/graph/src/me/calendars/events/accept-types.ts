// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   * Accept the specified event in a user calendar.
   */
  'POST /me/calendars/{calendar-id}/events/{event-id}/accept': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/accept',
    'post'
  >;
}
