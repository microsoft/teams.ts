import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs',
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
 * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlert-id', in: 'path' },
      { name: 'managedTenantAlertLog-id', in: 'path' },
    ],
    params,
  };
}
