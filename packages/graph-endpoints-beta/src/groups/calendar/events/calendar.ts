import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/calendar/events/{event-id}/calendar': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/calendar',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/calendar/events/{event-id}/calendar`
 *
 * The calendar that contains the event. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}/calendar']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}/calendar']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/calendar/events/{event-id}/calendar',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}
