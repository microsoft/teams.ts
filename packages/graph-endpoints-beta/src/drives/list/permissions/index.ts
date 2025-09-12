import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/permissions/{permission-id}': Operation<
    '/drives/{drive-id}/list/permissions/{permission-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/permissions': Operation<
    '/drives/{drive-id}/list/permissions',
    'get'
  >;
  'GET /drives/{drive-id}/list/permissions/{permission-id}': Operation<
    '/drives/{drive-id}/list/permissions/{permission-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/permissions/{permission-id}': Operation<
    '/drives/{drive-id}/list/permissions/{permission-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/permissions': Operation<
    '/drives/{drive-id}/list/permissions',
    'post'
  >;
  'POST /drives/{drive-id}/list/permissions/{permission-id}/grant': Operation<
    '/drives/{drive-id}/list/permissions/{permission-id}/grant',
    'post'
  >;
  'POST /drives/{drive-id}/list/permissions/{permission-id}/revokeGrants': Operation<
    '/drives/{drive-id}/list/permissions/{permission-id}/revokeGrants',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/permissions/{permission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/permissions/{permission-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'permission-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/permissions`
 *
 * The set of permissions for the item. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/permissions']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/permissions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/permissions',
    paramDefs: {
      path: ['drive-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/permissions/{permission-id}`
 *
 * The set of permissions for the item. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/permissions/{permission-id}',
    paramDefs: {
      path: ['drive-id', 'permission-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/permissions/{permission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/permissions/{permission-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/permissions/{permission-id}',
    paramDefs: {
      path: ['drive-id', 'permission-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/permissions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/permissions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/permissions']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/permissions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/permissions',
    paramDefs: {
      path: ['drive-id'],
    },
    params,
    body,
  };
}

export const grant = {
  /**
   * `POST /drives/{drive-id}/list/permissions/{permission-id}/grant`
   *
   * Grant users access to a link represented by a permission.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/grant']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/grant']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/grant']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/list/permissions/{permission-id}/grant',
      paramDefs: {
        path: ['drive-id', 'permission-id'],
      },
      params,
      body,
    };
  },
};

export const revokeGrants = {
  /**
   * `POST /drives/{drive-id}/list/permissions/{permission-id}/revokeGrants`
   *
   * Revoke access to a listItem or driveItem granted via a sharing link by removing the specified recipient from the link.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/revokeGrants']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/revokeGrants']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/revokeGrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/list/permissions/{permission-id}/revokeGrants',
      paramDefs: {
        path: ['drive-id', 'permission-id'],
      },
      params,
      body,
    };
  },
};
