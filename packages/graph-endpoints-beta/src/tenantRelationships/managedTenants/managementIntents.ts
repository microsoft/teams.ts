import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}': Operation<
    '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementIntents': Operation<
    '/tenantRelationships/managedTenants/managementIntents',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}': Operation<
    '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}': Operation<
    '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementIntents': Operation<
    '/tenantRelationships/managedTenants/managementIntents',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managementIntent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementIntents`
 *
 * Get a list of the managementIntent objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementIntents']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementIntents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementIntents',
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
 * `GET /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}`
 *
 * Read the properties and relationships of a managementIntent object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementIntent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
    paramDefs: [{ name: 'managementIntent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementIntents`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementIntents']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managementIntents']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementIntents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementIntents',
    paramDefs: [],
    params,
    body,
  };
}
