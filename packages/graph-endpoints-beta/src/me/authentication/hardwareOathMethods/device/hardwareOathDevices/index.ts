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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'hardwareOathAuthenticationMethod-id', in: 'path' }],
    params,
    body,
  };
}
