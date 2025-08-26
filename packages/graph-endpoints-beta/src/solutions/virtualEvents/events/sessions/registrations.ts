import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations',
    'get'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}',
    'get'
  >;
}

/**
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEvent-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEvent-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
      { name: 'virtualEventRegistration-id', in: 'path' },
    ],
    params,
  };
}
