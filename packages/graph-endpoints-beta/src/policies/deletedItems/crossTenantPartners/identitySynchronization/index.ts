import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization': Operation<
    '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    'delete'
  >;
  'GET /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization': Operation<
    '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    'get'
  >;
  'PUT /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization': Operation<
    '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    'put'
  >;
  'POST /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore': Operation<
    '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore',
    'post'
  >;
}

/**
 * `DELETE /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    paramDefs: {
      header: ['If-Match'],
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
    },
    params,
  };
}

/**
 * `GET /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization`
 *
 * Defines the cross-tenant policy for the synchronization of users from a partner tenant. Use this user synchronization policy to streamline collaboration between users in a multitenant organization by automating the creation, update, and deletion of users from one tenant to another.
 */
export function get(
  params?: IEndpoints['GET /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    paramDefs: {
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PUT /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization`
 *
 */
export function set(
  body: IEndpoints['PUT /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['body'],
  params?: IEndpoints['PUT /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['parameters']
): EndpointRequest<
  IEndpoints['PUT /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization',
    paramDefs: {
      path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
    },
    params,
    body,
  };
}

export const restore = {
  /**
   * `POST /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore`
   *
   * Restore a deleted crossTenantIdentitySyncPolicyPartner object.
   */
  create: function create(
    params?: IEndpoints['POST /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/deletedItems/crossTenantPartners/{crossTenantAccessPolicyConfigurationPartner-tenantId}/identitySynchronization/restore',
      paramDefs: {
        path: ['crossTenantAccessPolicyConfigurationPartner-tenantId'],
      },
      params,
    };
  },
};
