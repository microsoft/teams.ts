export * as historyItems from './historyItems';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/activities/{userActivity-id}': Operation<
    '/me/activities/{userActivity-id}',
    'delete'
  >;
  'GET /me/activities': Operation<'/me/activities', 'get'>;
  'GET /me/activities/{userActivity-id}': Operation<'/me/activities/{userActivity-id}', 'get'>;
  'PATCH /me/activities/{userActivity-id}': Operation<'/me/activities/{userActivity-id}', 'patch'>;
  'POST /me/activities': Operation<'/me/activities', 'post'>;
}

/**
 * `DELETE /me/activities/{userActivity-id}`
 *
 * Delete an existing user activity for your app.
 */
export function del(
  params?: IEndpoints['DELETE /me/activities/{userActivity-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/activities/{userActivity-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/activities/{userActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/activities`
 *
 * The user&#x27;s activities across devices. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/activities']['parameters']
): EndpointRequest<IEndpoints['GET /me/activities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/activities',
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
 * `GET /me/activities/{userActivity-id}`
 *
 * The user&#x27;s activities across devices. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/activities/{userActivity-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/activities/{userActivity-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/activities/{userActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/activities/{userActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/activities/{userActivity-id}']['body'],
  params?: IEndpoints['PATCH /me/activities/{userActivity-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/activities/{userActivity-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/activities/{userActivity-id}',
    paramDefs: [{ name: 'userActivity-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/activities`
 *
 */
export function create(
  body: IEndpoints['POST /me/activities']['body'],
  params?: IEndpoints['POST /me/activities']['parameters']
): EndpointRequest<IEndpoints['POST /me/activities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/activities',
    paramDefs: [],
    params,
    body,
  };
}
