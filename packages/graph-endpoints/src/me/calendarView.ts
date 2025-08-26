import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/calendarView': Operation<'/me/calendarView', 'get'>;
}

/**
  * `GET /me/calendarView`
  *
  * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range, from the user&#x27;s default calendar,
or from some other calendar of the user.
  */
export function get(
  params?: IEndpoints['GET /me/calendarView']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendarView']['response']> {
  return {
    method: 'get',
    path: '/me/calendarView',
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
    ],
    params,
  };
}
