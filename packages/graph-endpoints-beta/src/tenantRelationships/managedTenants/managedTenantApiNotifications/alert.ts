import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert': Operation<
    '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantApiNotifications/{managedTenantApiNotification-id}/alert',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantApiNotification-id', in: 'path' },
    ],
    params,
  };
}
