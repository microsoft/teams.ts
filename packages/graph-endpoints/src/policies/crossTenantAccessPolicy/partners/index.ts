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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'crossTenantAccessPolicyConfigurationPartner-tenantId', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'crossTenantAccessPolicyConfigurationPartner-tenantId', in: 'path' },
    ],
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
    paramDefs: [{ name: 'crossTenantAccessPolicyConfigurationPartner-tenantId', in: 'path' }],
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
  body: IEndpoints['POST /policies/crossTenantAccessPolicy/partners']['body'],
  params?: IEndpoints['POST /policies/crossTenantAccessPolicy/partners']['parameters']
): EndpointRequest<IEndpoints['POST /policies/crossTenantAccessPolicy/partners']['response']> {
  return {
    method: 'post',
    path: '/policies/crossTenantAccessPolicy/partners',
    paramDefs: [],
    params,
    body,
  };
}
