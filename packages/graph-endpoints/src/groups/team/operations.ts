import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/operations/{teamsAsyncOperation-id}': Operation<
    '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/operations': Operation<'/groups/{group-id}/team/operations', 'get'>;
  'GET /groups/{group-id}/team/operations/{teamsAsyncOperation-id}': Operation<
    '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}': Operation<
    '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/operations': Operation<
    '/groups/{group-id}/team/operations',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/operations/{teamsAsyncOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/operations`
 *
 * The async operations that ran or are running on this team.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/operations']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/operations']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/operations',
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
 * `GET /groups/{group-id}/team/operations/{teamsAsyncOperation-id}`
 *
 * The async operations that ran or are running on this team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/operations`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/operations']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/operations']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/operations']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/operations',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
