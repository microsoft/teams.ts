export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as getAvailableExtensionProperties from './getAvailableExtensionProperties';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as restore from './restore';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /permissionGrants': Operation<'/permissionGrants', 'get'>;
  'GET /permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'POST /permissionGrants': Operation<'/permissionGrants', 'post'>;
}

/**
 * `DELETE /permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'delete',
    path: '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /permissionGrants`
 *
 */
export function list(
  params?: IEndpoints['GET /permissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /permissionGrants']['response']> {
  return {
    method: 'get',
    path: '/permissionGrants',
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
 * `GET /permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'get',
    path: '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
  params?: IEndpoints['PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'patch',
    path: '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [{ name: 'resourceSpecificPermissionGrant-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /permissionGrants`
 *
 */
export function create(
  body: IEndpoints['POST /permissionGrants']['body'],
  params?: IEndpoints['POST /permissionGrants']['parameters']
): EndpointRequest<IEndpoints['POST /permissionGrants']['response']> {
  return {
    method: 'post',
    path: '/permissionGrants',
    paramDefs: [],
    params,
    body,
  };
}
