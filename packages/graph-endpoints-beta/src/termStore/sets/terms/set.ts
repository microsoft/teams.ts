import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /termStore/sets/{set-id}/terms/{term-id}/set': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/set',
    'get'
  >;
}

/**
 * `GET /termStore/sets/{set-id}/terms/{term-id}/set`
 *
 * The [set] in which the term is created.
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/set']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/set']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/terms/{term-id}/set',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}
