import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/calendar/calendarView': Operation<
    '/users/{user-id}/calendar/calendarView',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/calendar/calendarView`
 *
 * The calendar view for the calendar. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendar/calendarView']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/calendar/calendarView']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendar/calendarView',
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
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
