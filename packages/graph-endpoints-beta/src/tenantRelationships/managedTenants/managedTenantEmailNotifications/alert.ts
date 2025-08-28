import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert': Operation<
    '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantEmailNotifications/{managedTenantEmailNotification-id}/alert',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantEmailNotification-id', in: 'path' },
    ],
    params,
  };
}
