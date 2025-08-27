import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /me/notifications/{notification-id}': Operation<
    '/me/notifications/{notification-id}',
    'delete'
  >;
  'GET /me/notifications': Operation<'/me/notifications', 'get'>;
  'GET /me/notifications/{notification-id}': Operation<
    '/me/notifications/{notification-id}',
    'get'
  >;
  'PATCH /me/notifications/{notification-id}': Operation<
    '/me/notifications/{notification-id}',
    'patch'
  >;
  'POST /me/notifications': Operation<'/me/notifications', 'post'>;
}

/**
 * `DELETE /me/notifications/{notification-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/notifications/{notification-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/notifications/{notification-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/notifications/{notification-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'notification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/notifications`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /me/notifications']['parameters']
): EndpointRequest<IEndpoints['GET /me/notifications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/notifications',
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
 * `GET /me/notifications/{notification-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/notifications/{notification-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/notifications/{notification-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/notifications/{notification-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'notification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/notifications/{notification-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/notifications/{notification-id}']['body'],
  params?: IEndpoints['PATCH /me/notifications/{notification-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/notifications/{notification-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/notifications/{notification-id}',
    paramDefs: [{ name: 'notification-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/notifications`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/notifications']['body'],
  params?: IEndpoints['POST /me/notifications']['parameters']
): EndpointRequest<IEndpoints['POST /me/notifications']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/notifications',
    paramDefs: [],
    params,
    body,
  };
}
