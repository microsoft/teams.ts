export * as assignTo from './assignTo';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'delete'
  >;
  'GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices',
    'get'
  >;
  'GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'get'
  >;
  'PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'patch'
  >;
  'POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices',
    'post'
  >;
}

/**
 * `DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'hardwareOathAuthenticationMethod-id',
        'hardwareOathTokenAuthenticationMethodDevice-id',
      ],
    },
    params,
  };
}

/**
 * `GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices`
 *
 * Exposes the hardware OATH method in the directory.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices',
    paramDefs: {
      path: ['hardwareOathAuthenticationMethod-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 * Exposes the hardware OATH method in the directory.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: {
      path: [
        'hardwareOathAuthenticationMethod-id',
        'hardwareOathTokenAuthenticationMethodDevice-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['body'],
  params?: IEndpoints['PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: {
      path: [
        'hardwareOathAuthenticationMethod-id',
        'hardwareOathTokenAuthenticationMethodDevice-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices']['body'],
  params?: IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices',
    paramDefs: {
      path: ['hardwareOathAuthenticationMethod-id'],
    },
    params,
    body,
  };
}
