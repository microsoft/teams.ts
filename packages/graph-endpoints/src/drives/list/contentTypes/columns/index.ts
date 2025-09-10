import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns',
    'get'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columns': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns',
    'post'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn',
    'get'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'contentType-id', 'columnDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns`
 *
 * The collection of column definitions for this content type.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns',
    paramDefs: {
      path: ['drive-id', 'contentType-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 * The collection of column definitions for this content type.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['drive-id', 'contentType-id', 'columnDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['drive-id', 'contentType-id', 'columnDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columns`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columns']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columns']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns',
    paramDefs: {
      path: ['drive-id', 'contentType-id'],
    },
    params,
    body,
  };
}

export const sourceColumn = {
  /**
   * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn`
   *
   * The source column for the content type column.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'contentType-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};
