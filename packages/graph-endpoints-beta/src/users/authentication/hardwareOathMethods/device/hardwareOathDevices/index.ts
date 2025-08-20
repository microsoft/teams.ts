export * as assignTo from './assignTo';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices',
    'get'
  >;
  'GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'patch'
  >;
  'POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices`
 *
 * Exposes the hardware OATH method in the directory.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices',
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
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 * Exposes the hardware OATH method in the directory.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
    ],
    params,
    body,
  };
}
