import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/set': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/set',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/set`
 *
 * The [set] in which the term is created.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/set']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/set']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/set',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}
