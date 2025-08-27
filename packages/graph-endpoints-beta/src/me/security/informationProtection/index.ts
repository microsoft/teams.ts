export * as labelPolicySettings from './labelPolicySettings';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/security/informationProtection': Operation<
    '/me/security/informationProtection',
    'delete'
  >;
  'GET /me/security/informationProtection': Operation<'/me/security/informationProtection', 'get'>;
  'PATCH /me/security/informationProtection': Operation<
    '/me/security/informationProtection',
    'patch'
  >;
}

/**
 * `DELETE /me/security/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/security/informationProtection',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/security/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /me/security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /me/security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/security/informationProtection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/security/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/security/informationProtection']['body'],
  params?: IEndpoints['PATCH /me/security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/security/informationProtection',
    paramDefs: [],
    params,
    body,
  };
}
