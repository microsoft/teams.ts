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
    paramDefs: {
      header: ['If-Match'],
      path: ['userActivity-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['userActivity-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['userActivity-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/activities`
 *
 */
export function create(
  body: IEndpoints['POST /me/activities']['body']
): EndpointRequest<IEndpoints['POST /me/activities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/activities',
    body,
  };
}
