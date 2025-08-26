import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team': Operation<
    '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'associatedTeamInfo-id', in: 'path' },
    ],
    params,
  };
}
