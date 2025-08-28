export * as managementTemplates from './managementTemplates';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateCollections': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementTemplateCollections': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managementTemplateCollection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateCollections`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections',
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
 * `GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateCollection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    paramDefs: [{ name: 'managementTemplateCollection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementTemplateCollections`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateCollections']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateCollections']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateCollections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections',
    paramDefs: [],
    params,
    body,
  };
}
