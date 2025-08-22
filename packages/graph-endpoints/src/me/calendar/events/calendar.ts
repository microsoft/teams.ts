import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/calendar/events/{event-id}/calendar': Operation<
    '/me/calendar/events/{event-id}/calendar',
    'get'
  >;
}

/**
 * `GET /me/calendar/events/{event-id}/calendar`
 *
 * The calendar that contains the event. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/calendar/events/{event-id}/calendar']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendar/events/{event-id}/calendar']['response']> {
  return {
    method: 'get',
    path: '/me/calendar/events/{event-id}/calendar',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}
