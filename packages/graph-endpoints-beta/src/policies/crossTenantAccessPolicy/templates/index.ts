export * as multiTenantOrganizationIdentitySynchronization from './multiTenantOrganizationIdentitySynchronization';
export * as multiTenantOrganizationPartnerConfiguration from './multiTenantOrganizationPartnerConfiguration';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/crossTenantAccessPolicy/templates': Operation<
    '/policies/crossTenantAccessPolicy/templates',
    'delete'
  >;
  'GET /policies/crossTenantAccessPolicy/templates': Operation<
    '/policies/crossTenantAccessPolicy/templates',
    'get'
  >;
  'PATCH /policies/crossTenantAccessPolicy/templates': Operation<
    '/policies/crossTenantAccessPolicy/templates',
    'patch'
  >;
}

/**
 * `DELETE /policies/crossTenantAccessPolicy/templates`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/crossTenantAccessPolicy/templates',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/crossTenantAccessPolicy/templates`
 *
 * Represents the base policy in the directory for multi-tenant organization settings.
 */
export function list(
  params?: IEndpoints['GET /policies/crossTenantAccessPolicy/templates']['parameters']
): EndpointRequest<IEndpoints['GET /policies/crossTenantAccessPolicy/templates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/crossTenantAccessPolicy/templates',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/crossTenantAccessPolicy/templates`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates']['body'],
  params?: IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/crossTenantAccessPolicy/templates',
    paramDefs: [],
    params,
    body,
  };
}
