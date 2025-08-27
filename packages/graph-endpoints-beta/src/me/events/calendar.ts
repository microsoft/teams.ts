import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/events/{event-id}/calendar': Operation<'/me/events/{event-id}/calendar', 'get'>;
}

/**
 * `GET /me/events/{event-id}/calendar`
 *
 * The calendar that contains the event. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/events/{event-id}/calendar']['parameters']
): EndpointRequest<IEndpoints['GET /me/events/{event-id}/calendar']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/events/{event-id}/calendar',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}
