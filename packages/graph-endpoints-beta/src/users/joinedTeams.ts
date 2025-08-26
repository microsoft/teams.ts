import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/joinedTeams': Operation<'/users/{user-id}/joinedTeams', 'get'>;
  'GET /users/{user-id}/joinedTeams/{team-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/joinedTeams`
 *
 * The Microsoft Teams teams the user is a member of. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/joinedTeams',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}`
 *
 * The Microsoft Teams teams the user is a member of. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}
