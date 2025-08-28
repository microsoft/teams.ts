export * as lists from './lists';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/todo': Operation<'/users/{user-id}/todo', 'delete'>;
  'GET /users/{user-id}/todo': Operation<'/users/{user-id}/todo', 'get'>;
  'PATCH /users/{user-id}/todo': Operation<'/users/{user-id}/todo', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/todo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/todo']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/todo']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/todo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/todo`
 *
 * Represents the To Do services available to a user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/todo']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/todo']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/todo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/todo`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/todo']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/todo']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/todo']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/todo',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
