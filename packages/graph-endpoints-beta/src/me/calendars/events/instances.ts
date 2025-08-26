import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/calendars/{calendar-id}/events/{event-id}/instances': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/instances',
    'get'
  >;
}

/**
 * `GET /me/calendars/{calendar-id}/events/{event-id}/instances`
 *
 * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern and exceptions that have been modified. It doesn&#x27;t include occurrences that have been canceled from the series. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/instances']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/instances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendars/{calendar-id}/events/{event-id}/instances',
    paramDefs: [
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
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}
