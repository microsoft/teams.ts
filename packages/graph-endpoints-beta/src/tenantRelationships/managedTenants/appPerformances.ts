import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/appPerformances': Operation<
    '/tenantRelationships/managedTenants/appPerformances',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/appPerformances': Operation<
    '/tenantRelationships/managedTenants/appPerformances',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'appPerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/appPerformances`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/appPerformances']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/appPerformances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/appPerformances',
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
 * `GET /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appPerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
    paramDefs: [{ name: 'appPerformance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/appPerformances`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/appPerformances']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/appPerformances']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/appPerformances']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/appPerformances',
    paramDefs: [],
    params,
    body,
  };
}
