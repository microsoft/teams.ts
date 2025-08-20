export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/members': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/members',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/members': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/members',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/members`
 *
 * A collection of membership records associated with the channel.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/members']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/members',
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
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/members']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/members']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/members',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
