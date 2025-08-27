export * as content from './content';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder`
 *
 * Metadata for the location where the channel&#x27;s files are stored.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/filesFolder',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}
