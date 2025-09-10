import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions',
    'post'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'patch'
  >;
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'delete'
  >;
  'POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedDriveItem-id', 'listItem-id', 'documentSetVersion-id'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions`
 *
 * Version information for a document set version created by a user.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 * Version information for a document set version created by a user.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id', 'documentSetVersion-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id', 'documentSetVersion-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id'],
    },
    params,
    body,
  };
}

export const fields = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
   *
   * A collection of the fields and values for this version of the list item.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['body'],
    params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
      paramDefs: {
        path: ['sharedDriveItem-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore`
   *
   * Restore a document set version.
   */
  create: function create(
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
      paramDefs: {
        path: ['sharedDriveItem-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
    };
  },
};
