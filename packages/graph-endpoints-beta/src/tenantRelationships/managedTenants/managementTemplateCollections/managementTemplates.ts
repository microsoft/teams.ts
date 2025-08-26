import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateCollection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateCollection-id', in: 'path' },
      { name: 'managementTemplate-id', in: 'path' },
    ],
    params,
  };
}
