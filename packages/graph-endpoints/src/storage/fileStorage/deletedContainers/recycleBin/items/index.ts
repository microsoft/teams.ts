export * as createdByUser from './createdByUser';
export * as lastModifiedByUser from './lastModifiedByUser';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    'delete'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items',
    'get'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    'patch'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    method: 'delete',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['fileStorageContainer-id', 'recycleBinItem-id'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items`
 *
 * List of the recycleBinItems deleted by a user.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items',
    paramDefs: {
      path: ['fileStorageContainer-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}`
 *
 * List of the recycleBinItems deleted by a user.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'recycleBinItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    method: 'patch',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'recycleBinItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items']['response']
> {
  return {
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items',
    paramDefs: {
      path: ['fileStorageContainer-id'],
    },
    params,
    body,
  };
}
