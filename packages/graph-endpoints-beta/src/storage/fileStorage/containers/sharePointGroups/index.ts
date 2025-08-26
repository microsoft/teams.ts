export * as members from './members';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    'delete'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups',
    'get'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    'patch'
  >;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups`
 *
 * The collection of sharePointGroup objects local to the container. Read-write.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups',
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
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}`
 *
 * The collection of sharePointGroup objects local to the container. Read-write.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    paramDefs: [
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/sharePointGroups',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}
