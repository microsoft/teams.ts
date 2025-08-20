import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/calendar/events/{event-id}/calendar': Operation<
    '/users/{user-id}/calendar/events/{event-id}/calendar',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/calendar/events/{event-id}/calendar`
 *
 * The calendar that contains the event. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendar/events/{event-id}/calendar']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/calendar/events/{event-id}/calendar']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendar/events/{event-id}/calendar',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}
