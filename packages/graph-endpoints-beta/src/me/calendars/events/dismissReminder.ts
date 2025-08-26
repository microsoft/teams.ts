import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/calendars/{calendar-id}/events/{event-id}/dismissReminder': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/dismissReminder',
    'post'
  >;
}

/**
 * `POST /me/calendars/{calendar-id}/events/{event-id}/dismissReminder`
 *
 * Dismiss a reminder that has been triggered for an event in a user calendar.
 */
export function create(
  body: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/dismissReminder']['body'],
  params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/dismissReminder']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/dismissReminder']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendars/{calendar-id}/events/{event-id}/dismissReminder',
    paramDefs: [
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
