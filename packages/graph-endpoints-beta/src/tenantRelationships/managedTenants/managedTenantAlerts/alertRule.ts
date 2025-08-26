import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlert-id', in: 'path' },
    ],
    params,
  };
}
