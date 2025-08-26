import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/calendarView': Operation<'/groups/{group-id}/calendarView', 'get'>;
}

/**
 * `GET /groups/{group-id}/calendarView`
 *
 * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range, from the default calendar of a group.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/calendarView']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/calendarView']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/calendarView',
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
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}
