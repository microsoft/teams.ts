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
    method: 'delete',
    path: '/me/todo',
    paramDefs: {
      header: ['If-Match'],
    },
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
    method: 'get',
    path: '/me/todo',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/todo`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/todo']['body']
): EndpointRequest<IEndpoints['PATCH /me/todo']['response']> {
  return {
    method: 'patch',
    path: '/me/todo',
    body,
  };
}
