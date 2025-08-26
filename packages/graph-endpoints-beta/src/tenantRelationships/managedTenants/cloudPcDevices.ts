import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcDevices': Operation<
    '/tenantRelationships/managedTenants/cloudPcDevices',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/cloudPcDevices': Operation<
    '/tenantRelationships/managedTenants/cloudPcDevices',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/cloudPcDevices`
 *
 * Get a list of the cloudPcDevice objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcDevices']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/cloudPcDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/cloudPcDevices',
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
 * `GET /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}`
 *
 * Read the properties and relationships of a cloudPcDevice object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
    paramDefs: [{ name: 'cloudPcDevice-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/cloudPcDevices`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/cloudPcDevices']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/cloudPcDevices']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/cloudPcDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/cloudPcDevices',
    paramDefs: [],
    params,
    body,
  };
}
