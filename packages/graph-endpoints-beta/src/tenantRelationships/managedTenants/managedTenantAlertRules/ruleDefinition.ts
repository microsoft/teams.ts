import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedTenantAlertRule-id', in: 'path' },
    ],
    params,
  };
}
