import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/templateDefinition': Operation<
    '/teams/{team-id}/templateDefinition',
    'get'
  >;
}

/**
 * `GET /teams/{team-id}/templateDefinition`
 *
 * Generic representation of a team template definition for a team with a specific structure and configuration.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/templateDefinition']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/templateDefinition']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/templateDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}
