export * as resetToDefaultSettings from './resetToDefaultSettings';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
    'delete'
  >;
  'GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
    'get'
  >;
  'PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
    'patch'
  >;
}

/**
 * `DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration`
 *
 * Get the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization.
 */
export function get(
  params?: IEndpoints['GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration`
 *
 * Update the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization.
 */
export function update(
  body: IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['body'],
  params?: IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
    paramDefs: [],
    params,
    body,
  };
}
