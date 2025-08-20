import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/joinedTeams/{team-id}/photo': Operation<'/me/joinedTeams/{team-id}/photo', 'get'>;
  'PATCH /me/joinedTeams/{team-id}/photo': Operation<'/me/joinedTeams/{team-id}/photo', 'patch'>;
}

/**
 * `GET /me/joinedTeams/{team-id}/photo`
 *
 * The profile photo for the team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/photo']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/photo']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/photo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/photo`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/photo']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/photo']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/joinedTeams/{team-id}/photo']['response']> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/photo',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
