export * as historyItems from './historyItems';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/activities/{userActivity-id}': Operation<
    '/users/{user-id}/activities/{userActivity-id}',
    'delete'
  >;
  'GET /users/{user-id}/activities': Operation<'/users/{user-id}/activities', 'get'>;
  'GET /users/{user-id}/activities/{userActivity-id}': Operation<
    '/users/{user-id}/activities/{userActivity-id}',
    'get'
  >;
  'PATCH /users/{user-id}/activities/{userActivity-id}': Operation<
    '/users/{user-id}/activities/{userActivity-id}',
    'patch'
  >;
  'POST /users/{user-id}/activities': Operation<'/users/{user-id}/activities', 'post'>;
}

/**
 * `DELETE /users/{user-id}/activities/{userActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/activities/{userActivity-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/activities/{userActivity-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/activities/{userActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'userActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/activities`
 *
 * The user&#x27;s activities across devices. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/activities']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/activities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/activities',
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
 * `GET /users/{user-id}/activities/{userActivity-id}`
 *
 * The user&#x27;s activities across devices. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/activities/{userActivity-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/activities/{userActivity-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/activities/{userActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'userActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/activities/{userActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/activities/{userActivity-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/activities/{userActivity-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/activities/{userActivity-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/activities/{userActivity-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'userActivity-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/activities']['body'],
  params?: IEndpoints['POST /users/{user-id}/activities']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/activities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/activities',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
