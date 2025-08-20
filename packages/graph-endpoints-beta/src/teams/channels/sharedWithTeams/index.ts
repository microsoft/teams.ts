export * as allowedMembers from './allowedMembers';
export * as team from './team';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams': Operation<
    '/teams/{team-id}/channels/{channel-id}/sharedWithTeams',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/sharedWithTeams': Operation<
    '/teams/{team-id}/channels/{channel-id}/sharedWithTeams',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 * Unshare a channel with a team by deleting the corresponding sharedWithChannelTeamInfo resource. This operation is allowed only for channels with a membershipType value of shared.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
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
 * `GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams`
 *
 * Get the list of teams that has been shared a specified channel. This operation is allowed only for channels with a membershipType value of shared.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/sharedWithTeams',
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
 * `GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 * Get a team that has been shared with a specified channel. This operation is allowed only for channels with a membershipType value of shared.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
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
 * `PATCH /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
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
 * `POST /teams/{team-id}/channels/{channel-id}/sharedWithTeams`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/sharedWithTeams']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/sharedWithTeams']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/sharedWithTeams',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
