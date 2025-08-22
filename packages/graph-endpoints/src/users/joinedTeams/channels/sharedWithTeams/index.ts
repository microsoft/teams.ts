export * as allowedMembers from './allowedMembers';
export * as team from './team';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams`
 *
 * A collection of teams with which a channel is shared.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 * A collection of teams with which a channel is shared.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/sharedWithTeams',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
