import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/calendar/calendarView': Operation<
    '/groups/{group-id}/calendar/calendarView',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/calendar/calendarView`
 *
 * The calendar view for the calendar. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/calendar/calendarView']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/calendar/calendarView']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/calendar/calendarView',
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
