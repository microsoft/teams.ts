import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
    'delete'
  >;
  'GET /users/{user-id}/cloudClipboard/items': Operation<
    '/users/{user-id}/cloudClipboard/items',
    'get'
  >;
  'GET /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
    'get'
  >;
  'PATCH /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
    'patch'
  >;
  'POST /users/{user-id}/cloudClipboard/items': Operation<
    '/users/{user-id}/cloudClipboard/items',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'cloudClipboardItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/cloudClipboard/items`
 *
 * Represents a collection of Cloud Clipboard items.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/cloudClipboard/items']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/cloudClipboard/items']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/cloudClipboard/items',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}`
 *
 * Represents a collection of Cloud Clipboard items.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'cloudClipboardItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/cloudClipboard/items/{cloudClipboardItem-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'cloudClipboardItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/cloudClipboard/items`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/cloudClipboard/items']['body'],
  params?: IEndpoints['POST /users/{user-id}/cloudClipboard/items']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudClipboard/items']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/cloudClipboard/items',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
