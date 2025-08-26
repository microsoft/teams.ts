import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/authentication/passwordMethods': Operation<
    '/users/{user-id}/authentication/passwordMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}',
    'get'
  >;
  'POST /users/{user-id}/authentication/passwordMethods': Operation<
    '/users/{user-id}/authentication/passwordMethods',
    'post'
  >;
}

/**
 * `GET /users/{user-id}/authentication/passwordMethods`
 *
 * Represents the details of the password authentication method registered to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/passwordMethods']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/passwordMethods']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/passwordMethods',
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
 * `GET /users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}`
 *
 * Represents the details of the password authentication method registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'passwordAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /users/{user-id}/authentication/passwordMethods`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/passwordMethods']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/passwordMethods']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/authentication/passwordMethods']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/passwordMethods',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
