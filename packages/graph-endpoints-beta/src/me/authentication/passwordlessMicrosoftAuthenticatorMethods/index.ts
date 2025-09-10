import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods': Operation<
    '/me/authentication/passwordlessMicrosoftAuthenticatorMethods',
    'get'
  >;
  'GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}',
    'get'
  >;
  'GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device': Operation<
    '/me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device',
    'get'
  >;
}

/**
 * `DELETE /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['passwordlessMicrosoftAuthenticatorAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods`
 *
 * Retrieve a list of a user&#x27;s Microsoft Authenticator Passwordless Phone Sign-in method objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/passwordlessMicrosoftAuthenticatorMethods',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}`
 *
 * Retrieve a user&#x27;s single Microsoft Authenticator Passwordless Phone Sign-in method object.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: {
      path: ['passwordlessMicrosoftAuthenticatorAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const device = {
  /**
   * `GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['passwordlessMicrosoftAuthenticatorAuthenticationMethod-id'],
      },
      params,
    };
  },
};
