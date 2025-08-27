import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/activities': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/activities',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/activities/{itemActivityOLD-id}',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/activities`
 *
 * The list of recent activities that took place on this item.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/activities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/activities/{itemActivityOLD-id}`
 *
 * The list of recent activities that took place on this item.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}
