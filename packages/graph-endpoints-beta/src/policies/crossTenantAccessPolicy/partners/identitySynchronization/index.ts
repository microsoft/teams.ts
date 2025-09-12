import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    'delete'
  >;
  'GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    'get'
  >;
  'PUT /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    'put'
  >;
  'POST /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore': Operation<
    '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore',
    'post'
  >;
}

/**
 * `DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization`
 *
 * Delete the user synchronization policy for a partner-specific configuration.
 */
export function del(
  params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    paramDefs: {
      header: ['If-Match'],
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
    },
    params,
  };
}

/**
 * `GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization`
 *
 * Get the user synchronization policy of a partner-specific configuration.
 */
export function get(
  params?: IEndpoints['GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    paramDefs: {
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PUT /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization`
 *
 * Create a cross-tenant user synchronization policy for a partner-specific configuration.
 */
export function set(
  body: IEndpoints['PUT /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['body'],
  params?: IEndpoints['PUT /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['parameters']
): EndpointRequest<
  IEndpoints['PUT /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    paramDefs: {
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
    },
    params,
    body,
  };
}

export const restore = {
  /**
   * `POST /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore`
   *
   * Restore a deleted crossTenantIdentitySyncPolicyPartner object.
   */
  create: function create(
    params?: IEndpoints['POST /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore',
      paramDefs: {
        path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
      },
      params,
    };
  },
};
