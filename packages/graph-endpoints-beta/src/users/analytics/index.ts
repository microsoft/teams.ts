export * as activityStatistics from './activityStatistics';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/analytics': Operation<'/users/{user-id}/analytics', 'delete'>;
  'GET /users/{user-id}/analytics': Operation<'/users/{user-id}/analytics', 'get'>;
  'PATCH /users/{user-id}/analytics': Operation<'/users/{user-id}/analytics', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/analytics`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/analytics',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/analytics`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/analytics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/analytics`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/analytics']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/analytics',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
