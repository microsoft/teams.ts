import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/tenantsDetailedInformation': Operation<
    '/tenantRelationships/managedTenants/tenantsDetailedInformation',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/tenantsDetailedInformation': Operation<
    '/tenantRelationships/managedTenants/tenantsDetailedInformation',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'tenantDetailedInformation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/tenantsDetailedInformation`
 *
 * Get a list of the tenantDetailedInformation objects and their properties.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantsDetailedInformation']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/tenantsDetailedInformation']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/tenantsDetailedInformation',
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
 * `GET /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}`
 *
 * Read the properties and relationships of a tenantDetailedInformation object.
 */
export function get$1(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tenantDetailedInformation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
    paramDefs: [{ name: 'tenantDetailedInformation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/tenantsDetailedInformation`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/tenantsDetailedInformation']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/tenantsDetailedInformation']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/tenantsDetailedInformation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/tenantsDetailedInformation',
    paramDefs: [],
    params,
    body,
  };
}
