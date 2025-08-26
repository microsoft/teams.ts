export * as team from './team';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}': Operation<
    '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    'delete'
  >;
  'GET /users/{user-id}/teamwork/associatedTeams': Operation<
    '/users/{user-id}/teamwork/associatedTeams',
    'get'
  >;
  'GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}': Operation<
    '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    'get'
  >;
  'PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}': Operation<
    '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    'patch'
  >;
  'POST /users/{user-id}/teamwork/associatedTeams': Operation<
    '/users/{user-id}/teamwork/associatedTeams',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'associatedTeamInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/teamwork/associatedTeams`
 *
 * The list of associatedTeamInfo objects that a user is associated with.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/teamwork/associatedTeams']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/teamwork/associatedTeams']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/teamwork/associatedTeams',
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
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}`
 *
 * The list of associatedTeamInfo objects that a user is associated with.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'associatedTeamInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'associatedTeamInfo-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/teamwork/associatedTeams`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/teamwork/associatedTeams']['body'],
  params?: IEndpoints['POST /users/{user-id}/teamwork/associatedTeams']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/teamwork/associatedTeams']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/teamwork/associatedTeams',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
