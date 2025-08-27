import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/notifications/{notification-id}': Operation<
    '/users/{user-id}/notifications/{notification-id}',
    'delete'
  >;
  'GET /users/{user-id}/notifications': Operation<'/users/{user-id}/notifications', 'get'>;
  'GET /users/{user-id}/notifications/{notification-id}': Operation<
    '/users/{user-id}/notifications/{notification-id}',
    'get'
  >;
  'PATCH /users/{user-id}/notifications/{notification-id}': Operation<
    '/users/{user-id}/notifications/{notification-id}',
    'patch'
  >;
  'POST /users/{user-id}/notifications': Operation<'/users/{user-id}/notifications', 'post'>;
}

/**
 * `DELETE /users/{user-id}/notifications/{notification-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/notifications/{notification-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/notifications/{notification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/notifications/{notification-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'notification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/notifications`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/notifications']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/notifications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/notifications',
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
 * `GET /users/{user-id}/notifications/{notification-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/notifications/{notification-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/notifications/{notification-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/notifications/{notification-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'notification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/notifications/{notification-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/notifications/{notification-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/notifications/{notification-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/notifications/{notification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/notifications/{notification-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'notification-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/notifications`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/notifications']['body'],
  params?: IEndpoints['POST /users/{user-id}/notifications']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/notifications']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/notifications',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
