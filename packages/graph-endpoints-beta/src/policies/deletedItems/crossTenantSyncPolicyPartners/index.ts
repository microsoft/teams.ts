import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}': Operation<
    '/policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}',
    'delete'
  >;
  'GET /policies/deletedItems/crossTenantSyncPolicyPartners': Operation<
    '/policies/deletedItems/crossTenantSyncPolicyPartners',
    'get'
  >;
  'GET /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}': Operation<
    '/policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}',
    'get'
  >;
  'POST /policies/deletedItems/crossTenantSyncPolicyPartners': Operation<
    '/policies/deletedItems/crossTenantSyncPolicyPartners',
    'post'
  >;
  'PUT /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}': Operation<
    '/policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}',
    'put'
  >;
  'POST /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}/restore': Operation<
    '/policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}/restore',
    'post'
  >;
}

/**
  * `DELETE /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}`
  *
  * Permanently delete a policyDeletableItem object, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function del(
  params?: IEndpoints['DELETE /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}',
    paramDefs: {
      header: ['If-Match'],
      path: ['crossTenantIdentitySyncPolicyPartner-tenantId'],
    },
    params,
  };
}

/**
  * `GET /policies/deletedItems/crossTenantSyncPolicyPartners`
  *
  * Get a list of the policyDeletableItem objects and their properties, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function list(
  params?: IEndpoints['GET /policies/deletedItems/crossTenantSyncPolicyPartners']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/deletedItems/crossTenantSyncPolicyPartners']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/deletedItems/crossTenantSyncPolicyPartners',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}`
  *
  * Read the properties and relationships of a policyDeletableItem object, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function get(
  params?: IEndpoints['GET /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}',
    paramDefs: {
      path: ['crossTenantIdentitySyncPolicyPartner-tenantId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /policies/deletedItems/crossTenantSyncPolicyPartners`
 *
 */
export function create(
  body: IEndpoints['POST /policies/deletedItems/crossTenantSyncPolicyPartners']['body']
): EndpointRequest<
  IEndpoints['POST /policies/deletedItems/crossTenantSyncPolicyPartners']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/deletedItems/crossTenantSyncPolicyPartners',
    body,
  };
}

/**
 * `PUT /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}`
 *
 */
export function set(
  body: IEndpoints['PUT /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}']['body'],
  params?: IEndpoints['PUT /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['PUT /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}',
    paramDefs: {
      path: ['crossTenantIdentitySyncPolicyPartner-tenantId'],
    },
    params,
    body,
  };
}

export const restore = {
  /**
   * `POST /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}/restore`
   *
   * Restore a deleted crossTenantIdentitySyncPolicyPartner object.
   */
  create: function create(
    params?: IEndpoints['POST /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/deletedItems/crossTenantSyncPolicyPartners/{crossTenantIdentitySyncPolicyPartner-tenantId}/restore',
      paramDefs: {
        path: ['crossTenantIdentitySyncPolicyPartner-tenantId'],
      },
      params,
    };
  },
};
