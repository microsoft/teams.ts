import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/me/cloudClipboard/items/{cloudClipboardItem-id}',
    'delete'
  >;
  'GET /me/cloudClipboard/items': Operation<'/me/cloudClipboard/items', 'get'>;
  'GET /me/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/me/cloudClipboard/items/{cloudClipboardItem-id}',
    'get'
  >;
  'PATCH /me/cloudClipboard/items/{cloudClipboardItem-id}': Operation<
    '/me/cloudClipboard/items/{cloudClipboardItem-id}',
    'patch'
  >;
  'POST /me/cloudClipboard/items': Operation<'/me/cloudClipboard/items', 'post'>;
}

/**
 * `DELETE /me/cloudClipboard/items/{cloudClipboardItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/cloudClipboard/items/{cloudClipboardItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/cloudClipboard/items/{cloudClipboardItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudClipboardItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/cloudClipboard/items`
 *
 * Get a list of the cloudClipboardItem objects and their properties for a user. This API only allows you to get cloudClipboardItem objects for: This API doesn&#x27;t support using another user&#x27;s credentials to get a cloudClipboardItem for a user.
 */
export function list(
  params?: IEndpoints['GET /me/cloudClipboard/items']['parameters']
): EndpointRequest<IEndpoints['GET /me/cloudClipboard/items']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/cloudClipboard/items',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/cloudClipboard/items/{cloudClipboardItem-id}`
 *
 * Represents a collection of Cloud Clipboard items.
 */
export function get(
  params?: IEndpoints['GET /me/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/cloudClipboard/items/{cloudClipboardItem-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/cloudClipboard/items/{cloudClipboardItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudClipboardItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/cloudClipboard/items/{cloudClipboardItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/cloudClipboard/items/{cloudClipboardItem-id}']['body'],
  params?: IEndpoints['PATCH /me/cloudClipboard/items/{cloudClipboardItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/cloudClipboard/items/{cloudClipboardItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/cloudClipboard/items/{cloudClipboardItem-id}',
    paramDefs: [{ name: 'cloudClipboardItem-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/cloudClipboard/items`
 *
 */
export function create(
  body: IEndpoints['POST /me/cloudClipboard/items']['body'],
  params?: IEndpoints['POST /me/cloudClipboard/items']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudClipboard/items']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudClipboard/items',
    paramDefs: [],
    params,
    body,
  };
}
