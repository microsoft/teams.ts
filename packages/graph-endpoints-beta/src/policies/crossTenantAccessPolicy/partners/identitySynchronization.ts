import type { EndpointRequest, Operation } from './../../../types/common.ts';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'crossTenantAccessPolicyConfigurationPartner-tenantId', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'crossTenantAccessPolicyConfigurationPartner-tenantId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization`
 *
 * Update the user synchronization policy of a partner-specific configuration.
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
    paramDefs: [{ name: 'crossTenantAccessPolicyConfigurationPartner-tenantId', in: 'path' }],
    params,
    body,
  };
}
