import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/windowsHelloForBusinessMethods': Operation<
    '/users/{user-id}/authentication/windowsHelloForBusinessMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    'get'
  >;
  'GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device': Operation<
    '/users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}`
 *
 * Deletes a windowsHelloForBusinessAuthenticationMethod object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'windowsHelloForBusinessAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/windowsHelloForBusinessMethods`
 *
 * Get a list of the windowsHelloForBusinessAuthenticationMethod objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/windowsHelloForBusinessMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/windowsHelloForBusinessMethods']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/windowsHelloForBusinessMethods',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}`
 *
 * Read the properties and relationships of a windowsHelloForBusinessAuthenticationMethod object.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    paramDefs: {
      path: ['user-id', 'windowsHelloForBusinessAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const device = {
  /**
   * `GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device`
   *
   * The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user&#x27;s Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand&#x3D;device.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'windowsHelloForBusinessAuthenticationMethod-id'],
      },
      params,
    };
  },
};
