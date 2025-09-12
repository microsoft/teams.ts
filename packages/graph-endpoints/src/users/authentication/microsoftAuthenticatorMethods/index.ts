import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/microsoftAuthenticatorMethods': Operation<
    '/users/{user-id}/authentication/microsoftAuthenticatorMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    'get'
  >;
  'GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device': Operation<
    '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}`
 *
 * Delete a microsoftAuthenticatorAuthenticationMethod object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'microsoftAuthenticatorAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/microsoftAuthenticatorMethods`
 *
 * Get a list of the microsoftAuthenticatorAuthenticationMethod objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/microsoftAuthenticatorMethods',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}`
 *
 * Read the properties and relationships of a microsoftAuthenticatorAuthenticationMethod object.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}',
    paramDefs: {
      path: ['user-id', 'microsoftAuthenticatorAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const device = {
  /**
   * `GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device`
   *
   * The registered device on which Microsoft Authenticator resides. This property is null if the device isn&#x27;t registered for passwordless Phone Sign-In.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'microsoftAuthenticatorAuthenticationMethod-id'],
      },
      params,
    };
  },
};
