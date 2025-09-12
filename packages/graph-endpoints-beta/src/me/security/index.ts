export * as informationProtection from './informationProtection';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/security': Operation<'/me/security', 'delete'>;
  'GET /me/security': Operation<'/me/security', 'get'>;
  'PATCH /me/security': Operation<'/me/security', 'patch'>;
}

/**
 * `DELETE /me/security`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/security']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/security']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/security',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/security`
 *
 */
export function get(
  params?: IEndpoints['GET /me/security']['parameters']
): EndpointRequest<IEndpoints['GET /me/security']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/security',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/security`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/security']['body']
): EndpointRequest<IEndpoints['PATCH /me/security']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/security',
    body,
  };
}
