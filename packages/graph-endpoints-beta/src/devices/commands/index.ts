import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /devices/{device-id}/commands/{command-id}': Operation<
    '/devices/{device-id}/commands/{command-id}',
    'delete'
  >;
  'GET /devices/{device-id}/commands': Operation<'/devices/{device-id}/commands', 'get'>;
  'GET /devices/{device-id}/commands/{command-id}': Operation<
    '/devices/{device-id}/commands/{command-id}',
    'get'
  >;
  'PATCH /devices/{device-id}/commands/{command-id}': Operation<
    '/devices/{device-id}/commands/{command-id}',
    'patch'
  >;
  'POST /devices/{device-id}/commands': Operation<'/devices/{device-id}/commands', 'post'>;
  'GET /devices/{device-id}/commands/{command-id}/responsepayload': Operation<
    '/devices/{device-id}/commands/{command-id}/responsepayload',
    'get'
  >;
}

/**
 * `DELETE /devices/{device-id}/commands/{command-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /devices/{device-id}/commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /devices/{device-id}/commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/devices/{device-id}/commands/{command-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['device-id', 'command-id'],
    },
    params,
  };
}

/**
 * `GET /devices/{device-id}/commands`
 *
 * Set of commands sent to this device.
 */
export function list(
  params?: IEndpoints['GET /devices/{device-id}/commands']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}/commands']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/devices/{device-id}/commands',
    paramDefs: {
      path: ['device-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /devices/{device-id}/commands/{command-id}`
 *
 * Set of commands sent to this device.
 */
export function get(
  params?: IEndpoints['GET /devices/{device-id}/commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}/commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/devices/{device-id}/commands/{command-id}',
    paramDefs: {
      path: ['device-id', 'command-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /devices/{device-id}/commands/{command-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /devices/{device-id}/commands/{command-id}']['body'],
  params?: IEndpoints['PATCH /devices/{device-id}/commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /devices/{device-id}/commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/devices/{device-id}/commands/{command-id}',
    paramDefs: {
      path: ['device-id', 'command-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /devices/{device-id}/commands`
 *
 */
export function create(
  body: IEndpoints['POST /devices/{device-id}/commands']['body'],
  params?: IEndpoints['POST /devices/{device-id}/commands']['parameters']
): EndpointRequest<IEndpoints['POST /devices/{device-id}/commands']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/devices/{device-id}/commands',
    paramDefs: {
      path: ['device-id'],
    },
    params,
    body,
  };
}

export const responsepayload = {
  /**
   * `GET /devices/{device-id}/commands/{command-id}/responsepayload`
   *
   */
  get: function get(
    params?: IEndpoints['GET /devices/{device-id}/commands/{command-id}/responsepayload']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /devices/{device-id}/commands/{command-id}/responsepayload']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/devices/{device-id}/commands/{command-id}/responsepayload',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['device-id', 'command-id'],
      },
      params,
    };
  },
};
