import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set`
 *
 * The [set] in which the term is created.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
    ],
    params,
  };
}
