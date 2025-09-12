import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantEmailNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantEmailNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert',
    'get'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedTenantEmailNotification-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantEmailNotifications`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    paramDefs: {
      path: ['managedTenantEmailNotification-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}',
    paramDefs: {
      path: ['managedTenantEmailNotification-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantEmailNotifications`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantEmailNotifications']['body']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantEmailNotifications']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications',
    body,
  };
}

export const alert = {
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedTenantEmailNotification-id'],
      },
      params,
    };
  },
};
