export * as assignTo from './assignTo';
export * as hardwareOathDevices from './hardwareOathDevices';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    'delete'
  >;
  'GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    'get'
  >;
  'PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    'patch'
  >;
}

/**
 * `DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    paramDefs: {
      header: ['If-Match'],
      path: ['hardwareOathAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device`
 *
 * Exposes the hardware OATH method in the directory.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    paramDefs: {
      path: ['hardwareOathAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['body'],
  params?: IEndpoints['PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    paramDefs: {
      path: ['hardwareOathAuthenticationMethod-id'],
    },
    params,
    body,
  };
}
