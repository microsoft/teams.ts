import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/set': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/set',
    'get'
  >;
}

/**
 * `GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/set`
 *
 * The [set] in which the relation is relevant.
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/set']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/set']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/set',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}
