import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /teams/{team-id}/operations': Operation<'/teams/{team-id}/operations', 'get'>;
  'GET /teams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'POST /teams/{team-id}/operations': Operation<'/teams/{team-id}/operations', 'post'>;
}

/**
 * `DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/operations`
 *
 * The async operations that ran or are running on this team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/operations']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/operations']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/operations',
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
 * `GET /teams/{team-id}/operations/{teamsAsyncOperation-id}`
 *
 * The async operations that ran or are running on this team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
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
 * `PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/operations']['body'],
  params?: IEndpoints['POST /teams/{team-id}/operations']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/operations']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/operations',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
