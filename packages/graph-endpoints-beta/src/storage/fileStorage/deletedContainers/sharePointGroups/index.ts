import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    'delete'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups',
    'get'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    'patch'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups',
    'post'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members',
    'get'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members',
    'post'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
    'patch'
  >;
  'DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
    'delete'
  >;
}

/**
 * `DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['fileStorageContainer-id', 'sharePointGroup-id'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups`
 *
 * The collection of sharePointGroup objects local to the container. Read-write.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups',
    paramDefs: {
      path: ['fileStorageContainer-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}`
 *
 * The collection of sharePointGroup objects local to the container. Read-write.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'sharePointGroup-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'sharePointGroup-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups',
    paramDefs: {
      path: ['fileStorageContainer-id'],
    },
    params,
    body,
  };
}

export const members = {
  /**
   * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members`
   *
   * The set of members in the sharePointGroup. Read-write.
   */
  list: function list(
    params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['fileStorageContainer-id', 'sharePointGroup-id'],
      },
      params,
    };
  },
  /**
   * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members`
   *
   */
  create: function create(
    body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members']['body'],
    params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members',
      paramDefs: {
        path: ['fileStorageContainer-id', 'sharePointGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}`
   *
   * The set of members in the sharePointGroup. Read-write.
   */
  get: function get(
    params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fileStorageContainer-id', 'sharePointGroup-id', 'sharePointGroupMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['body'],
    params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
      paramDefs: {
        path: ['fileStorageContainer-id', 'sharePointGroup-id', 'sharePointGroupMember-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/sharePointGroups/{sharePointGroup-id}/members/{sharePointGroupMember-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['fileStorageContainer-id', 'sharePointGroup-id', 'sharePointGroupMember-id'],
      },
      params,
    };
  },
};
