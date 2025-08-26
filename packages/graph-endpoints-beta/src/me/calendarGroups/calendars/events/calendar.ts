import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/calendar': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/calendar',
    'get'
  >;
}

/**
 * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/calendar`
 *
 * The calendar that contains the event. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/calendar']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/calendar']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/calendar',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}
