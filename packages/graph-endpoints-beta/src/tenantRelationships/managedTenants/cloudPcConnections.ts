import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcConnections': Operation<
    '/tenantRelationships/managedTenants/cloudPcConnections',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/cloudPcConnections': Operation<
    '/tenantRelationships/managedTenants/cloudPcConnections',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/cloudPcConnections`
 *
 * Get a list of the cloudPcConnection objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcConnections']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/cloudPcConnections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/cloudPcConnections',
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
 * `GET /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}`
 *
 * Read the properties and relationships of a cloudPcConnection object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
    paramDefs: [{ name: 'cloudPcConnection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/cloudPcConnections`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/cloudPcConnections']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/cloudPcConnections']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/cloudPcConnections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/cloudPcConnections',
    paramDefs: [],
    params,
    body,
  };
}
