import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    'delete'
  >;
  'GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    'get'
  >;
  'PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    'patch'
  >;
  'POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings': Operation<
    '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings',
    'post'
  >;
}

/**
 * `DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization`
 *
 * Get the cross-tenant access policy template with user synchronization settings for a multitenant organization.
 */
export function get(
  params?: IEndpoints['GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization`
 *
 * Update the cross-tenant access policy template with user synchronization settings for a multi-tenant organization.
 */
export function update(
  body: IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['body']
): EndpointRequest<
  IEndpoints['PATCH /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization',
    body,
  };
}

export const resetToDefaultSettings = {
  /**
   * `POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings`
   *
   * Reset the cross-tenant access policy template with user synchronization settings for a multitenant organization to the default values. In its reset state, the template has no impact on user synchronization settings, other than that unconfigured user synchronization settings are created if needed, for every multitenant organization tenant.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationIdentitySynchronization/resetToDefaultSettings',
    };
  },
};
