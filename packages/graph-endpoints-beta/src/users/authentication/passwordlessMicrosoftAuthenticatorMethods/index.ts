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
  'GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device': Operation<
    '/users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device',
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
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'passwordlessMicrosoftAuthenticatorAuthenticationMethod-id'],
    },
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
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['user-id', 'passwordlessMicrosoftAuthenticatorAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const device = {
  /**
   * `GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'passwordlessMicrosoftAuthenticatorAuthenticationMethod-id'],
      },
      params,
    };
  },
};
