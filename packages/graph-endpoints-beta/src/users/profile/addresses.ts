import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/addresses/{itemAddress-id}': Operation<
    '/users/{user-id}/profile/addresses/{itemAddress-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/addresses': Operation<'/users/{user-id}/profile/addresses', 'get'>;
  'GET /users/{user-id}/profile/addresses/{itemAddress-id}': Operation<
    '/users/{user-id}/profile/addresses/{itemAddress-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/addresses/{itemAddress-id}': Operation<
    '/users/{user-id}/profile/addresses/{itemAddress-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/addresses': Operation<
    '/users/{user-id}/profile/addresses',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/profile/addresses/{itemAddress-id}`
 *
 * Deletes an itemAddress object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/addresses/{itemAddress-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/addresses/{itemAddress-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/addresses/{itemAddress-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'itemAddress-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/addresses`
 *
 * Represents details of addresses associated with the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/addresses']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/addresses']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/addresses',
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
 * `GET /users/{user-id}/profile/addresses/{itemAddress-id}`
 *
 * Represents details of addresses associated with the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/addresses/{itemAddress-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/addresses/{itemAddress-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/addresses/{itemAddress-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'itemAddress-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/addresses/{itemAddress-id}`
 *
 * Update the properties of an itemAddress object.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/addresses/{itemAddress-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/addresses/{itemAddress-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/addresses/{itemAddress-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/addresses/{itemAddress-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'itemAddress-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/addresses`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/addresses']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/addresses']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/addresses']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/addresses',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
