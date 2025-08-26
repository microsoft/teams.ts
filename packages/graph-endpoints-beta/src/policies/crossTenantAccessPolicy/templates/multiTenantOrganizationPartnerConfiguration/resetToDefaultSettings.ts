import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings',
    'post'
  >;
}

/**
 * `POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings`
 *
 * Reset the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization to the default values. In its reset state, the template has no impact on partner configuration settings, other than that an unconfigured partner configuration is created if needed, for every multitenant organization tenant.
 */
export function create(
  body: IEndpoints['POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings']['body'],
  params?: IEndpoints['POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration/resetToDefaultSettings',
    paramDefs: [],
    params,
    body,
  };
}
