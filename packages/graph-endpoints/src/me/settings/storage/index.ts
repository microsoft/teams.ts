export * as quota from './quota';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings/storage': Operation<'/me/settings/storage', 'delete'>;
  'GET /me/settings/storage': Operation<'/me/settings/storage', 'get'>;
  'PATCH /me/settings/storage': Operation<'/me/settings/storage', 'patch'>;
}

/**
 * `DELETE /me/settings/storage`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings/storage']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings/storage']['response']> {
  return {
    method: 'delete',
    path: '/me/settings/storage',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/settings/storage`
 *
 */
export function get(
  params?: IEndpoints['GET /me/settings/storage']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/storage']['response']> {
  return {
    method: 'get',
    path: '/me/settings/storage',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/settings/storage`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/settings/storage']['body']
): EndpointRequest<IEndpoints['PATCH /me/settings/storage']['response']> {
  return {
    method: 'patch',
    path: '/me/settings/storage',
    body,
  };
}
