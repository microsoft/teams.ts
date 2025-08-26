import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/templateDefinition': Operation<
    '/groups/{group-id}/team/templateDefinition',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/team/templateDefinition`
 *
 * Generic representation of a team template definition for a team with a specific structure and configuration.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/templateDefinition']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/templateDefinition']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/templateDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}
