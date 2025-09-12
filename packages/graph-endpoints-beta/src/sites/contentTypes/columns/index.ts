import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /sites/{site-id}/contentTypes/{contentType-id}/columns': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columns',
    'get'
  >;
  'GET /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /sites/{site-id}/contentTypes/{contentType-id}/columns': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columns',
    'post'
  >;
  'GET /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'contentType-id', 'columnDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/contentTypes/{contentType-id}/columns`
 *
 * The collection of column definitions for this content type.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columns']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columns',
    paramDefs: {
      path: ['site-id', 'contentType-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 * Retrieve the metadata for a site, list, or contentType column.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['site-id', 'contentType-id', 'columnDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['site-id', 'contentType-id', 'columnDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/contentTypes/{contentType-id}/columns`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/columns']['body'],
  params?: IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/columns']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columns',
    paramDefs: {
      path: ['site-id', 'contentType-id'],
    },
    params,
    body,
  };
}

export const sourceColumn = {
  /**
   * `GET /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn`
   *
   * The source column for content type column.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'contentType-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};
