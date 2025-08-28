import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/deviceAppPerformances': Operation<
    '/tenantRelationships/managedTenants/deviceAppPerformances',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/deviceAppPerformances': Operation<
    '/tenantRelationships/managedTenants/deviceAppPerformances',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceAppPerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/deviceAppPerformances`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceAppPerformances']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/deviceAppPerformances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/deviceAppPerformances',
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
 * `GET /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceAppPerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
    paramDefs: [{ name: 'deviceAppPerformance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/deviceAppPerformances`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/deviceAppPerformances']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/deviceAppPerformances']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/deviceAppPerformances']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/deviceAppPerformances',
    paramDefs: [],
    params,
    body,
  };
}
