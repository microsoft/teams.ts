export * as quota from './quota';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings/storage': Operation<
    '/users/{user-id}/settings/storage',
    'delete'
  >;
  'GET /users/{user-id}/settings/storage': Operation<'/users/{user-id}/settings/storage', 'get'>;
  'PATCH /users/{user-id}/settings/storage': Operation<
    '/users/{user-id}/settings/storage',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/settings/storage`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings/storage']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/settings/storage']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/settings/storage',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/storage`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/settings/storage']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/settings/storage']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/settings/storage',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings/storage`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings/storage']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings/storage']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/settings/storage']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/settings/storage',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
