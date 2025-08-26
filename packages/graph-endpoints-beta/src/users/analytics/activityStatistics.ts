import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
    'delete'
  >;
  'GET /users/{user-id}/analytics/activityStatistics': Operation<
    '/users/{user-id}/analytics/activityStatistics',
    'get'
  >;
  'GET /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
    'get'
  >;
  'PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
    'patch'
  >;
  'POST /users/{user-id}/analytics/activityStatistics': Operation<
    '/users/{user-id}/analytics/activityStatistics',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'activityStatistics-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/analytics/activityStatistics`
 *
 * The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/analytics/activityStatistics']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/analytics/activityStatistics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/analytics/activityStatistics',
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
 * `GET /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}`
 *
 * The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'activityStatistics-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/analytics/activityStatistics/{activityStatistics-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'activityStatistics-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/analytics/activityStatistics`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/analytics/activityStatistics']['body'],
  params?: IEndpoints['POST /users/{user-id}/analytics/activityStatistics']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/analytics/activityStatistics']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/analytics/activityStatistics',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
