export * as device from './device';

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
    method: 'delete',
    path: '/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsHelloForBusinessAuthenticationMethod-id', in: 'path' },
    ],
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
    method: 'get',
    path: '/me/authentication/windowsHelloForBusinessMethods',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    method: 'get',
    path: '/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsHelloForBusinessAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
