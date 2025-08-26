export * as lists from './lists';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/todo': Operation<'/me/todo', 'delete'>;
  'GET /me/todo': Operation<'/me/todo', 'get'>;
  'PATCH /me/todo': Operation<'/me/todo', 'patch'>;
}

/**
 * `DELETE /me/todo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/todo']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/todo']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/todo',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/todo`
 *
 * Represents the To Do services available to a user.
 */
export function get(
  params?: IEndpoints['GET /me/todo']['parameters']
): EndpointRequest<IEndpoints['GET /me/todo']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/todo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/todo`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/todo']['body'],
  params?: IEndpoints['PATCH /me/todo']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/todo']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/todo',
    paramDefs: [],
    params,
    body,
  };
}
