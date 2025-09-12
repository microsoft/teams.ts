import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantApiNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantApiNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert',
    'get'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedTenantApiNotification-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantApiNotifications`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantApiNotifications',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    paramDefs: {
      path: ['managedTenantApiNotification-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}',
    paramDefs: {
      path: ['managedTenantApiNotification-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantApiNotifications`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantApiNotifications']['body']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantApiNotifications']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantApiNotifications',
    body,
  };
}

export const alert = {
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedTenantApiNotification-id'],
      },
      params,
    };
  },
};
