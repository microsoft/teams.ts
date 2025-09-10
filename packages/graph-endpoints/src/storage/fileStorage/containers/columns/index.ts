import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/columns',
    'get'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/columns': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/columns',
    'post'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}/sourceColumn': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}/sourceColumn',
    'get'
  >;
}

/**
 * `DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['fileStorageContainer-id', 'columnDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns`
 *
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/columns',
    paramDefs: {
      path: ['fileStorageContainer-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'columnDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'columnDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/columns`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/columns']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/columns']['response']
> {
  return {
    method: 'post',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/columns',
    paramDefs: {
      path: ['fileStorageContainer-id'],
    },
    params,
    body,
  };
}

export const sourceColumn = {
  /**
   * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}/sourceColumn`
   *
   * The source column for the content type column.
   */
  get: function get(
    params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}/sourceColumn']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}/sourceColumn']['response']
  > {
    return {
      method: 'get',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/columns/{columnDefinition-id}/sourceColumn',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fileStorageContainer-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};
