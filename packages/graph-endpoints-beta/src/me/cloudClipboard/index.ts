import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/cloudClipboard': Operation<'/me/cloudClipboard', 'delete'>;
  'GET /me/cloudClipboard': Operation<'/me/cloudClipboard', 'get'>;
  'PATCH /me/cloudClipboard': Operation<'/me/cloudClipboard', 'patch'>;
  'GET /me/cloudClipboard/items': Operation<'/me/cloudClipboard/items', 'get'>;
  'POST /me/cloudClipboard/items': Operation<'/me/cloudClipboard/items', 'post'>;
  'GET /me/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/me/cloudClipboard/items/{cloudClipboardItem-id}',
    'get'
  >;
  'PATCH /me/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/me/cloudClipboard/items/{cloudClipboardItem-id}',
    'patch'
  >;
  'DELETE /me/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/me/cloudClipboard/items/{cloudClipboardItem-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/cloudClipboard`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/cloudClipboard']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/cloudClipboard']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/cloudClipboard',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/cloudClipboard`
 *
 */
export function get(
  params?: IEndpoints['GET /me/cloudClipboard']['parameters']
): EndpointRequest<IEndpoints['GET /me/cloudClipboard']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/cloudClipboard',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/cloudClipboard`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/cloudClipboard']['body']
): EndpointRequest<IEndpoints['PATCH /me/cloudClipboard']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/cloudClipboard',
    body,
  };
}

export const items = {
  /**
   * `GET /me/cloudClipboard/items`
   *
   * Get a list of the cloudClipboardItem objects and their properties for a user. This API only allows you to get cloudClipboardItem objects for: This API doesn&#x27;t support using another user&#x27;s credentials to get a cloudClipboardItem for a user.
   */
  list: function list(
    params?: IEndpoints['GET /me/cloudClipboard/items']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/cloudClipboard/items']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/cloudClipboard/items',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/cloudClipboard/items`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/cloudClipboard/items']['body']
  ): EndpointRequest<IEndpoints['POST /me/cloudClipboard/items']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudClipboard/items',
      body,
    };
  },
  /**
   * `GET /me/cloudClipboard/items/{cloudClipboardItem-id}`
   *
   * Represents a collection of Cloud Clipboard items.
   */
  get: function get(
    params?: IEndpoints['GET /me/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/cloudClipboard/items/{cloudClipboardItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/cloudClipboard/items/{cloudClipboardItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudClipboardItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/cloudClipboard/items/{cloudClipboardItem-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/cloudClipboard/items/{cloudClipboardItem-id}']['body'],
    params?: IEndpoints['PATCH /me/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/cloudClipboard/items/{cloudClipboardItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/cloudClipboard/items/{cloudClipboardItem-id}',
      paramDefs: {
        path: ['cloudClipboardItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/cloudClipboard/items/{cloudClipboardItem-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/cloudClipboard/items/{cloudClipboardItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/cloudClipboard/items/{cloudClipboardItem-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudClipboardItem-id'],
      },
      params,
    };
  },
};
