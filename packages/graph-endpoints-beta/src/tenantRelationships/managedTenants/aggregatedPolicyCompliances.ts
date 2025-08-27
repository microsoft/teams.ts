import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances': Operation<
    '/tenantRelationships/managedTenants/aggregatedPolicyCompliances',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/aggregatedPolicyCompliances': Operation<
    '/tenantRelationships/managedTenants/aggregatedPolicyCompliances',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'aggregatedPolicyCompliance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances`
 *
 * Get a list of the aggregatedPolicyCompliance objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/aggregatedPolicyCompliances',
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
 * `GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}`
 *
 * Aggregate view of device compliance policies across managed tenants.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'aggregatedPolicyCompliance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
    paramDefs: [{ name: 'aggregatedPolicyCompliance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/aggregatedPolicyCompliances`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/aggregatedPolicyCompliances']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/aggregatedPolicyCompliances']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/aggregatedPolicyCompliances']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/aggregatedPolicyCompliances',
    paramDefs: [],
    params,
    body,
  };
}
