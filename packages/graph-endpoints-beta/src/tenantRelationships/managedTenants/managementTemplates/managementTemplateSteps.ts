import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplate-id', in: 'path' },
      { name: 'managementTemplateStep-id', in: 'path' },
    ],
    params,
  };
}
