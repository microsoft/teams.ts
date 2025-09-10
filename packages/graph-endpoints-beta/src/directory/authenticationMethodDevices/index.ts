export * as hardwareOathDevices from './hardwareOathDevices';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/authenticationMethodDevices': Operation<
    '/directory/authenticationMethodDevices',
    'delete'
  >;
  'GET /directory/authenticationMethodDevices': Operation<
    '/directory/authenticationMethodDevices',
    'get'
  >;
  'PATCH /directory/authenticationMethodDevices': Operation<
    '/directory/authenticationMethodDevices',
    'patch'
  >;
}

/**
 * `DELETE /directory/authenticationMethodDevices`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/authenticationMethodDevices']['parameters']
): EndpointRequest<IEndpoints['DELETE /directory/authenticationMethodDevices']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/authenticationMethodDevices',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /directory/authenticationMethodDevices`
 *
 * Exposes the hardware OATH method in the directory.
 */
export function list(
  params?: IEndpoints['GET /directory/authenticationMethodDevices']['parameters']
): EndpointRequest<IEndpoints['GET /directory/authenticationMethodDevices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/authenticationMethodDevices',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/authenticationMethodDevices`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/authenticationMethodDevices']['body']
): EndpointRequest<IEndpoints['PATCH /directory/authenticationMethodDevices']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/authenticationMethodDevices',
    body,
  };
}
