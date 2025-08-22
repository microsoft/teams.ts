import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm`
 *
 * The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}
