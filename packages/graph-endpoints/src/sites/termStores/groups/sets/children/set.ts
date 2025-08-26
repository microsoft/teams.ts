import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/set': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/set',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/set`
 *
 * The [set] in which the term is created.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/set']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/set']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/set',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}
