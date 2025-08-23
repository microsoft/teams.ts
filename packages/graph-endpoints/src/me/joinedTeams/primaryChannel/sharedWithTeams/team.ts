import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
    'get'
  >;
}

/**
 * `GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team`
 *
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
  };
}
