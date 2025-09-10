import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /sites/{site-id}/columns': Operation<'/sites/{site-id}/columns', 'get'>;
  'GET /sites/{site-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /sites/{site-id}/columns': Operation<'/sites/{site-id}/columns', 'post'>;
  'GET /sites/{site-id}/columns/{columnDefinition-id}/sourceColumn': Operation<
    '/sites/{site-id}/columns/{columnDefinition-id}/sourceColumn',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/columns/{columnDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'columnDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/columns`
 *
 * The collection of column definitions reusable across lists under this site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/columns']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/columns']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/columns',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/columns/{columnDefinition-id}`
 *
 * The collection of column definitions reusable across lists under this site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/columns/{columnDefinition-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['site-id', 'columnDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/columns/{columnDefinition-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/columns/{columnDefinition-id}',
    paramDefs: {
      path: ['site-id', 'columnDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/columns`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/columns']['body'],
  params?: IEndpoints['POST /sites/{site-id}/columns']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/columns']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/columns',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const sourceColumn = {
  /**
   * `GET /sites/{site-id}/columns/{columnDefinition-id}/sourceColumn`
   *
   * The source column for content type column.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/columns/{columnDefinition-id}/sourceColumn']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/columns/{columnDefinition-id}/sourceColumn']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/columns/{columnDefinition-id}/sourceColumn',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};
