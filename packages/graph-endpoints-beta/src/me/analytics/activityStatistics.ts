import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/me/analytics/activityStatistics/{activityStatistics-id}',
    'delete'
  >;
  'GET /me/analytics/activityStatistics': Operation<'/me/analytics/activityStatistics', 'get'>;
  'GET /me/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/me/analytics/activityStatistics/{activityStatistics-id}',
    'get'
  >;
  'PATCH /me/analytics/activityStatistics/{activityStatistics-id}': Operation<
    '/me/analytics/activityStatistics/{activityStatistics-id}',
    'patch'
  >;
  'POST /me/analytics/activityStatistics': Operation<'/me/analytics/activityStatistics', 'post'>;
}

/**
 * `DELETE /me/analytics/activityStatistics/{activityStatistics-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/analytics/activityStatistics/{activityStatistics-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/analytics/activityStatistics/{activityStatistics-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/analytics/activityStatistics/{activityStatistics-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'activityStatistics-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/analytics/activityStatistics`
 *
 * The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/analytics/activityStatistics']['parameters']
): EndpointRequest<IEndpoints['GET /me/analytics/activityStatistics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/analytics/activityStatistics',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/analytics/activityStatistics/{activityStatistics-id}`
 *
 * The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/analytics/activityStatistics/{activityStatistics-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/analytics/activityStatistics/{activityStatistics-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/analytics/activityStatistics/{activityStatistics-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'activityStatistics-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/analytics/activityStatistics/{activityStatistics-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/analytics/activityStatistics/{activityStatistics-id}']['body'],
  params?: IEndpoints['PATCH /me/analytics/activityStatistics/{activityStatistics-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/analytics/activityStatistics/{activityStatistics-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/analytics/activityStatistics/{activityStatistics-id}',
    paramDefs: [{ name: 'activityStatistics-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/analytics/activityStatistics`
 *
 */
export function create(
  body: IEndpoints['POST /me/analytics/activityStatistics']['body'],
  params?: IEndpoints['POST /me/analytics/activityStatistics']['parameters']
): EndpointRequest<IEndpoints['POST /me/analytics/activityStatistics']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/analytics/activityStatistics',
    paramDefs: [],
    params,
    body,
  };
}
