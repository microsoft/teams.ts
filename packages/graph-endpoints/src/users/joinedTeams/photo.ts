import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/joinedTeams/{team-id}/photo': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/photo',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/photo': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/photo',
    'patch'
  >;
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/photo`
 *
 * The profile photo for the team.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/photo']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/photo']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/photo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/photo`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/photo']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/photo']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/photo']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/photo',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
