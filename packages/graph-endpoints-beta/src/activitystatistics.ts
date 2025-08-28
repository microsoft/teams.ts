import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /activitystatistics/{activityStatistics-id}': Operation<
    '/activitystatistics/{activityStatistics-id}',
    'delete'
  >;
  'GET /activitystatistics': Operation<'/activitystatistics', 'get'>;
  'GET /activitystatistics/{activityStatistics-id}': Operation<
    '/activitystatistics/{activityStatistics-id}',
    'get'
  >;
  'PATCH /activitystatistics/{activityStatistics-id}': Operation<
    '/activitystatistics/{activityStatistics-id}',
    'patch'
  >;
  'POST /activitystatistics': Operation<'/activitystatistics', 'post'>;
}

/**
 * `DELETE /activitystatistics/{activityStatistics-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /activitystatistics/{activityStatistics-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /activitystatistics/{activityStatistics-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/activitystatistics/{activityStatistics-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'activityStatistics-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /activitystatistics`
 *
 */
export function list(
  params?: IEndpoints['GET /activitystatistics']['parameters']
): EndpointRequest<IEndpoints['GET /activitystatistics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/activitystatistics',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /activitystatistics/{activityStatistics-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /activitystatistics/{activityStatistics-id}']['parameters']
): EndpointRequest<IEndpoints['GET /activitystatistics/{activityStatistics-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/activitystatistics/{activityStatistics-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'activityStatistics-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /activitystatistics/{activityStatistics-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /activitystatistics/{activityStatistics-id}']['body'],
  params?: IEndpoints['PATCH /activitystatistics/{activityStatistics-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /activitystatistics/{activityStatistics-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/activitystatistics/{activityStatistics-id}',
    paramDefs: [{ name: 'activityStatistics-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /activitystatistics`
 *
 */
export function create(
  body: IEndpoints['POST /activitystatistics']['body'],
  params?: IEndpoints['POST /activitystatistics']['parameters']
): EndpointRequest<IEndpoints['POST /activitystatistics']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/activitystatistics',
    paramDefs: [],
    params,
    body,
  };
}
