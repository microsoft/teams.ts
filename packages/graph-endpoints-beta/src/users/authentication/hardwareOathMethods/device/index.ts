export * as assignTo from './assignTo';
export * as hardwareOathDevices from './hardwareOathDevices';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    'delete'
  >;
  'GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'hardwareOathAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device`
 *
 * Exposes the hardware OATH method in the directory.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    paramDefs: {
      path: ['user-id', 'hardwareOathAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device',
    paramDefs: {
      path: ['user-id', 'hardwareOathAuthenticationMethod-id'],
    },
    params,
    body,
  };
}
