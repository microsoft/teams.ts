export * as items from './items';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/cloudClipboard': Operation<'/users/{user-id}/cloudClipboard', 'delete'>;
  'GET /users/{user-id}/cloudClipboard': Operation<'/users/{user-id}/cloudClipboard', 'get'>;
  'PATCH /users/{user-id}/cloudClipboard': Operation<'/users/{user-id}/cloudClipboard', 'patch'>;
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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
