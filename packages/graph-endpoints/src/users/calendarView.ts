import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/calendarView': Operation<'/users/{user-id}/calendarView', 'get'>;
}

/**
 * `GET /users/{user-id}/calendarView`
 *
 * The calendar view for the calendar. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendarView']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/calendarView']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/calendarView',
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
