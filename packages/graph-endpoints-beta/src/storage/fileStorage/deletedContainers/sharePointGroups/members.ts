import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
    'delete'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members',
    'get'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
    'patch'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointGroup-id', in: 'path' },
      { name: 'sharePointGroupMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members`
 *
 * The set of members in the sharePointGroup. Read-write.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members',
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
      { name: 'sharePointGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}`
 *
 * The set of members in the sharePointGroup. Read-write.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointGroup-id', in: 'path' },
      { name: 'sharePointGroupMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
    paramDefs: [
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointGroup-id', in: 'path' },
      { name: 'sharePointGroupMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members',
    paramDefs: [
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}
