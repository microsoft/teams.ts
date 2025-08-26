export * as settingStates from './settingStates';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates',
    'get'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'patch'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates`
 *
 * Security baseline states for this device.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates',
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
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 * Security baseline states for this device.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
