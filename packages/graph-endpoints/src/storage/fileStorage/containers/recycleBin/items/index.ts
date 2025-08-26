export * as createdByUser from './createdByUser';
export * as lastModifiedByUser from './lastModifiedByUser';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    'delete'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items',
    'get'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    'patch'
  >;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    method: 'delete',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items`
 *
 * Get a collection of recycleBinItem resources in the recycleBin of the specified SharePoint Embedded fileStorageContainer.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items',
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
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}`
 *
 * List of the recycleBinItems deleted by a user.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    method: 'patch',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: [
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items']['response']
> {
  return {
    method: 'post',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}
