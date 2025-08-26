import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}': Operation<
    '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/deviceHealthStatuses': Operation<
    '/tenantRelationships/managedTenants/deviceHealthStatuses',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}': Operation<
    '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}': Operation<
    '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/deviceHealthStatuses': Operation<
    '/tenantRelationships/managedTenants/deviceHealthStatuses',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceHealthStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/deviceHealthStatuses`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceHealthStatuses']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/deviceHealthStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/deviceHealthStatuses',
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
 * `GET /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceHealthStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
    paramDefs: [{ name: 'deviceHealthStatus-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/deviceHealthStatuses`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/deviceHealthStatuses']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/deviceHealthStatuses']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/deviceHealthStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/deviceHealthStatuses',
    paramDefs: [],
    params,
    body,
  };
}
