export * as members from './members';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/tags': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/tags': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/tags`
 *
 * The tags associated with the team.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags',
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
 * `GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}`
 *
 * The tags associated with the team.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/tags`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
