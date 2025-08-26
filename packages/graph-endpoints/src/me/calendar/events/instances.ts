import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/calendar/events/{event-id}/instances': Operation<
    '/me/calendar/events/{event-id}/instances',
    'get'
  >;
}

/**
 * `GET /me/calendar/events/{event-id}/instances`
 *
 * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions modified, but doesn&#x27;t include occurrences canceled from the series. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/calendar/events/{event-id}/instances']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendar/events/{event-id}/instances']['response']> {
  return {
    method: 'get',
    path: '/me/calendar/events/{event-id}/instances',
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
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}
