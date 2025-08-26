import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedDeviceCompliances': Operation<
    '/tenantRelationships/managedTenants/managedDeviceCompliances',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedDeviceCompliances': Operation<
    '/tenantRelationships/managedTenants/managedDeviceCompliances',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDeviceCompliance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedDeviceCompliances`
 *
 * Get a list of the managedDeviceCompliance objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceCompliances']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceCompliances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedDeviceCompliances',
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
 * `GET /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}`
 *
 * Read the properties and relationships of a managedDeviceCompliance object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceCompliance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
    paramDefs: [{ name: 'managedDeviceCompliance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedDeviceCompliances`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedDeviceCompliances']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/managedDeviceCompliances']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedDeviceCompliances']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedDeviceCompliances',
    paramDefs: [],
    params,
    body,
  };
}
