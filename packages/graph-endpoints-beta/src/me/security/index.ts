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
    paramDefs: [{ name: 'If-Match', in: 'header' }],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/security`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/security']['body'],
  params?: IEndpoints['PATCH /me/security']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/security']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/security',
    paramDefs: [],
    params,
    body,
  };
}
