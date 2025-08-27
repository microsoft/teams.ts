export * as disableSmsSignIn from './disableSmsSignIn';
export * as enableSmsSignIn from './enableSmsSignIn';
export * as resetPassword from './resetPassword';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/authentication/methods': Operation<
    '/users/{user-id}/authentication/methods',
    'get'
  >;
  'GET /users/{user-id}/authentication/methods/{authenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/methods/{authenticationMethod-id}',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/methods/{authenticationMethod-id}',
    'patch'
  >;
  'POST /users/{user-id}/authentication/methods': Operation<
    '/users/{user-id}/authentication/methods',
    'post'
  >;
}

/**
 * `GET /users/{user-id}/authentication/methods`
 *
 * Represents all authentication methods registered to a user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/methods']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/methods']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/methods',
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
 * `GET /users/{user-id}/authentication/methods/{authenticationMethod-id}`
 *
 * Represents all authentication methods registered to a user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/methods/{authenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/methods/{authenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/methods/{authenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'authenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication/methods/{authenticationMethod-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'authenticationMethod-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/authentication/methods`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/methods']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/methods']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/authentication/methods']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/methods',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
