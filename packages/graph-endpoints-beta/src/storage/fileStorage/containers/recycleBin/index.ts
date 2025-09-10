export * as createdByUser from './createdByUser';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin',
    'delete'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin',
    'get'
  >;
  'PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin',
    'patch'
  >;
}

/**
 * `DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin',
    paramDefs: {
      header: ['If-Match'],
      path: ['fileStorageContainer-id'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin`
 *
 * Recycle bin of the fileStorageContainer. Read-only.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin',
    paramDefs: {
      path: ['fileStorageContainer-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin',
    paramDefs: {
      path: ['fileStorageContainer-id'],
    },
    params,
    body,
  };
}
