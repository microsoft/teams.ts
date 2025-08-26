export * as resetToSystemDefault from './resetToSystemDefault';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/crossTenantAccessPolicy/default': Operation<
    '/policies/crossTenantAccessPolicy/default',
    'delete'
  >;
  'GET /policies/crossTenantAccessPolicy/default': Operation<
    '/policies/crossTenantAccessPolicy/default',
    'get'
  >;
  'PATCH /policies/crossTenantAccessPolicy/default': Operation<
    '/policies/crossTenantAccessPolicy/default',
    'patch'
  >;
}

/**
 * `DELETE /policies/crossTenantAccessPolicy/default`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/default']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/crossTenantAccessPolicy/default']['response']> {
  return {
    method: 'delete',
    path: '/policies/crossTenantAccessPolicy/default',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/crossTenantAccessPolicy/default`
 *
 * Read the default configuration of a cross-tenant access policy. This default configuration may be the service default assigned by Microsoft Entra ID (isServiceDefault is true) or may be customized in your tenant (isServiceDefault is false).
 */
export function get(
  params?: IEndpoints['GET /policies/crossTenantAccessPolicy/default']['parameters']
): EndpointRequest<IEndpoints['GET /policies/crossTenantAccessPolicy/default']['response']> {
  return {
    method: 'get',
    path: '/policies/crossTenantAccessPolicy/default',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/crossTenantAccessPolicy/default`
 *
 * Update the default configuration of a cross-tenant access policy.
 */
export function update(
  body: IEndpoints['PATCH /policies/crossTenantAccessPolicy/default']['body'],
  params?: IEndpoints['PATCH /policies/crossTenantAccessPolicy/default']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/crossTenantAccessPolicy/default']['response']> {
  return {
    method: 'patch',
    path: '/policies/crossTenantAccessPolicy/default',
    paramDefs: [],
    params,
    body,
  };
}
