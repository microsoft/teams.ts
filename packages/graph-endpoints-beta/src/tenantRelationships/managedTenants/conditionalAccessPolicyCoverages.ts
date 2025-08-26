import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}': Operation<
    '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages': Operation<
    '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}': Operation<
    '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}': Operation<
    '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages': Operation<
    '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'conditionalAccessPolicyCoverage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages`
 *
 * Get a list of the conditionalAccessPolicyCoverage objects and their properties. Use this operation to list Microsoft Entra Conditional Access policy coverage for all tenants that are being managed by the multi-tenant management platform.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages',
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
 * `GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}`
 *
 * Read the properties and relationships of a conditionalAccessPolicyCoverage object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'conditionalAccessPolicyCoverage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
    paramDefs: [{ name: 'conditionalAccessPolicyCoverage-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages',
    paramDefs: [],
    params,
    body,
  };
}
