import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/calendar/calendarView': Operation<'/me/calendar/calendarView', 'get'>;
}

/**
  * `GET /me/calendar/calendarView`
  *
  * Get the occurrences, exceptions and single instances of events in a calendar view defined by a time range,
from a user&#x27;s default calendar (../me/calendarView) or some other calendar of the user&#x27;s.
  */
export function get(
  params?: IEndpoints['GET /me/calendar/calendarView']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendar/calendarView']['response']> {
  return {
    method: 'get',
    path: '/me/calendar/calendarView',
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
