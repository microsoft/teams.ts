import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlertRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlertRule-id', in: 'path' },
      { name: 'managedTenantAlert-id', in: 'path' },
    ],
    params,
  };
}
