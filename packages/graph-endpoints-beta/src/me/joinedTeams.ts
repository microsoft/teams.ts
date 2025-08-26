import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/joinedTeams': Operation<'/me/joinedTeams', 'get'>;
  'GET /me/joinedTeams/{team-id}': Operation<'/me/joinedTeams/{team-id}', 'get'>;
}

/**
 * `GET /me/joinedTeams`
 *
 * Get the teams in Microsoft Teams that the user is a direct member of.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/joinedTeams',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}`
 *
 * The Microsoft Teams teams the user is a member of. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/joinedTeams/{team-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}
