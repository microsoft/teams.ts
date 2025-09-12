import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns',
    'post'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn',
    'get'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedDriveItem-id', 'contentType-id', 'columnDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns`
 *
 * The collection of column definitions for this content type.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns',
    paramDefs: {
      path: ['sharedDriveItem-id', 'contentType-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 * The collection of column definitions for this content type.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'contentType-id', 'columnDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'contentType-id', 'columnDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns']['response']
> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns',
    paramDefs: {
      path: ['sharedDriveItem-id', 'contentType-id'],
    },
    params,
    body,
  };
}

export const sourceColumn = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn`
   *
   * The source column for the content type column.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'contentType-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};
