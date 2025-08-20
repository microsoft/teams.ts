import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications',
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
 * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlert-id', in: 'path' },
      { name: 'managedTenantEmailNotification-id', in: 'path' },
    ],
    params,
  };
}
