import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm`
 *
 * The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}
