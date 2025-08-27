import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends': Operation<
    '/tenantRelationships/managedTenants/managedDeviceComplianceTrends',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedDeviceComplianceTrends': Operation<
    '/tenantRelationships/managedTenants/managedDeviceComplianceTrends',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDeviceComplianceTrend-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends`
 *
 * Get a list of the managedDeviceComplianceTrend objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedDeviceComplianceTrends',
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
 * `GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}`
 *
 * Read the properties and relationships of a managedDeviceComplianceTrend object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceComplianceTrend-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
    paramDefs: [{ name: 'managedDeviceComplianceTrend-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedDeviceComplianceTrends`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedDeviceComplianceTrends']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managedDeviceComplianceTrends']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedDeviceComplianceTrends']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedDeviceComplianceTrends',
    paramDefs: [],
    params,
    body,
  };
}
