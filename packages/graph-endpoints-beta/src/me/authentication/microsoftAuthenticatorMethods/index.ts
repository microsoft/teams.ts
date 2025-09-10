import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/microsoftAuthenticatorMethods': Operation<
    '/me/authentication/microsoftAuthenticatorMethods',
    'get'
  >;
  'GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    'get'
  >;
  'GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device': Operation<
    '/me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device',
    'get'
  >;
}

/**
 * `DELETE /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['microsoftAuthenticatorAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/microsoftAuthenticatorMethods`
 *
 * The details of the Microsoft Authenticator app registered to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/microsoftAuthenticatorMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/microsoftAuthenticatorMethods']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/microsoftAuthenticatorMethods',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}`
 *
 * The details of the Microsoft Authenticator app registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: {
      path: ['microsoftAuthenticatorAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const device = {
  /**
   * `GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device`
   *
   * The registered device on which Microsoft Authenticator resides. This property is null if the device isn&#x27;t registered for passwordless Phone Sign-In.
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['microsoftAuthenticatorAuthenticationMethod-id'],
      },
      params,
    };
  },
};
