import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/interests/{personInterest-id}': Operation<
    '/users/{user-id}/profile/interests/{personInterest-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/interests': Operation<'/users/{user-id}/profile/interests', 'get'>;
  'GET /users/{user-id}/profile/interests/{personInterest-id}': Operation<
    '/users/{user-id}/profile/interests/{personInterest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/interests/{personInterest-id}': Operation<
    '/users/{user-id}/profile/interests/{personInterest-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/interests': Operation<
    '/users/{user-id}/profile/interests',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/profile/interests/{personInterest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/interests/{personInterest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/interests/{personInterest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/interests/{personInterest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'personInterest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/interests`
 *
 * Provides detailed information about interests the user has associated with themselves in various services.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/interests']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/interests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/interests',
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
 * `GET /users/{user-id}/profile/interests/{personInterest-id}`
 *
 * Provides detailed information about interests the user has associated with themselves in various services.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/interests/{personInterest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/interests/{personInterest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/interests/{personInterest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'personInterest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/interests/{personInterest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/interests/{personInterest-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/interests/{personInterest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/interests/{personInterest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/interests/{personInterest-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'personInterest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/interests`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/interests']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/interests']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/interests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/interests',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
