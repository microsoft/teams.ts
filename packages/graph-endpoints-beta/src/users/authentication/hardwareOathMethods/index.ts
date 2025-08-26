export * as activate from './activate';
export * as assignAndActivate from './assignAndActivate';
export * as assignAndActivateBySerialNumber from './assignAndActivateBySerialNumber';
export * as deactivate from './deactivate';
export * as device from './device';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/hardwareOathMethods': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    'get'
  >;
  'POST /users/{user-id}/authentication/hardwareOathMethods': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/hardwareOathMethods`
 *
 * The hardware OATH time-based one-time password (TOTP) devices assigned to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/hardwareOathMethods',
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
 * `GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}`
 *
 * The hardware OATH time-based one-time password (TOTP) devices assigned to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /users/{user-id}/authentication/hardwareOathMethods`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/hardwareOathMethods',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
