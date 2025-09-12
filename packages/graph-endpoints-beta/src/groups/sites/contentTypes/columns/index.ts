import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'contentType-id', 'columnDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns`
 *
 * The collection of column definitions for this content type.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns',
    paramDefs: {
      path: ['group-id', 'site-id', 'contentType-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 * The collection of column definitions for this content type.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'contentType-id', 'columnDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'contentType-id', 'columnDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns',
    paramDefs: {
      path: ['group-id', 'site-id', 'contentType-id'],
    },
    params,
    body,
  };
}

export const sourceColumn = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn`
   *
   * The source column for content type column.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'contentType-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};
