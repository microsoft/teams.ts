export * as allowedMembers from './allowedMembers';
export * as team from './team';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams`
 *
 * A collection of teams with which a channel is shared.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams',
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
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 * A collection of teams with which a channel is shared.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
