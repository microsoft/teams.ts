import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/calendars/{calendar-id}/events/{event-id}/accept': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/accept',
    'post'
  >;
}

/**
 * `POST /me/calendars/{calendar-id}/events/{event-id}/accept`
 *
 * Accept the specified event in a user calendar.
 */
export function create(
  body: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/accept']['body'],
  params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/accept']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/accept']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendars/{calendar-id}/events/{event-id}/accept',
    paramDefs: [
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
