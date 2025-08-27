import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
  };
}
