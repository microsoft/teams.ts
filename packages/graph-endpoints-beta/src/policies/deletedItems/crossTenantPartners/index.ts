export * as identitySynchronization from './identitySynchronization';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}': Operation<
    '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    'delete'
  >;
  'GET /policies/deletedItems/crossTenantPartners': Operation<
    '/policies/deletedItems/crossTenantPartners',
    'get'
  >;
  'GET /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}': Operation<
    '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    'get'
  >;
  'PATCH /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}': Operation<
    '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    'patch'
  >;
  'POST /policies/deletedItems/crossTenantPartners': Operation<
    '/policies/deletedItems/crossTenantPartners',
    'post'
  >;
  'POST /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore': Operation<
    '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore',
    'post'
  >;
}

/**
  * `DELETE /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}`
  *
  * Permanently delete a policyDeletableItem object, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function del(
  params?: IEndpoints['DELETE /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    paramDefs: {
      header: ['If-Match'],
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
    },
    params,
  };
}

/**
  * `GET /policies/deletedItems/crossTenantPartners`
  *
  * Get a list of the policyDeletableItem objects and their properties, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function list(
  params?: IEndpoints['GET /policies/deletedItems/crossTenantPartners']['parameters']
): EndpointRequest<IEndpoints['GET /policies/deletedItems/crossTenantPartners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/deletedItems/crossTenantPartners',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}`
  *
  * Read the properties and relationships of a policyDeletableItem object, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function get(
  params?: IEndpoints['GET /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    paramDefs: {
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['body'],
  params?: IEndpoints['PATCH /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}',
    paramDefs: {
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/deletedItems/crossTenantPartners`
 *
 */
export function create(
  body: IEndpoints['POST /policies/deletedItems/crossTenantPartners']['body']
): EndpointRequest<IEndpoints['POST /policies/deletedItems/crossTenantPartners']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/deletedItems/crossTenantPartners',
    body,
  };
}

export const restore = {
  /**
   * `POST /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore`
   *
   * Restore a deleted crossTenantAccessPolicyConfigurationPartner object.
   */
  create: function create(
    params?: IEndpoints['POST /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/restore',
      paramDefs: {
        path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
      },
      params,
    };
  },
};
