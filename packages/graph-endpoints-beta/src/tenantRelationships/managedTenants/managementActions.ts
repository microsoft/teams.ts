import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementActions/{managementAction-id}': Operation<
    '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementActions': Operation<
    '/tenantRelationships/managedTenants/managementActions',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementActions/{managementAction-id}': Operation<
    '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}': Operation<
    '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementActions': Operation<
    '/tenantRelationships/managedTenants/managementActions',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementActions/{managementAction-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managementAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementActions`
 *
 * Get a list of the managementAction objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementActions']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementActions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementActions',
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
 * `GET /tenantRelationships/managedTenants/managementActions/{managementAction-id}`
 *
 * Read the properties and relationships of a managementAction object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
    paramDefs: [{ name: 'managementAction-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementActions`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementActions']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managementActions']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementActions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementActions',
    paramDefs: [],
    params,
    body,
  };
}
