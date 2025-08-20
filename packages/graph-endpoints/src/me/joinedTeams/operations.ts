import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/operations': Operation<
    '/me/joinedTeams/{team-id}/operations',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/operations': Operation<
    '/me/joinedTeams/{team-id}/operations',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/operations`
 *
 * The async operations that ran or are running on this team.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/operations']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/operations']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/operations',
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
 * `GET /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}`
 *
 * The async operations that ran or are running on this team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/operations']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/operations']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/operations']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/operations',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
