export * as responsepayload from './responsepayload';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'device-id', in: 'path' },
      { name: 'command-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
      { name: 'command-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'device-id', in: 'path' },
      { name: 'command-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'device-id', in: 'path' }],
    params,
    body,
  };
}
