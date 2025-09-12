import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/permissions/{permission-id}': Operation<
    '/sites/{site-id}/permissions/{permission-id}',
    'delete'
  >;
  'GET /sites/{site-id}/permissions': Operation<'/sites/{site-id}/permissions', 'get'>;
  'GET /sites/{site-id}/permissions/{permission-id}': Operation<
    '/sites/{site-id}/permissions/{permission-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/permissions/{permission-id}': Operation<
    '/sites/{site-id}/permissions/{permission-id}',
    'patch'
  >;
  'POST /sites/{site-id}/permissions': Operation<'/sites/{site-id}/permissions', 'post'>;
  'POST /sites/{site-id}/permissions/{permission-id}/grant': Operation<
    '/sites/{site-id}/permissions/{permission-id}/grant',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/permissions/{permission-id}`
 *
 * Delete a permission object on a site.
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/permissions/{permission-id}']['response']> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/permissions/{permission-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'permission-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/permissions`
 *
 * Get the permission resources from the permissions navigation property on a site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/permissions']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/permissions']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/permissions',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/permissions/{permission-id}`
 *
 * Retrieve the properties and relationships of a permission object on a site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/permissions/{permission-id}']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/permissions/{permission-id}',
    paramDefs: {
      path: ['site-id', 'permission-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/permissions/{permission-id}`
 *
 * Update an application permission object on a site.
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/permissions/{permission-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/permissions/{permission-id}']['response']> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/permissions/{permission-id}',
    paramDefs: {
      path: ['site-id', 'permission-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/permissions`
 *
 * Create a new permission object on a site.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/permissions']['body'],
  params?: IEndpoints['POST /sites/{site-id}/permissions']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/permissions']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/permissions',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const grant = {
  /**
   * `POST /sites/{site-id}/permissions/{permission-id}/grant`
   *
   * Grant users access to a link represented by a permission.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/permissions/{permission-id}/grant']['body'],
    params?: IEndpoints['POST /sites/{site-id}/permissions/{permission-id}/grant']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/permissions/{permission-id}/grant']['response']
  > {
    return {
      method: 'post',
      path: '/sites/{site-id}/permissions/{permission-id}/grant',
      paramDefs: {
        path: ['site-id', 'permission-id'],
      },
      params,
      body,
    };
  },
};
