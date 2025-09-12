import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/permissions/{permission-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/permissions': Operation<
    '/shares/{sharedDriveItem-id}/list/permissions',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/permissions/{permission-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/permissions/{permission-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/permissions': Operation<
    '/shares/{sharedDriveItem-id}/list/permissions',
    'post'
  >;
  'POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant': Operation<
    '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant',
    'post'
  >;
  'POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/revokeGrants': Operation<
    '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}/revokeGrants',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/permissions/{permission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedDriveItem-id', 'permission-id'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/permissions`
 *
 * The set of permissions for the item. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/permissions']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/permissions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/permissions',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/permissions/{permission-id}`
 *
 * The set of permissions for the item. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'permission-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/permissions/{permission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/permissions/{permission-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'permission-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/permissions`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions']['parameters']
): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/permissions',
    paramDefs: {
      path: ['sharedDriveItem-id'],
    },
    params,
    body,
  };
}

export const grant = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant`
   *
   * Grant users access to a link represented by a permission.
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant',
      paramDefs: {
        path: ['sharedDriveItem-id', 'permission-id'],
      },
      params,
      body,
    };
  },
};

export const revokeGrants = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/revokeGrants`
   *
   * Revoke access to a listItem or driveItem granted via a sharing link by removing the specified recipient from the link.
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/revokeGrants']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/revokeGrants']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/revokeGrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}/revokeGrants',
      paramDefs: {
        path: ['sharedDriveItem-id', 'permission-id'],
      },
      params,
      body,
    };
  },
};
