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
  'POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings',
    'post'
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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration`
 *
 * Update the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization.
 */
export function update(
  body: IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['body']
): EndpointRequest<
  IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration',
    body,
  };
}

export const resetToDefaultSettings = {
  /**
   * `POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings`
   *
   * Reset the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization to the default values. In its reset state, the template has no impact on partner configuration settings, other than that an unconfigured partner configuration is created if needed, for every multitenant organization tenant.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings',
    };
  },
};
