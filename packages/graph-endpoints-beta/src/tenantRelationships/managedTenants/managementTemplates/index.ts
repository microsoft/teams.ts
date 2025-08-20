export * as managementTemplateCollections from './managementTemplateCollections';
export * as managementTemplateSteps from './managementTemplateSteps';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplates': Operation<
    '/tenantRelationships/managedTenants/managementTemplates',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementTemplates': Operation<
    '/tenantRelationships/managedTenants/managementTemplates',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managementTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplates`
 *
 * Get a list of the managementTemplate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}`
 *
 * Read the properties and relationships of a managementTemplate object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    paramDefs: [{ name: 'managementTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplates']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplates']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementTemplates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementTemplates',
    paramDefs: [],
    params,
    body,
  };
}
