export * as identitySynchronization from './identitySynchronization';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}': Operation<
    '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    'delete'
  >;
  'GET /policies/crossTenantAccessPolicy/partners': Operation<
    '/policies/crossTenantAccessPolicy/partners',
    'get'
  >;
  'GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}': Operation<
    '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    'get'
  >;
  'PATCH /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}': Operation<
    '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    'patch'
  >;
  'POST /policies/crossTenantAccessPolicy/partners': Operation<
    '/policies/crossTenantAccessPolicy/partners',
    'post'
  >;
  'POST /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore': Operation<
    '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore',
    'post'
  >;
}

/**
 * `DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}`
 *
 * Delete a partner-specific configuration in a cross-tenant access policy. If a configuration includes a user synchronization policy, you must first delete the user synchronization policy before you can delete the partner-specific configuration.
 */
export function del(
  params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    paramDefs: {
      header: ['If-Match'],
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
    },
    params,
  };
}

/**
 * `GET /policies/crossTenantAccessPolicy/partners`
 *
 * Get a list of all partner configurations within a cross-tenant access policy. You can also use the $expand parameter to list the user synchronization policy for all partner configurations.
 */
export function list(
  params?: IEndpoints['GET /policies/crossTenantAccessPolicy/partners']['parameters']
): EndpointRequest<IEndpoints['GET /policies/crossTenantAccessPolicy/partners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/crossTenantAccessPolicy/partners',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}`
 *
 * Read the properties and relationships of a partner-specific configuration.
 */
export function get(
  params?: IEndpoints['GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    paramDefs: {
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}`
 *
 * Update the properties of a partner-specific configuration.
 */
export function update(
  body: IEndpoints['PATCH /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['body'],
  params?: IEndpoints['PATCH /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    paramDefs: {
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/crossTenantAccessPolicy/partners`
 *
 * Create a new partner configuration in a cross-tenant access policy.
 */
export function create(
  body: IEndpoints['POST /policies/crossTenantAccessPolicy/partners']['body']
): EndpointRequest<IEndpoints['POST /policies/crossTenantAccessPolicy/partners']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/crossTenantAccessPolicy/partners',
    body,
  };
}

export const restore = {
  /**
   * `POST /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore`
   *
   * Restore a deleted crossTenantAccessPolicyConfigurationPartner object.
   */
  create: function create(
    params?: IEndpoints['POST /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore',
      paramDefs: {
        path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
      },
      params,
    };
  },
};
