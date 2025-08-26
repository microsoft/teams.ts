import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics`
 *
 * Analytics about the view activities that took place on this item.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}
