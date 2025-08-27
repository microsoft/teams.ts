import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/items': Operation<
    '/groups/{group-id}/sites/{site-id}/items',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/items/{baseItem-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/items/{baseItem-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/items`
 *
 * Used to address any item contained in this site. This collection can&#x27;t be enumerated.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/items']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/items']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/items',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/items/{baseItem-id}`
 *
 * Used to address any item contained in this site. This collection can&#x27;t be enumerated.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/items/{baseItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/items/{baseItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/items/{baseItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'baseItem-id', in: 'path' },
    ],
    params,
  };
}
