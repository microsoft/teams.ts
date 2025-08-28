import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings',
    'post'
  >;
}

/**
 * `POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings`
 *
 * Reset the cross-tenant access policy template with user synchronization settings for a multitenant organization to the default values. In its reset state, the template has no impact on user synchronization settings, other than that unconfigured user synchronization settings are created if needed, for every multitenant organization tenant.
 */
export function create(
  body: IEndpoints['POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings']['body'],
  params?: IEndpoints['POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings',
    paramDefs: [],
    params,
    body,
  };
}
