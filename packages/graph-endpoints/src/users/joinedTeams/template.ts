import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/joinedTeams/{team-id}/template': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/template',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/template`
 *
 * The template this team was created from. See available templates.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/template']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/template']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/template',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}
