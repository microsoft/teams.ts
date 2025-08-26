export * as device from './device';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods': Operation<
    '/users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}`
 *
 * Deletes a user&#x27;s Microsoft Authenticator Passwordless Phone Sign-in method object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'passwordlessMicrosoftAuthenticatorAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods`
 *
 * Represents the Microsoft Authenticator Passwordless Phone Sign-in methods registered to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods',
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
 * `GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}`
 *
 * Represents the Microsoft Authenticator Passwordless Phone Sign-in methods registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'passwordlessMicrosoftAuthenticatorAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
