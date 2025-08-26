import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}': Operation<
    '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/windowsProtectionStates': Operation<
    '/tenantRelationships/managedTenants/windowsProtectionStates',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}': Operation<
    '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}': Operation<
    '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/windowsProtectionStates': Operation<
    '/tenantRelationships/managedTenants/windowsProtectionStates',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsProtectionState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/windowsProtectionStates`
 *
 * Get a list of the windowsProtectionState objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/windowsProtectionStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/windowsProtectionStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/windowsProtectionStates',
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
 * `GET /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}`
 *
 * Read the properties and relationships of a windowsProtectionState object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsProtectionState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
    paramDefs: [{ name: 'windowsProtectionState-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/windowsProtectionStates`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/windowsProtectionStates']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/windowsProtectionStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/windowsProtectionStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/windowsProtectionStates',
    paramDefs: [],
    params,
    body,
  };
}
