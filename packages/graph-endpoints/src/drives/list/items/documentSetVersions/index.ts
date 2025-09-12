import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions',
    'get'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions',
    'post'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'patch'
  >;
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'delete'
  >;
  'POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'listItem-id', 'documentSetVersion-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions`
 *
 * Version information for a document set version created by a user.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions',
    paramDefs: {
      path: ['drive-id', 'listItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 * Version information for a document set version created by a user.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: {
      path: ['drive-id', 'listItem-id', 'documentSetVersion-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: {
      path: ['drive-id', 'listItem-id', 'documentSetVersion-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions',
    paramDefs: {
      path: ['drive-id', 'listItem-id'],
    },
    params,
    body,
  };
}

export const fields = {
  /**
   * `GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
   *
   * A collection of the fields and values for this version of the list item.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
  > {
    return {
      method: 'patch',
      path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
      paramDefs: {
        path: ['drive-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
  > {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
   * `POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore`
   *
   * Restore a document set version.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
      paramDefs: {
        path: ['drive-id', 'listItem-id', 'documentSetVersion-id'],
      },
      params,
    };
  },
};
