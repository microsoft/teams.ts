import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateStep-id', in: 'path' },
      { name: 'managementTemplateStepVersion-id', in: 'path' },
    ],
    params,
  };
}
