import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}': Operation<
    '/me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/platformCredentialMethods': Operation<
    '/me/authentication/platformCredentialMethods',
    'get'
  >;
  'GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}': Operation<
    '/me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    'get'
  >;
  'GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device': Operation<
    '/me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device',
    'get'
  >;
}

/**
 * `DELETE /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['platformCredentialAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/platformCredentialMethods`
 *
 * Get a list of the platformCredentialAuthenticationMethod objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/platformCredentialMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/platformCredentialMethods']['response']> {
  return {
    method: 'get',
    path: '/me/authentication/platformCredentialMethods',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}`
 *
 * Read the properties and relationships of a platformCredentialAuthenticationMethod object.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}',
    paramDefs: {
      path: ['platformCredentialAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const device = {
  /**
   * `GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device`
   *
   * The registered device on which this Platform Credential resides. Supports $expand. When you get a user&#x27;s Platform Credential registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/platformCredentialAuthenticationMethod/_jpuR-TGZtk6aQCLF3BQjA2?$expand&#x3D;device.
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device']['response']
  > {
    return {
      method: 'get',
      path: '/me/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['platformCredentialAuthenticationMethod-id'],
      },
      params,
    };
  },
};
