import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/platformCredentialMethods': Operation<
    '/users/{user-id}/authentication/platformCredentialMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    'get'
  >;
  'GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device': Operation<
    '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}`
 *
 * Delete a platformCredentialAuthenticationMethod object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'platformCredentialAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/platformCredentialMethods`
 *
 * Represents a platform credential instance registered to a user on Mac OS.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/platformCredentialMethods',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}`
 *
 * Represents a platform credential instance registered to a user on Mac OS.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    paramDefs: {
      path: ['user-id', 'platformCredentialAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const device = {
  /**
   * `GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device`
   *
   * The registered device on which this Platform Credential resides. Supports $expand. When you get a user&#x27;s Platform Credential registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/platformCredentialAuthenticationMethod/_jpuR-TGZtk6aQCLF3BQjA2?$expand&#x3D;device.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'platformCredentialAuthenticationMethod-id'],
      },
      params,
    };
  },
};
