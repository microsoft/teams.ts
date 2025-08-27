export * as device from './device';

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
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'windowsHelloForBusinessAuthenticationMethod-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/windowsHelloForBusinessMethods',
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
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'windowsHelloForBusinessAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
