import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}': Operation<
    '/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/windowsHelloForBusinessMethods': Operation<
    '/me/authentication/windowsHelloForBusinessMethods',
    'get'
  >;
  'GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}': Operation<
    '/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    'get'
  >;
  'GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device': Operation<
    '/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device',
    'get'
  >;
}

/**
 * `DELETE /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsHelloForBusinessAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/windowsHelloForBusinessMethods`
 *
 * Represents the Windows Hello for Business authentication method registered to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/windowsHelloForBusinessMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/windowsHelloForBusinessMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/windowsHelloForBusinessMethods',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}`
 *
 * Represents the Windows Hello for Business authentication method registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    paramDefs: {
      path: ['windowsHelloForBusinessAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const device = {
  /**
   * `GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device`
   *
   * The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user&#x27;s Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand&#x3D;device.
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsHelloForBusinessAuthenticationMethod-id'],
      },
      params,
    };
  },
};
