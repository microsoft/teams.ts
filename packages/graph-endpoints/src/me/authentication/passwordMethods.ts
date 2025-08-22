import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/authentication/passwordMethods': Operation<'/me/authentication/passwordMethods', 'get'>;
  'GET /me/authentication/passwordMethods/{passwordAuthenticationMethod-id}': Operation<
    '/me/authentication/passwordMethods/{passwordAuthenticationMethod-id}',
    'get'
  >;
  'POST /me/authentication/passwordMethods': Operation<
    '/me/authentication/passwordMethods',
    'post'
  >;
}

/**
 * `GET /me/authentication/passwordMethods`
 *
 * Retrieve a list of the passwords registered to a user, represented by a passwordAuthenticationMethod object. This API returns exactly one object referenced by ID 28c10230-6103-485e-b985-444c60001490, as a user can have exactly one password. For security, the password itself is never returned in the object and the password property is always null.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/passwordMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/passwordMethods']['response']> {
  return {
    method: 'get',
    path: '/me/authentication/passwordMethods',
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
 * `GET /me/authentication/passwordMethods/{passwordAuthenticationMethod-id}`
 *
 * Retrieve a password that&#x27;s registered to a user, represented by a passwordAuthenticationMethod object. For security, the password itself will never be returned in the object and the password property is always null.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/passwordMethods/{passwordAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/passwordMethods/{passwordAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/authentication/passwordMethods/{passwordAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'passwordAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /me/authentication/passwordMethods`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/passwordMethods']['body'],
  params?: IEndpoints['POST /me/authentication/passwordMethods']['parameters']
): EndpointRequest<IEndpoints['POST /me/authentication/passwordMethods']['response']> {
  return {
    method: 'post',
    path: '/me/authentication/passwordMethods',
    paramDefs: [],
    params,
    body,
  };
}
