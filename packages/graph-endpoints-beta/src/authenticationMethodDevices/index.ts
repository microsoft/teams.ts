export * as hardwareOathDevices from './hardwareOathDevices';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /authenticationMethodDevices/{authenticationMethodDevice-id}': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}',
    'delete'
  >;
  'GET /authenticationMethodDevices': Operation<'/authenticationMethodDevices', 'get'>;
  'GET /authenticationMethodDevices/{authenticationMethodDevice-id}': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}',
    'get'
  >;
  'PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}',
    'patch'
  >;
  'POST /authenticationMethodDevices': Operation<'/authenticationMethodDevices', 'post'>;
}

/**
 * `DELETE /authenticationMethodDevices/{authenticationMethodDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /authenticationMethodDevices/{authenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /authenticationMethodDevices/{authenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['authenticationMethodDevice-id'],
    },
    params,
  };
}

/**
 * `GET /authenticationMethodDevices`
 *
 */
export function list(
  params?: IEndpoints['GET /authenticationMethodDevices']['parameters']
): EndpointRequest<IEndpoints['GET /authenticationMethodDevices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/authenticationMethodDevices',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /authenticationMethodDevices/{authenticationMethodDevice-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}',
    paramDefs: {
      path: ['authenticationMethodDevice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}']['body'],
  params?: IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}',
    paramDefs: {
      path: ['authenticationMethodDevice-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /authenticationMethodDevices`
 *
 */
export function create(
  body: IEndpoints['POST /authenticationMethodDevices']['body']
): EndpointRequest<IEndpoints['POST /authenticationMethodDevices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/authenticationMethodDevices',
    body,
  };
}
