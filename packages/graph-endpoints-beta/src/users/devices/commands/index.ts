export * as responsepayload from './responsepayload';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
      { name: 'command-id', in: 'path' },
    ],
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
      { name: 'device-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
      { name: 'command-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
      { name: 'command-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'device-id', in: 'path' },
    ],
    params,
    body,
  };
}
