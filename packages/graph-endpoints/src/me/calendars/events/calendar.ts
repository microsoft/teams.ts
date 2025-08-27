import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/calendars/{calendar-id}/events/{event-id}/calendar': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/calendar',
    'get'
  >;
}

/**
 * `GET /me/calendars/{calendar-id}/events/{event-id}/calendar`
 *
 * The calendar that contains the event. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/calendar']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/calendar']['response']
> {
  return {
    method: 'get',
    path: '/me/calendars/{calendar-id}/events/{event-id}/calendar',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}
