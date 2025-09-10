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
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete',
    'post'
  >;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/restore': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/restore',
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
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['fileStorageContainer-id', 'recycleBinItem-id'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items`
 *
 * List of the recycleBinItems deleted by a user.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items',
    paramDefs: {
      path: ['fileStorageContainer-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'recycleBinItem-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'recycleBinItem-id'],
    },
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
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items',
    paramDefs: {
      path: ['fileStorageContainer-id'],
    },
    params,
    body,
  };
}

export const doDelete = {
  /**
   * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete`
   *
   */
  create: function create(
    body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete']['body'],
    params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/delete',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
   * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/restore`
   *
   */
  create: function create(
    body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/restore']['body'],
    params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/restore',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
      body,
    };
  },
};
