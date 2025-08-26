export * as teamsApp from './teamsApp';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs',
    'post'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs`
 *
 * A collection of all the tabs in the channel.
 */
export function list(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 * A collection of all the tabs in the channel.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs']['body'],
  params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs',
    paramDefs: [
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
