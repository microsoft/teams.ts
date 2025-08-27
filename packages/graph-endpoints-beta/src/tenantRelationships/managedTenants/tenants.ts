import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/tenants/{tenant-id}': Operation<
    '/tenantRelationships/managedTenants/tenants/{tenant-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/tenants': Operation<
    '/tenantRelationships/managedTenants/tenants',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/tenants/{tenant-id}': Operation<
    '/tenantRelationships/managedTenants/tenants/{tenant-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}': Operation<
    '/tenantRelationships/managedTenants/tenants/{tenant-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/tenants': Operation<
    '/tenantRelationships/managedTenants/tenants',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/tenants/{tenant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/tenants/{tenant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/tenants/{tenant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/tenants/{tenant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'tenant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/tenants`
 *
 * Get a list of the tenant objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/tenants']['parameters']
): EndpointRequest<IEndpoints['GET /tenantRelationships/managedTenants/tenants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/tenants',
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
 * `GET /tenantRelationships/managedTenants/tenants/{tenant-id}`
 *
 * Read the properties and relationships of a tenant object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/tenants/{tenant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/tenants/{tenant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/tenants/{tenant-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tenant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/tenants/{tenant-id}',
    paramDefs: [{ name: 'tenant-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/tenants`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/tenants']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/tenants']['parameters']
): EndpointRequest<IEndpoints['POST /tenantRelationships/managedTenants/tenants']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/tenants',
    paramDefs: [],
    params,
    body,
  };
}
