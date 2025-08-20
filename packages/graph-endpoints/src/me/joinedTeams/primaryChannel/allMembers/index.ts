export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/allMembers': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/allMembers': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/primaryChannel/allMembers`
 *
 * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/allMembers']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers',
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
 * `GET /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/primaryChannel/allMembers`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
