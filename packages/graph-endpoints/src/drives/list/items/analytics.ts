import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/items/{listItem-id}/analytics': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/analytics',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/analytics`
 *
 * Analytics about the view activities that took place on this item.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/analytics']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/analytics']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/analytics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}
