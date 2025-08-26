export * as activityStatistics from './activityStatistics';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/analytics': Operation<'/me/analytics', 'delete'>;
  'GET /me/analytics': Operation<'/me/analytics', 'get'>;
  'PATCH /me/analytics': Operation<'/me/analytics', 'patch'>;
}

/**
 * `DELETE /me/analytics`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/analytics']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/analytics',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/analytics`
 *
 */
export function list(
  params?: IEndpoints['GET /me/analytics']['parameters']
): EndpointRequest<IEndpoints['GET /me/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/analytics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/analytics`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/analytics']['body'],
  params?: IEndpoints['PATCH /me/analytics']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/analytics',
    paramDefs: [],
    params,
    body,
  };
}
