export * as grant from './grant';
export * as revokeGrants from './revokeGrants';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    'delete'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions',
    'get'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    'patch'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions`
 *
 * The set of permissions for users in the fileStorageContainer. The permission for each user is set by the roles property. The possible values are reader, writer, manager, and owner. Read-write.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}`
 *
 * The set of permissions for users in the fileStorageContainer. The permission for each user is set by the roles property. The possible values are reader, writer, manager, and owner. Read-write.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    paramDefs: [
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}
