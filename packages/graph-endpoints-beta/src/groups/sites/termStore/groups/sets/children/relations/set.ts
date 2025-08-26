import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set`
 *
 * The [set] in which the relation is relevant.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}
