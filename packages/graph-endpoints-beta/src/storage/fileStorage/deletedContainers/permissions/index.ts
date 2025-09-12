import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    'delete'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions',
    'get'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    'patch'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions',
    'post'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/grant': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/grant',
    'post'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/revokeGrants': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/revokeGrants',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['fileStorageContainer-id', 'permission-id'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions`
 *
 * The set of permissions for users in the fileStorageContainer. The permission for each user is set by the roles property. The possible values are reader, writer, manager, and owner. Read-write.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions',
    paramDefs: {
      path: ['fileStorageContainer-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}`
 *
 * The set of permissions for users in the fileStorageContainer. The permission for each user is set by the roles property. The possible values are reader, writer, manager, and owner. Read-write.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'permission-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'permission-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions',
    paramDefs: {
      path: ['fileStorageContainer-id'],
    },
    params,
    body,
  };
}

export const grant = {
  /**
   * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/grant`
   *
   * Grant users access to a link represented by a permission.
   */
  create: function create(
    body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/grant']['body'],
    params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/grant']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/grant']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/grant',
      paramDefs: {
        path: ['fileStorageContainer-id', 'permission-id'],
      },
      params,
      body,
    };
  },
};

export const revokeGrants = {
  /**
   * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/revokeGrants`
   *
   * Revoke access to a listItem or driveItem granted via a sharing link by removing the specified recipient from the link.
   */
  create: function create(
    body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/revokeGrants']['body'],
    params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/revokeGrants']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/revokeGrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permissions/{permission-id}/revokeGrants',
      paramDefs: {
        path: ['fileStorageContainer-id', 'permission-id'],
      },
      params,
      body,
    };
  },
};
