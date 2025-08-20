import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/names/{personName-id}': Operation<
    '/users/{user-id}/profile/names/{personName-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/names': Operation<'/users/{user-id}/profile/names', 'get'>;
  'GET /users/{user-id}/profile/names/{personName-id}': Operation<
    '/users/{user-id}/profile/names/{personName-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/names/{personName-id}': Operation<
    '/users/{user-id}/profile/names/{personName-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/names': Operation<'/users/{user-id}/profile/names', 'post'>;
}

/**
 * `DELETE /users/{user-id}/profile/names/{personName-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/names/{personName-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/names/{personName-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/names/{personName-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'personName-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/names`
 *
 * Represents the names a user has added to their profile.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/names']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/names']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/names',
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
 * `GET /users/{user-id}/profile/names/{personName-id}`
 *
 * Represents the names a user has added to their profile.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/names/{personName-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/names/{personName-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/names/{personName-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'personName-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/names/{personName-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/names/{personName-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/names/{personName-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/profile/names/{personName-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/names/{personName-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'personName-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/names`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/names']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/names']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/names']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/names',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
