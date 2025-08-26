import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set',
    'get'
  >;
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set`
 *
 * The [set] in which the term is created.
 */
export function get(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
    ],
    params,
  };
}
