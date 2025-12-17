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
  'GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    'get'
  >;
  'PUT /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    'put'
  >;
  'DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization': Operation<
    '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    'delete'
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
    method: 'post',
    path: '/policies/crossTenantAccessPolicy/partners',
    body,
  };
}

export const identitySynchronization = {
  /**
   * `GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization`
   *
   * Get the user synchronization policy of a partner-specific configuration.
   */
  get: function get(
    params?: IEndpoints['GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['response']
  > {
    return {
      method: 'get',
      path: '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
      },
      params,
    };
  },
  /**
   * `PUT /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization`
   *
   * Create a cross-tenant user synchronization policy for a partner-specific configuration.
   */
  set: function set(
    body: IEndpoints['PUT /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['body'],
    params?: IEndpoints['PUT /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['response']
  > {
    return {
      method: 'put',
      path: '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
      paramDefs: {
        path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization`
   *
   * Delete the user synchronization policy for a partner-specific configuration.
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['response']
  > {
    return {
      method: 'delete',
      path: '/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
      paramDefs: {
        header: ['If-Match'],
        path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
      },
      params,
    };
  },
};
