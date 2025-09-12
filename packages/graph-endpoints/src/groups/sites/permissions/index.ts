import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/permissions/{permission-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/permissions': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/permissions/{permission-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/permissions/{permission-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/permissions': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/permissions/{permission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'permission-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/permissions`
 *
 * The permissions associated with the site. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/permissions']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/permissions']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/permissions',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/permissions/{permission-id}`
 *
 * The permissions associated with the site. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'permission-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/permissions/{permission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'permission-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/permissions`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/permissions',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const grant = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant`
   *
   * Grant users access to a link represented by a permission.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant',
      paramDefs: {
        path: ['group-id', 'site-id', 'permission-id'],
      },
      params,
      body,
    };
  },
};
