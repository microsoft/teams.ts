import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
      { name: 'teamworkTagMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members`
 *
 * Users assigned to the tag.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
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
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
 *
 * Users assigned to the tag.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
      { name: 'teamworkTagMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
      { name: 'teamworkTagMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
    body,
  };
}
