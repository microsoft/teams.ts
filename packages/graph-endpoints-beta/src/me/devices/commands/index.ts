import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/devices/{device-id}/commands/{command-id}': Operation<
    '/me/devices/{device-id}/commands/{command-id}',
    'delete'
  >;
  'GET /me/devices/{device-id}/commands': Operation<'/me/devices/{device-id}/commands', 'get'>;
  'GET /me/devices/{device-id}/commands/{command-id}': Operation<
    '/me/devices/{device-id}/commands/{command-id}',
    'get'
  >;
  'PATCH /me/devices/{device-id}/commands/{command-id}': Operation<
    '/me/devices/{device-id}/commands/{command-id}',
    'patch'
  >;
  'POST /me/devices/{device-id}/commands': Operation<'/me/devices/{device-id}/commands', 'post'>;
  'GET /me/devices/{device-id}/commands/{command-id}/responsepayload': Operation<
    '/me/devices/{device-id}/commands/{command-id}/responsepayload',
    'get'
  >;
}

/**
 * `DELETE /me/devices/{device-id}/commands/{command-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/devices/{device-id}/commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/devices/{device-id}/commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/devices/{device-id}/commands/{command-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['device-id', 'command-id'],
    },
    params,
  };
}

/**
 * `GET /me/devices/{device-id}/commands`
 *
 * Set of commands sent to this device.
 */
export function list(
  params?: IEndpoints['GET /me/devices/{device-id}/commands']['parameters']
): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/commands']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices/{device-id}/commands',
    paramDefs: {
      path: ['device-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/devices/{device-id}/commands/{command-id}`
 *
 * Set of commands sent to this device.
 */
export function get(
  params?: IEndpoints['GET /me/devices/{device-id}/commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices/{device-id}/commands/{command-id}',
    paramDefs: {
      path: ['device-id', 'command-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/devices/{device-id}/commands/{command-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/devices/{device-id}/commands/{command-id}']['body'],
  params?: IEndpoints['PATCH /me/devices/{device-id}/commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/devices/{device-id}/commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/devices/{device-id}/commands/{command-id}',
    paramDefs: {
      path: ['device-id', 'command-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/devices/{device-id}/commands`
 *
 */
export function create(
  body: IEndpoints['POST /me/devices/{device-id}/commands']['body'],
  params?: IEndpoints['POST /me/devices/{device-id}/commands']['parameters']
): EndpointRequest<IEndpoints['POST /me/devices/{device-id}/commands']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/devices/{device-id}/commands',
    paramDefs: {
      path: ['device-id'],
    },
    params,
    body,
  };
}

export const responsepayload = {
  /**
   * `GET /me/devices/{device-id}/commands/{command-id}/responsepayload`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/devices/{device-id}/commands/{command-id}/responsepayload']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/devices/{device-id}/commands/{command-id}/responsepayload']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/commands/{command-id}/responsepayload',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['device-id', 'command-id'],
      },
      params,
    };
  },
};
