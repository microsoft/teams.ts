export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers`
 *
 * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers',
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
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
