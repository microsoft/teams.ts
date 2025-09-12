import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/columns/{columnDefinition-id}': Operation<
    '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/columns': Operation<'/drives/{drive-id}/list/columns', 'get'>;
  'GET /drives/{drive-id}/list/columns/{columnDefinition-id}': Operation<
    '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}': Operation<
    '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/columns': Operation<'/drives/{drive-id}/list/columns', 'post'>;
  'GET /drives/{drive-id}/list/columns/{columnDefinition-id}/sourceColumn': Operation<
    '/drives/{drive-id}/list/columns/{columnDefinition-id}/sourceColumn',
    'get'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'columnDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/columns`
 *
 * The collection of field definitions for this list.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/columns']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/columns']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/columns',
    paramDefs: {
      path: ['drive-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/columns/{columnDefinition-id}`
 *
 * The collection of field definitions for this list.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['drive-id', 'columnDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['drive-id', 'columnDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/columns`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/columns']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/columns']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/columns']['response']> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/columns',
    paramDefs: {
      path: ['drive-id'],
    },
    params,
    body,
  };
}

export const sourceColumn = {
  /**
   * `GET /drives/{drive-id}/list/columns/{columnDefinition-id}/sourceColumn`
   *
   * The source column for the content type column.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/list/columns/{columnDefinition-id}/sourceColumn']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/columns/{columnDefinition-id}/sourceColumn']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/list/columns/{columnDefinition-id}/sourceColumn',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};
