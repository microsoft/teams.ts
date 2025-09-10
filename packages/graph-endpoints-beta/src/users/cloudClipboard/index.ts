import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/cloudClipboard': Operation<'/users/{user-id}/cloudClipboard', 'delete'>;
  'GET /users/{user-id}/cloudClipboard': Operation<'/users/{user-id}/cloudClipboard', 'get'>;
  'PATCH /users/{user-id}/cloudClipboard': Operation<'/users/{user-id}/cloudClipboard', 'patch'>;
  'GET /users/{user-id}/cloudClipboard/items': Operation<
    '/users/{user-id}/cloudClipboard/items',
    'get'
  >;
  'POST /users/{user-id}/cloudClipboard/items': Operation<
    '/users/{user-id}/cloudClipboard/items',
    'post'
  >;
  'GET /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
    'get'
  >;
  'PATCH /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/cloudClipboard`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/cloudClipboard']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/cloudClipboard']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/cloudClipboard',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/cloudClipboard`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/cloudClipboard']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/cloudClipboard']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/cloudClipboard',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/cloudClipboard`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/cloudClipboard']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/cloudClipboard']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/cloudClipboard']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/cloudClipboard',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const items = {
  /**
   * `GET /users/{user-id}/cloudClipboard/items`
   *
   * Represents a collection of Cloud Clipboard items.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/cloudClipboard/items']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/cloudClipboard/items']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/cloudClipboard/items',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/cloudClipboard/items`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/cloudClipboard/items']['body'],
    params?: IEndpoints['POST /users/{user-id}/cloudClipboard/items']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudClipboard/items']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudClipboard/items',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}`
   *
   * Represents a collection of Cloud Clipboard items.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'cloudClipboardItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
      paramDefs: {
        path: ['user-id', 'cloudClipboardItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'cloudClipboardItem-id'],
      },
      params,
    };
  },
};
