import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/tenantsCustomizedInformation': Operation<
    '/tenantRelationships/managedTenants/tenantsCustomizedInformation',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/tenantsCustomizedInformation': Operation<
    '/tenantRelationships/managedTenants/tenantsCustomizedInformation',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'tenantCustomizedInformation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/tenantsCustomizedInformation`
 *
 * Get a list of the tenantCustomizedInformation objects and their properties.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantsCustomizedInformation']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/tenantsCustomizedInformation']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/tenantsCustomizedInformation',
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
 * `GET /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}`
 *
 * Read the properties and relationships of a tenantCustomizedInformation object.
 */
export function get$1(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tenantCustomizedInformation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}`
 *
 * Update the properties of a tenantCustomizedInformation object.
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
    paramDefs: [{ name: 'tenantCustomizedInformation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/tenantsCustomizedInformation`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/tenantsCustomizedInformation']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/tenantsCustomizedInformation']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/tenantsCustomizedInformation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/tenantsCustomizedInformation',
    paramDefs: [],
    params,
    body,
  };
}
