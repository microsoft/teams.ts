import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections',
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
 * `GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplate-id', in: 'path' },
      { name: 'managementTemplateCollection-id', in: 'path' },
    ],
    params,
  };
}
