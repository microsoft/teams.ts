export * as allowedMembers from './allowedMembers';
export * as team from './team';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/primaryChannel/sharedWithTeams': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams',
    'get'
  >;
  'GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/primaryChannel/sharedWithTeams': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/sharedWithTeams`
 *
 * A collection of teams with which a channel is shared.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 * A collection of teams with which a channel is shared.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/sharedWithTeams`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/sharedWithTeams']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/sharedWithTeams']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
