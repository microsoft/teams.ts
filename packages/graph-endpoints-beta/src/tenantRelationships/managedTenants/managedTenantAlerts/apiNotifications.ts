import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlert-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlert-id', in: 'path' },
      { name: 'managedTenantApiNotification-id', in: 'path' },
    ],
    params,
  };
}
