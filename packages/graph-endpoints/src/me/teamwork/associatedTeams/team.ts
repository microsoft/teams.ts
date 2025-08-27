import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}/team': Operation<
    '/me/teamwork/associatedTeams/{associatedTeamInfo-id}/team',
    'get'
  >;
}

/**
 * `GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}/team`
 *
 */
export function get(
  params?: IEndpoints['GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}/team']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}/team']['response']
> {
  return {
    method: 'get',
    path: '/me/teamwork/associatedTeams/{associatedTeamInfo-id}/team',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'associatedTeamInfo-id', in: 'path' },
    ],
    params,
  };
}
