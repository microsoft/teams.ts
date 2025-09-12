import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/versions': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions',
    'get'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/items/{listItem-id}/versions': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions',
    'post'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'patch'
  >;
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
    'delete'
  >;
  'POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'listItem-id', 'listItemVersion-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/versions`
 *
 * The list of previous versions of the list item.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/versions',
    paramDefs: {
      path: ['drive-id', 'listItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 * The list of previous versions of the list item.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: {
      path: ['drive-id', 'listItem-id', 'listItemVersion-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: {
      path: ['drive-id', 'listItem-id', 'listItemVersion-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/items/{listItem-id}/versions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/items/{listItem-id}/versions',
    paramDefs: {
      path: ['drive-id', 'listItem-id'],
    },
    params,
    body,
  };
}

export const fields = {
  /**
   * `GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields`
   *
   * A collection of the fields and values for this version of the list item.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
      paramDefs: {
        path: ['drive-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
    };
  },
};

export const restoreVersion = {
  /**
   * `POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
      paramDefs: {
        path: ['drive-id', 'listItem-id', 'listItemVersion-id'],
      },
      params,
    };
  },
};
