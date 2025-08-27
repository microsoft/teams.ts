import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/websites/{personWebsite-id}': Operation<
    '/users/{user-id}/profile/websites/{personWebsite-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/websites': Operation<'/users/{user-id}/profile/websites', 'get'>;
  'GET /users/{user-id}/profile/websites/{personWebsite-id}': Operation<
    '/users/{user-id}/profile/websites/{personWebsite-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/websites/{personWebsite-id}': Operation<
    '/users/{user-id}/profile/websites/{personWebsite-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/websites': Operation<'/users/{user-id}/profile/websites', 'post'>;
}

/**
 * `DELETE /users/{user-id}/profile/websites/{personWebsite-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/websites/{personWebsite-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/websites/{personWebsite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/websites/{personWebsite-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'personWebsite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/websites`
 *
 * Represents detailed information about websites associated with a user in various services.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/websites']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/websites']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/websites',
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
 * `GET /users/{user-id}/profile/websites/{personWebsite-id}`
 *
 * Represents detailed information about websites associated with a user in various services.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/websites/{personWebsite-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/websites/{personWebsite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/websites/{personWebsite-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'personWebsite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/websites/{personWebsite-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/websites/{personWebsite-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/websites/{personWebsite-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/websites/{personWebsite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/websites/{personWebsite-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'personWebsite-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/websites`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/websites']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/websites']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/websites']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/websites',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
