export * as teamsApp from './teamsApp';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/tabs': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/tabs',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/tabs': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/tabs',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/tabs`
 *
 * A collection of all the tabs in the channel. A navigation property.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/tabs']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/tabs',
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
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 * A collection of all the tabs in the channel. A navigation property.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/tabs`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/tabs']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/tabs']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/tabs',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
