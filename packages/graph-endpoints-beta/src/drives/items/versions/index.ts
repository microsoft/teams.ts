import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/versions': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/versions': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions',
    'post'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
    'get'
  >;
  'PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
    'put'
  >;
  'DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
    'delete'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id', 'driveItemVersion-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/versions`
 *
 * The list of previous versions of the item. For more info, see getting previous versions. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}`
 *
 * The list of previous versions of the item. For more info, see getting previous versions. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'driveItemVersion-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'driveItemVersion-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/versions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/versions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content`
   *
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'driveItemVersion-id'],
      },
      params,
    };
  },
  /**
   * `PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content`
   *
   */
  set: function set(
    body: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['body'],
    params?: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'driveItemVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id', 'driveItemVersion-id'],
      },
      params,
    };
  },
};

export const restoreVersion = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion`
   *
   * Restore a previous version of a driveItem to be the current version. This operation creates a new version with the contents of the previous version, and it preserves all existing versions of the file.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'driveItemVersion-id'],
      },
      params,
    };
  },
};
