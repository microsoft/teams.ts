export * as activate from './activate';
export * as assignAndActivate from './assignAndActivate';
export * as assignAndActivateBySerialNumber from './assignAndActivateBySerialNumber';
export * as deactivate from './deactivate';
export * as device from './device';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/hardwareOathMethods': Operation<
    '/me/authentication/hardwareOathMethods',
    'get'
  >;
  'GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    'get'
  >;
  'POST /me/authentication/hardwareOathMethods': Operation<
    '/me/authentication/hardwareOathMethods',
    'post'
  >;
}

/**
 * `DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}`
 *
 * Unassign a hardware token from a user. The token remains in the directory and its details can be retrieved by List hardwareOathDevices API.
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/hardwareOathMethods`
 *
 * Get a list of the hardware tokens assigned to a user.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/hardwareOathMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/hardwareOathMethods']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/hardwareOathMethods',
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
 * `GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}`
 *
 * Get the details of the hardware token assigned to a user.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /me/authentication/hardwareOathMethods`
 *
 * Assign a hardware token to a user without activation. To activate, use the activation API operation.
 */
export function create(
  body: IEndpoints['POST /me/authentication/hardwareOathMethods']['body'],
  params?: IEndpoints['POST /me/authentication/hardwareOathMethods']['parameters']
): EndpointRequest<IEndpoints['POST /me/authentication/hardwareOathMethods']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/hardwareOathMethods',
    paramDefs: [],
    params,
    body,
  };
}
