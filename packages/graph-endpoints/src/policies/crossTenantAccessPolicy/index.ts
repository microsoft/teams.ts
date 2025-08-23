export * as defaults from './default';
export * as partners from './partners';
export * as templates from './templates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/crossTenantAccessPolicy': Operation<
    '/policies/crossTenantAccessPolicy',
    'delete'
  >;
  'GET /policies/crossTenantAccessPolicy': Operation<'/policies/crossTenantAccessPolicy', 'get'>;
  'PATCH /policies/crossTenantAccessPolicy': Operation<
    '/policies/crossTenantAccessPolicy',
    'patch'
  >;
}

/**
 * `DELETE /policies/crossTenantAccessPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/crossTenantAccessPolicy']['response']> {
  return {
    method: 'delete',
    path: '/policies/crossTenantAccessPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/crossTenantAccessPolicy`
 *
 * Read the properties and relationships of a crossTenantAccessPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/crossTenantAccessPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/crossTenantAccessPolicy']['response']> {
  return {
    method: 'get',
    path: '/policies/crossTenantAccessPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/crossTenantAccessPolicy`
 *
 * Update the properties of a cross-tenant access policy.
 */
export function update(
  body: IEndpoints['PATCH /policies/crossTenantAccessPolicy']['body'],
  params?: IEndpoints['PATCH /policies/crossTenantAccessPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/crossTenantAccessPolicy']['response']> {
  return {
    method: 'patch',
    path: '/policies/crossTenantAccessPolicy',
    paramDefs: [],
    params,
    body,
  };
}
