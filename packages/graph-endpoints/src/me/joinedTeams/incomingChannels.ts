import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/joinedTeams/{team-id}/incomingChannels': Operation<
    '/me/joinedTeams/{team-id}/incomingChannels',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/incomingChannels/{channel-id}': Operation<
    '/me/joinedTeams/{team-id}/incomingChannels/{channel-id}',
    'get'
  >;
}

/**
 * `GET /me/joinedTeams/{team-id}/incomingChannels`
 *
 * List of channels shared with the team.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/incomingChannels']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/incomingChannels']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/incomingChannels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/incomingChannels/{channel-id}`
 *
 * List of channels shared with the team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/incomingChannels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/incomingChannels/{channel-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/incomingChannels/{channel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}
