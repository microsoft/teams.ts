import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertLogs/{managedTenantAlertLog-id}/alert',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlertLog-id', in: 'path' },
    ],
    params,
  };
}
