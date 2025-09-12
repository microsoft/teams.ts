import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/permission': Operation<
    '/shares/{sharedDriveItem-id}/permission',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/permission': Operation<
    '/shares/{sharedDriveItem-id}/permission',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/permission': Operation<
    '/shares/{sharedDriveItem-id}/permission',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/permission/grant': Operation<
    '/shares/{sharedDriveItem-id}/permission/grant',
    'post'
  >;
  'POST /shares/{sharedDriveItem-id}/permission/revokeGrants': Operation<
    '/shares/{sharedDriveItem-id}/permission/revokeGrants',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/permission`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/permission']['parameters']
): EndpointRequest<IEndpoints['DELETE /shares/{sharedDriveItem-id}/permission']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/permission',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedDriveItem-id'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/permission`
 *
 * Used to access the permission representing the underlying sharing link
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/permission']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/permission']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/permission',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/permission`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/permission']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/permission']['parameters']
): EndpointRequest<IEndpoints['PATCH /shares/{sharedDriveItem-id}/permission']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/permission',
    paramDefs: {
      path: ['sharedDriveItem-id'],
    },
    params,
    body,
  };
}

export const grant = {
  /**
   * `POST /shares/{sharedDriveItem-id}/permission/grant`
   *
   * Grant users access to a link represented by a permission.
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/permission/grant']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/permission/grant']['parameters']
  ): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/permission/grant']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/permission/grant',
      paramDefs: {
        path: ['sharedDriveItem-id'],
      },
      params,
      body,
    };
  },
};

export const revokeGrants = {
  /**
   * `POST /shares/{sharedDriveItem-id}/permission/revokeGrants`
   *
   * Revoke access to a listItem or driveItem granted via a sharing link by removing the specified recipient from the link.
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/permission/revokeGrants']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/permission/revokeGrants']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/permission/revokeGrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/permission/revokeGrants',
      paramDefs: {
        path: ['sharedDriveItem-id'],
      },
      params,
      body,
    };
  },
};
