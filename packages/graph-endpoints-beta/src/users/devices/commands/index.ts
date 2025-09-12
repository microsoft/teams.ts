import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/devices/{device-id}/commands/{command-id}': Operation<
    '/users/{user-id}/devices/{device-id}/commands/{command-id}',
    'delete'
  >;
  'GET /users/{user-id}/devices/{device-id}/commands': Operation<
    '/users/{user-id}/devices/{device-id}/commands',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/commands/{command-id}': Operation<
    '/users/{user-id}/devices/{device-id}/commands/{command-id}',
    'get'
  >;
  'PATCH /users/{user-id}/devices/{device-id}/commands/{command-id}': Operation<
    '/users/{user-id}/devices/{device-id}/commands/{command-id}',
    'patch'
  >;
  'POST /users/{user-id}/devices/{device-id}/commands': Operation<
    '/users/{user-id}/devices/{device-id}/commands',
    'post'
  >;
  'GET /users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload': Operation<
    '/users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/devices/{device-id}/commands/{command-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/devices/{device-id}/commands/{command-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/devices/{device-id}/commands/{command-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/devices/{device-id}/commands/{command-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'device-id', 'command-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/devices/{device-id}/commands`
 *
 * Set of commands sent to this device.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/commands']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/devices/{device-id}/commands']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}/commands',
    paramDefs: {
      path: ['user-id', 'device-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/devices/{device-id}/commands/{command-id}`
 *
 * Set of commands sent to this device.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/commands/{command-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/devices/{device-id}/commands/{command-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}/commands/{command-id}',
    paramDefs: {
      path: ['user-id', 'device-id', 'command-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/devices/{device-id}/commands/{command-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/devices/{device-id}/commands/{command-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/devices/{device-id}/commands/{command-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/devices/{device-id}/commands/{command-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/devices/{device-id}/commands/{command-id}',
    paramDefs: {
      path: ['user-id', 'device-id', 'command-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/devices/{device-id}/commands`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/devices/{device-id}/commands']['body'],
  params?: IEndpoints['POST /users/{user-id}/devices/{device-id}/commands']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/devices/{device-id}/commands']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/devices/{device-id}/commands',
    paramDefs: {
      path: ['user-id', 'device-id'],
    },
    params,
    body,
  };
}

export const responsepayload = {
  /**
   * `GET /users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/commands/{command-id}/responsepayload',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'device-id', 'command-id'],
      },
      params,
    };
  },
};
