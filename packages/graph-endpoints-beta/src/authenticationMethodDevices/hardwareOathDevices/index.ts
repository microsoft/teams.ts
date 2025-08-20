export * as assignTo from './assignTo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'delete'
  >;
  'GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices',
    'get'
  >;
  'GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'get'
  >;
  'PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'patch'
  >;
  'POST /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices',
    'post'
  >;
}

/**
 * `DELETE /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationMethodDevice-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices`
 *
 * Exposes the hardware OATH method in the directory.
 */
export function list(
  params?: IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices']['parameters']
): EndpointRequest<
  IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationMethodDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 * Exposes the hardware OATH method in the directory.
 */
export function get(
  params?: IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationMethodDevice-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['body'],
  params?: IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: [
      { name: 'authenticationMethodDevice-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices`
 *
 */
export function create(
  body: IEndpoints['POST /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices']['body'],
  params?: IEndpoints['POST /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices']['parameters']
): EndpointRequest<
  IEndpoints['POST /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices',
    paramDefs: [{ name: 'authenticationMethodDevice-id', in: 'path' }],
    params,
    body,
  };
}
