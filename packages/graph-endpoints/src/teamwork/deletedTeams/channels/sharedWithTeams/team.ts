import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
    'get'
  >;
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team`
 *
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['response']
> {
  return {
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
  };
}
